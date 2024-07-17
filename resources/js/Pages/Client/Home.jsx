import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Kotapilihan from "@/Components/Kotapilihan";
import Carouselimage from "@/Components/Carouselimage";
import b from "/resources/images/pngwing.com.png";
import c from "/resources/images/makan.png";
import d from "/resources/images/daging icon.png";
export default function Home(props) {

    //console.log("cek dt :",props)
    return (
        <div className="grid">
            <Head title="Wisata Halal Cirebon" />
            <Navbar user={props.auth.user} city={props.city.data} />
            <Hero carosel={props.carosel} city={props.city.data} makanan={props.makanan.data} />
            <Carouselimage carosel={props.carosel} />
            <div className="grid md:grid-cols-3 gap-4 justify-center">
            </div>
            <section className='py-10 md:py-16 bg-primary'>
                <div className='text-center'>
                    <h2 className='text-3xl sm:text-5xl font-bold mb-4 text-white'>Kota Wisata Halal Populer</h2>
                </div>
            </section>
            <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
                {/* Card */}
                <Kotapilihan city={props.city.data} />
            </div>
            <Footer />
        </div>
    );


}
