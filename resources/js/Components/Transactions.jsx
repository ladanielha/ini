// Transactions.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const Transactions = ({ onClose }) => {
  const [orderTransactions, setOrderTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/transactions');
        setOrderTransactions(response.data.transactions);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching order transactions:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Modal
      isOpen={true} // Set to true to open the modal immediately
      onRequestClose={onClose}
      contentLabel="Order Transactions Modal"

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
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Total Price</th>
              <th className="px-4 py-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {orderTransactions.map((order) => (
              <tr key={order.id}>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{order.name}</td>
                <td className="border px-4 py-2">{order.phone_number}</td>
                <td className="border px-4 py-2">{order.message}</td>
                <td className="border px-4 py-2">{order.total_price}</td>
                <td className="border px-4 py-2">{order.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Modal>
  );
};

export default Transactions;
