import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import RestoCard from "@/Components/RestoCard";
import videoRestoran from "/resources/images/Restoran.mp4"; // Updated import
import Paginator from "@/Components/Paginator";

export default function Home(props) {
    const isUserLoggedIn = props.auth && props.auth.user;
    return (
        <div className="min-h-screen bg-slate-50 relative ">
            <Head title="Wisata Halal Cirebon" />
            <Navbar user={props.auth.user} />

            {/* Video Background */}
            <div className="relative">
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-3/4 object-cover"
                >
                    <source src={videoRestoran} type="video/mp4" />
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-primary text-center">
                    <h2 className="text-3xl sm:text-5xl font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg cursor-pointer text-white"
                        style={{
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                        }}
                    >
                        Pilih Restoran yang Diinginkan
                    </h2>
                    <p className="text-gray-300 text-bold text-2xl">Temukan restoran halal terbaik </p>
                </div>
            </div>

            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 px-10 py-6">
                <RestoCard restos={props.resto.data} />
            </div>
            <div className="flex justify-center items-center mb-6">
                <Paginator meta={props.resto.meta}/>
            </div>
            <Footer />
        </div>
    );
}
