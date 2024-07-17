import React, { useState } from "react";
import { Link } from "@inertiajs/react";

const UserHero = () => {
  const [cartItems, setCartItems] = useState([]);
  const [activeSection, setActiveSection] = useState("wisata"); // Default to "wisata"

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero min-h-screen">
          {/* Your video background and title here */}
        </div>
      </div>

      <div className="hero min-h-screen bg-primary">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/uploads/background.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-white">
              Silahkan pilih tempat Wisata dan Makanan yang ingin dikunjungi!
            </h1>
            <p className="py-6 text-3xl text-white">
              Sistem Rekomendasi Tempat Wisata dan Makanan
            </p>
            <div className="flex space-x-4">
              <button
                className={`btn btn-secondary ${
                  activeSection === "wisata" && "btn-active"
                }`}
                onClick={() => setActiveSection("wisata")}
              >
                Wisata
              </button>
              <button
                className={`btn btn-secondary ${
                  activeSection === "restoran" && "btn-active"
                }`}
                onClick={() => setActiveSection("restoran")}
              >
                Restoran
              </button>
              <button
                className={`btn btn-secondary ${
                  activeSection === "pembelian" && "btn-active"
                }`}
                onClick={() => setActiveSection("pembelian")}
              >
                Pembelian
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian untuk menampilkan konten sesuai dengan activeSection */}
      {activeSection === "wisata" && <TempatWisata />}
      {activeSection === "restoran" && <Restoran />}
      {activeSection === "pembelian" && (
        <PembelianMakanan
          cartItems={cartItems}
          handleAddToCart={handleAddToCart}
        />
      )}

      {/* Shopping Cart */}
      <div className="shopping-cart">
        <h2>Keranjang Belanja</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Userhero;
