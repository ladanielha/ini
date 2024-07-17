import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Placecard from "@/Components/Placecard";
import Paginator from "@/Components/Paginator";

export default function Home(props) {

    //console.log("cek props :",props)
    return (
        <div className=" min-h-screen bg-slate-50">
            <Head title="Wisata Halal Cirebon" />
            <Navbar user={props.auth.user} />
            {/* <Hero /> */}

            <section className='py-10 md:py-16'>
                <div className='container'>
                    <div className='text-center'>
                        <h2 className='text-3xl sm:text-5xl font-bold mb-4'>Home store</h2>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>
                    </div>
                </div>
            </section>
            {/* <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 px-10 py-6">
                <Placecard places={props.places.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.places.meta} />
            </div> */}
            <Footer />
        </div>
    );


}
