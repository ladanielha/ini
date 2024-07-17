import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShoppingCart,
    faRupiahSign,
} from "@fortawesome/free-solid-svg-icons";

const isTablecartuser = (cart, user) => {
    console.log("cekcart", cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);

    useEffect(() => {
        const newTotalPrice = cart.reduce(
            (acc, data) => acc + data.total_harga,
            0
        );
        setTotalPrice(newTotalPrice);
    }, [cart]);

    const handleCheckout = (cartData) => {
        // Pass checkout data
        if (cartData.length > 0) {
            try {
                // You can send the checkout data to your API or perform other necessary actions
                // For example, use Inertia.js to send a POST request
                // await Inertia.post('/checkout', { cart: cartData });

                // Assuming a successful checkout, show the pop-up
                setShowCheckoutPopup(true);
            } catch (error) {
                console.error("Error during checkout:", error);
            }
        } else {
            console.error("Cart is empty");
        }
    };

    const handleBackToHome = () => {
        // Hide the checkout pop-up
        setShowCheckoutPopup(false);
        Inertia.visit('/');
    };

    return (
        <>
            <div className="card max-w-full bg-white dark:bg-base-800 shadow-xl p-6 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className="bg-blue-500 text-white">
                                <th className="py-3">Makanan</th>
                                <th className="py-3">Kuantitas</th>
                                <th className="py-3">Harga</th>
                                <th className="py-3">Total Harga</th>
                                <th className="py-3">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((data, i) => (
                                <tr
                                    key={i}
                                    className={
                                        i % 2 === 0 ? "bg-gray-100" : "bg-white"
                                    }
                                >
                                    <td className="py-3">
                                        <div className="flex items-center gap-4">
                                            <div className="avatar w-12 h-12 overflow-hidden rounded-full">
                                                <img
                                                    src={data.menu_gambar}
                                                    alt={data.menu_name}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-bold text-lg">
                                                    {data.menu_name}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3">{data.kuantitas}</td>
                                    <td className="py-3">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faRupiahSign}
                                                className="mr-1"
                                            />
                                            {data.harga.toLocaleString()}
                                        </div>
                                    </td>
                                    <td className="py-3">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faRupiahSign}
                                                className="mr-1"
                                            />
                                            {data.total_harga.toLocaleString()}
                                        </div>
                                    </td>
                                    <th>
                                        <Link
                                            href={route("delete.cart")}
                                            method="post"
                                            data={{ cart_id: data.cart_id }}
                                            className="btn btn-outline btn-xs btn-error"
                                        >
                                            Hapus
                                        </Link>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {showCheckoutPopup && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="card max-w-md p-6 bg-white dark:bg-base-800 shadow-xl rounded-lg">
                        <p className="text-lg text-center mb-4">
                            Pesanan Anda sudah berhasil di Check Out!
                        </p>
                        <div className="flex justify-center">
                            <button
                                className="btn btn-primary bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all duration-300"
                                onClick={handleBackToHome}
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="card w-96 bg-white dark:bg-base-800 shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105">
                <div className="card-body flex flex-col items-center">
                    <div className="mb-4">
                        <FontAwesomeIcon
                            icon={faShoppingCart}
                            className="text-black text-4xl"
                        />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-primary">
                        Your Cart
                    </h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Total Price:
                        <span className="text-primary font-semibold">
                            Rp {totalPrice.toLocaleString()}
                        </span>
                    </p>
                    <div className="card-actions flex justify-end mt-4">
                        <button
                            className="btn btn-primary bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all duration-300"
                            onClick={() => handleCheckout(cart)}
                        >
                            Check Out
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
const noTablecartuser = () => {
    return <div>Keranjang belanja Anda kosong </div>;
};

const Tablecartuser = ({ cart }) => {
    return !cart ? noTablecartuser() : isTablecartuser(cart);
};

export default Tablecartuser;
