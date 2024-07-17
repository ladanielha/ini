import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Placecard from "@/Components/Placecard";
import Paginator from "@/Components/Paginator";
import RestoCard from "@/Components/RestoCard";
import MenuCard from "@/Components/MenuCard";
import RestoranNavbar from "@/Components/RestoranNavbar";
import AddCart from "@/Components/AddCart";

function Menu(props) {
    const { menu } = props; // Destructure menu from props
    const [cartItems, setCartItems] = useState([]); // State to manage cart items

    const addToCart = (item, quantity) => {
        const existingItemIndex = cartItems.findIndex(
            (cartItem) => cartItem.id === item.id
        );

        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].amount += quantity;
            setCartItems(updatedCartItems);
        } else {
            setCartItems((prevItems) => [...prevItems, item]);
        }
    };

    const removeFromCart = (index) => {
        setCartItems((prevItems) => {
            const updatedItems = [...prevItems];
            updatedItems.splice(index, 1);
            return updatedItems;
        });
    };

    const handleCheckout = (checkoutData) => {
        console.log("Checkout clicked!");
        console.log("Checkout Data:", checkoutData);
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
        console.log("Adding item to cart:", cartItemData);
    };
    const goBack = () => {
        window.history.back();
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Head title="Wisata Halal Cirebon" />
            <Navbar user={props.auth.user} />
           
            <section className="py-10 md:py-16">
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-5xl font-bold mb-4"></h2>
                    </div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
                        {/* Your content goes here */}
                    </div>
                </div>
            </section>

            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 px-10 ">
                <RestoranNavbar resto={props.restoran} />
            </div>
            <AddCart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                handleCheckout={handleCheckout}
                setCartItems={setCartItems} // Pass the setCartItems function
            />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 px-10 py-6">
                <MenuCard menus={props.menu} user={props.auth.user} addToCartHandler={addToCart}/>
            </div>
            <Footer />
        </div>
    );
}

export default Menu;
