<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderTransaction;
use App\Models\OrderItem;

class OrderTransactionController extends Controller
{
    public function createOrderTransaction(Request $request)
    {
        try {
            \Log::info('Raw Request Data:', ['request' => $request->all()]);

            // Validate the request data
            $request->validate([
                'name' => 'required|string',
                'phoneNumber' => 'required|string',
                'message' => 'nullable|string',
                'cartItems' => 'required|array|min:1',
                'cartItems.*.name' => 'required|string',
                'cartItems.*.amount' => 'required|integer|min:1',
                'cartItems.*.price' => 'required|numeric|min:0',
            ]);

            // Extract data from the request
            $name = $request->input('name');
            $phoneNumber = $request->input('phoneNumber');
            $message = $request->input('message');
            $cartItems = $request->input('cartItems');

            // Calculate the total price
            $totalPrice = array_reduce($cartItems, function ($carry, $item) {
                return $carry + ($item['amount'] * $item['price']);
            }, 0);

            // Create a new order transaction
            $orderTransaction = new OrderTransaction([
                'name' => $name,
                'phone_number' => $phoneNumber,
                'message' => $message,
                'total_price' => $totalPrice,
            ]);

            // Save the order transaction to the database
            $orderTransaction->save();

            // Attach items to the order transaction
            foreach ($cartItems as $item) {
                $orderTransaction->items()->create([
                    'name' => $item['name'],
                    'amount' => $item['amount'],
                    'price' => $item['price'],
                    // Add other properties if needed
                ]);
            }

            // Refresh the order transaction to get the complete details from the database
            $orderTransaction->refresh();

            // Return a JSON response with the created order transaction
            return response()->json(['orderTransaction' => $orderTransaction, 'message' => 'Order transaction created successfully'], 201);
        } catch (\Exception $e) {
            // Handle any exceptions
            \Log::error('Error during order creation:', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Error during order creation'], 500);
        }
    }

    public function confirmOrder(Request $request)
    {
        try {
            // Log the raw request data
            \Log::info('Raw Request Data:', ['request' => $request->all(), 'headers' => $request->headers->all()]);

            // Validate the request data for confirmation
            $request->validate([
                'id' => 'required|exists:order_transactions,id',
                // Add any other validation rules you need for confirmation
            ]);

            // Get the order ID from the request
            $orderId = $request->input('id');

            // Attempt to retrieve the order from the database
            $order = OrderTransaction::find($orderId);

            // If the order does not exist, create a new one
            if (!$order) {
                return response()->json(['error' => 'Order not found'], 404);
            }

            // Return a JSON response with the created or updated order
            return response()->json(['orderTransaction' => $order, 'message' => 'Order confirmed successfully']);
        } catch (\Exception $e) {
            // Handle any exceptions
            \Log::error('Error during order confirmation:', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Error during order confirmation'], 500);
        }
    }
}
