import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function AddCart({ cartItems, removeFromCart, setCartItems }) {
  const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [total_price, setTotalPrice] = useState('');
  const [isOrderConfirmed, setOrderConfirmed] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = () => {
    setCheckoutModalOpen(true);
  };

  const handleConfirm = async () => {
    try {
      // Validate name and phone number
      if (name.trim() === '' || phoneNumber.trim() === '') {
        alert('Please fill out your name and phone number before confirming.');
        return;
      }
  
      // Set loading state
      setLoading(true);
      setError(null);
  
      // Prepare the data to send to the backend
      const requestData = {
        name: name,
        phoneNumber: phoneNumber,
        message: message,
        total_price: total_price,
        cartItems: cartItems.map(item => ({
          id: item.id,
          order_transaction_id : item.order_transaction_id,
          name: item.name,
          amount: item.amount,
          price: item.price,
        })),
      };
  
      // Make a POST request to the backend API endpoint using Axios
      const response = await axios.post('http://127.0.0.1:8000/create-order', requestData);
  
      console.log('Axios Response:', response.data);
  
      // Close the modal and reset the form and cart
      setOrderConfirmed(true);
      setTimeout(() => {
        setCheckoutModalOpen(false);
        setOrderConfirmed(false);
        setName('');
        setPhoneNumber('');
        setMessage('');
        setCartItems([]); // Reset the cart
        setLoading(false);
      }, 3000); // Reset message after 3 seconds
    } catch (error) {
      console.error('Error during order confirmation:', error.message);
      setError(error.message);
      setLoading(false);
    }
  };
  

  const handleCancel = () => {
    // Close the modal and reset the form
    setCheckoutModalOpen(false);
    setName('');
    setPhoneNumber('');
    setMessage('');
    setError(null);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <span className="text-sm">
                  {item.amount} x {item.name} - IDR {item.price.toLocaleString()}
                </span>
                <button
                  className="btn btn-sm btn-red"
                  onClick={() => removeFromCart(index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total:</span>
              <span className="text-xl font-bold">
                IDR {cartItems.reduce((total, item) => total + item.price * item.amount, 0).toLocaleString()}
              </span>
            </div>
            <div className="mt-4">
              <button className="w-full btn btn-green" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>

      {/* Checkout Modal */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-center items-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 rounded-lg z-50">
            <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
            {isOrderConfirmed ? (
              <p className="text-green-500 mb-4">Order confirmed! Thank you for your purchase.</p>
            ) : (
              <form>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name :
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input w-full"
                    required
                  />
                  <p style={{ color: 'red' }}>Pastikan nama anda sama dengan nama user!</p>

                </div>

                <br></br>
                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
                    Phone Number :
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="form-input w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                    Message to Seller (optional) :
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-input w-full resize-none"
                    rows="3"
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="btn btn-red"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleConfirm}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Confirming...' : 'Confirm'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AddCart;
