import React, { useState } from 'react';
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Placecard from "@/Components/Placecard";
import Paginator from "@/Components/Paginator";
import RestoCard from "@/Components/RestoCard";
import MenuCard from "@/Components/MenuCard";
import RestoranNavbar from "@/Components/RestoranNavbar";
import Cart from "@/Components/Cart";
import HeaderCartButton from "@/Components/HeaderCartButton";
import AddCart from "@/Components/AddCart";

function Menu(props) {
    const { menu } = props; // Destructure menu from props
    const [quantity, setQuantity] = useState(0);

    const handleIncrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrementQuantity = () => {
        if (quantity > 0) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        // Pass the required data to AddCart component
        const cartItemData = {
            menu_id: menu.menu_id,
            quantity: quantity,
            namamakanan: menu.namamakanan,
            harga: menu.harga,
        };

        // Log the data or perform other actions as needed
        console.log('Adding item to cart:', cartItemData);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Head title="Wisata Halal Cirebon" />
            <Navbar user={props.auth.user} />
            <section className='py-10 md:py-16'>
                <div className='container'>
                    <div className='text-center'>
                        <h2 className='text-3xl sm:text-5xl font-bold mb-4'></h2>
                    </div>
                    {/* <button
                        onClick={goBack}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                    >
                        <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.707 14.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L4.414 11H16a1 1 0 1 1 0 2H4.414l3.293 3.293a1 1 0 0 1 0 1.414z"
                            />
                        </svg>
                        Back
                    </button> */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>
                        {/* Your content goes here */}
                    </div>
                </div>
            </section>

            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 px-10 py-6">
                <RestoranNavbar resto={props.restoran} />
            </div>
            <AddCart onChange={handleAddToCart}
                menu_id={menu.menu_id}
                quantity={quantity}
                namamakanan={menu.namamakanan}
                harga={menu.harga}
            />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 px-10 py-6">
                <MenuCard menus={props.menu} user={props.auth.user} />
                
            </div>
            <Footer />
        </div>
    );
}

export default Menu;
