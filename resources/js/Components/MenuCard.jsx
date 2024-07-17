import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faPlus, faMinus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function MenuCard({ menus, addToCartHandler }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {menus.map((data, i) => {
        const [quantity, setQuantity] = useState(0);

        const handleIncrementQuantity = () => {
          setQuantity((prevQuantity) => prevQuantity + 1);
        };

        const handleDecrementQuantity = () => {
          if (quantity > 0) {
            setQuantity((prevQuantity) => prevQuantity - 1);
          } else {
            setQuantity(0);
          }
        };

        const handleAddToCart = () => {
          if (quantity > 0) {
            const itemToAdd = {
              id: data.menu_id,
              name: data.namamakanan,
              amount: quantity,
              price: data.harga,
            };
            addToCartHandler(itemToAdd, quantity);
            setQuantity(0);
          }
        };

        return (
          <div key={i} className="bg-white p-4 rounded-lg shadow-lg">
            <div className="mb-4">
              <img
                className="w-full h-32 object-cover rounded-md"
                src={data.gambar}
                alt={data.namamakanan}
              />
            </div>
            <div className="mb-2">
              <h2 className="text-xl font-semibold">{data.namamakanan}</h2>
              <p className="text-gray-600">{data.desc}</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">IDR {data.harga.toLocaleString()}</span>
              <div className="flex items-center space-x-2">
                <button className="btn btn-sm btn-outline" onClick={handleDecrementQuantity}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <input
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 0)}
                  className="form-input w-10 text-center"
                />
                <button className="btn btn-sm btn-outline" onClick={handleIncrementQuantity}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={handleAddToCart}
                className="w-full btn btn-success"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MenuCard;
