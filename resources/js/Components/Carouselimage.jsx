import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from "@inertiajs/react";
import b from "/resources/images/pngwing.com.png";
import c from "/resources/images/makan.png";
import d from "/resources/images/daging icon.png";
import video from "/resources/images/Indonesia.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';




const Carouselimage = ({ carosel, city, makanan }) => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleVideoLoaded = () => {
        setVideoLoaded(true);
    };
    console.log("inicity", makanan)

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);

        const newFilter = city.kota.filter((value) => {
            const cityName = value.namakota.toLowerCase();
            const searchWordLowerCase = searchWord.toLowerCase();

            // Check if each character in the search word appears in order in the city name
            for (let i = 0; i < searchWordLowerCase.length; i++) {
                if (cityName[i] !== searchWordLowerCase[i]) {
                    return false;
                }
            }

            return true;
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };


    return (
        <>
            <div className="hero min-h-screen bg-slate-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="relative">
                        <Carousel className='w-full mx-auto'>
                            {carosel.map((carol, index) => (
                                <div className='carousel carousel-center carousel-item'>
                                    <div key={index} className="w-full h-80 carousel-item">
                                        <img 
                                            src={carol.gambar}
                                            alt={`Slide ${index + 1}`}
                                            className=" rounded-lg shadow-2xl"
                                        />
                                    </div>
                                </div>

                            ))}
                        </Carousel>
                        <div className="absolute top-1/4 left-0 right-0 flex items-center justify-center text-white">
                            <div className="text-center">
                                <h1 className="text-5xl font-medium mb-4 text-white shadow-lg">Pilihan Kota Wisata Halal</h1>
                            </div>

                        </div>
                    </div>

                </div>

            </div>



        </>
    );
};

export default Carouselimage;
