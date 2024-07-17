import React from 'react';
import classes from "./RestoNavbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faBuilding, faStore } from '@fortawesome/free-solid-svg-icons';

import certihalal from "/resources/images/halal.png";

const RestoranNavbar = (resto) => {
    console.log("awawe", resto.resto)

    function formatTimeToAMPM(time) {
        const isPM = time >= 12;
        return `${formattedHour}: ${isPM ? 'PM' : 'AM'}`;
    }

    return (
        <div className='container rounded-lg bg-slate-200 '>
            <div className='grid xl:grid-cols-3 xl:grid-rows-2 gap-2'>

                <div className='relative xl:col-span-1 xl:row-start-1 xl:row-end-[-1]'>

                    <img className='w-full  h-full object-cover rounded-lg'
                        src={resto.resto.gambarrestoran} />

                </div>
                <div className='relative xl:col-span-1 xl:row-start-1 xl:row-end-[-1]  '>
                    <div className='px-4'>
                        <h2 className='text-2xl sm:text-4xl md:text-5xl font-bold pt-6 '>
                            {resto.resto.namarestoran}
                        </h2>
                        <p className="font-medium pt-4 sm:pt-4">
                            <FontAwesomeIcon icon={faClock} className="mr-2" />
                            Opening Hours: {resto.resto.jambuka}:00 AM - {resto.resto.jamtutup}:00 PM
                        </p>
                        <p className='font-medium pt-4 sm:pt-4'>
                            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                            Kota            :  {resto.resto.kota}</p>
                        <p className='font-medium pt-4 sm:pt-4'>
                            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />

                            Alamat          :  {resto.resto.alamat}</p>
                        <div className='pt-6'></div>



                        <a href={resto.resto.link} className='justify-center bg-primary hover:bg-violet-800 text-white rounded-full flex items-center gap-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer ' >
                            Check Google Maps
                        </a>

                    </div>
                </div>
                <div className='relative xl:col-span-1 xl:row-start-1 xl:row-end-[-1] flex flex-col items-center justify-center'>
                    <h2 className='text-2xl font-bold'>
                        Sertifikasi Halal :
                    </h2>
                    <div className='mt-4'>
                        <img className='w-[250px] h-[250px] object-cover rounded-lg' src={certihalal} alt="Certified Halal" />
                    </div>
                </div>

            </div>
            <div className='relative justify-between'>




            </div>


            {/* <section className={classes.summary}>
                <h2>Selamat datang di {resto.resto.namarestoran}</h2>
                <p>
                    Pilih hidangan kesukaan Anda dari berbagai pilihan hidangan yang
                    tersedia.
                </p>
                <p>
                    Semua hidangan kami dimasak dengan bahan-bahan berkualitas tinggi, tepat
                    waktu, dan tentu saja, CINTA!
                </p>
            </section> */}
        </div>);
}

export default RestoranNavbar;
