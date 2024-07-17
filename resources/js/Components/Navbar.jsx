// Navbar.js

import React, { useState, useEffect } from 'react';
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import Notification from './Notification';
import Transactions from './Transactions'; // Import the Transactions component
import OrderHistory from './orderHistory';
import g from "/resources/images/HALALKU(V2).png";

const Navbar = ({ user, city }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showTransactionsModal, setShowTransactionsModal] = useState(false); // State for the transactions modal
  const [showHistoryModal, setShowHistoryModal] = useState(false); // State for the history modal
  const isAdmin = user && user.role === 'Admin'; // Check if the user is an admin
  const isuser = user && user.role === 'User'; // Check if the user is a user

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  const openTransactionsModal = () => {
    setShowTransactionsModal(true);
  };

  const closeTransactionsModal = () => {
    setShowTransactionsModal(false);
  };

  const openHistoryModal = () => {
    setShowHistoryModal(true);
  };

  const closeHistoryModal = () => {
    setShowHistoryModal(false);
  };

  return (
    <div className={`navbar ${scrolled ? "fixed top-0 bg-white shadow" : ""} z-50`}>
      
      <div className="flex-1 ">
        <Link href="/" className="normal-case text-xl text-black">
          <img
            src={g}
            style={{ maxWidth: '200px', height: 'auto', margin: '0 auto' }}
            alt="Logo"
          />
        </Link>
      </div>


      <div className="flex items-center space-x-4">
        <Link href={user ? route("store") : route("login")} as="button" className="btn btn-ghost normal-case text-xl text-black">
          <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '1.5rem' }} />
        </Link>

        {/* <button
          className="btn btn-ghost normal-case text-xl text-black"
          onClick={handleNotificationClick}
        >
          <FontAwesomeIcon icon={faBell} style={{ fontSize: '1.5rem' }} />
        </button> */}

        {/* Conditionally render Transactions button based on admin role */}
        {isAdmin && (
          <button
            className="btn btn-ghost normal-case text-xl text-black"
            onClick={openTransactionsModal}
          >
            Transactions
          </button>
        )}

        {showTransactionsModal && (
          <Transactions onClose={closeTransactionsModal} isAdmin={isAdmin} />
        )}

        {isuser && (
          <button
            className="btn btn-ghost normal-case text-xl text-black"
            onClick={openHistoryModal}
          >
            <FontAwesomeIcon icon={faBell} style={{ fontSize: '1.5rem' }} />Orders
          </button>
        )}

        {showHistoryModal && (
          <OrderHistory onClose={closeHistoryModal} isuser={isuser} />
        )}
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.5rem' }} />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {!user ? (
              <>
                <li><Link href={route("login")} as="button">Login</Link></li>
                <li><Link href={route("register")} as="button">Register</Link></li>
              </>
            ) : user.role === "Admin" ? (
              <>
                <li>
                  <Link href={route("admin")} className="justify-between">
                    Dashboard Admin
                  </Link>
                </li>
                <li><Link href={route("logout")} as="button" method="POST">Logout</Link></li>
              </>
            ) : (
              <>
                <li><Link href={route('store')}>Store</Link></li>
                <li><Link href={route("logout")} as="button" method="POST">Logout</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>

      {showNotification && <Notification onClose={closeNotification} />}
      
    </div>
  );
};

export default Navbar;

