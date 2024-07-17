import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Formbobot from "@/Components/Formbobotmahp";
import Tutorial from "@/Components/Tutorial";

export default function Rekomendasi(props) {

    //console.log("iniform :", props)

    return (
        <div className=" min-h-screen bg-slate-50">
            <Head title="Wisata Halal Cirebon" />
            <Navbar />
            {/* <section className='py-10 md:py-16'>
                <div className='container'>
                    <div className='text-center'>
                        <h2 className='text-3xl sm:text-5xl font-bold mb-4'>Panduan Penggunaan</h2>
                    </div>
                    
                </div>
            </section> */}
            
            {props.flash.message !== null && (
                <section className="flex justify-center p-5">
                    <div className="alert alert-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>
                            {props.flash.message}
                        </span>
                    </div>
                </section>
            )}

            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 px-40 py-6">

                {/* <Tutorial /> */}
            </div>
            <section className='py-10 md:py-16 bg-primary'>
                <div className='container'>
                    <div className='text-center'>
                        <h2 className='text-3xl sm:text-5xl font-bold mb-4 text-white'>Pilih Nilai Kepentingan </h2>
                    </div>
                    {/*                    
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 '>
                    
                    </div> */}
                </div>
            </section>
            <div className="mx-auto flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4  py-6">
                <Formbobot props={props} />
            </div>
            <Footer />
        </div>
    );


}
