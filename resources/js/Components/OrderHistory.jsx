// OrderHistory.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const OrderHistory = ({ onClose }) => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/order-history');
        setOrderHistory(response.data.orderHistory);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching order history:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Modal
      isOpen={true} // Set to true to open the modal immediately
      onRequestClose={onClose}
      contentLabel="Order History Modal"

    >
    <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClose}
    >
        Close
    </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b text-left">ID</th>
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Phone Number</th>
            <th className="py-2 px-4 border-b text-left">Message</th>
            <th className="py-2 px-4 border-b text-left">Total Price</th>
            <th className="py-2 px-4 border-b text-left">Created At</th>
          </tr>
        </thead>
        <tbody>
          {orderHistory.map((order) => (
            <tr key={order.id} className="transition-all hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{order.id}</td>
              <td className="py-2 px-4 border-b">{order.name}</td>
              <td className="py-2 px-4 border-b">{order.phone_number}</td>
              <td className="py-2 px-4 border-b">{order.message}</td>
              <td className="py-2 px-4 border-b">
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                }).format(order.total_price)}
              </td>
              <td className="py-2 px-4 border-b">
                {new Date(order.created_at).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
      )}
    </Modal>
  );
};

export default OrderHistory;
