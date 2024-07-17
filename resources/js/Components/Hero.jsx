import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from "@inertiajs/react";
import b from "/resources/images/pngwing.com.png";
import c from "/resources/images/makan.png";
import d from "/resources/images/daging icon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import video from "/resources/images/Indonesia.mp4";



const Hero = ({ carosel, city, makanan }) => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleVideoLoaded = () => {
        setVideoLoaded(true);
    };
//    console.log("inicity", makanan)

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
            <div className="hero min-h-screen bg-base-100">
                <div className="hero min-h-screen">
                    <video
                        autoPlay
                        loop
                        muted
                        className={`w-full h-full object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoadedData={handleVideoLoaded}
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-white">
                        <div className="max-w">
                            <h1 className="mb-5 text-5xl font-thin">Assalamualaikum,</h1>
                            <h1 className="mb-5 text-5xl font-heavy">
                                Bingung berwisata? Silahkan Langsung Cari!
                            </h1>
                            <div className="grid md:grid-cols-3 gap-4 justify-center">
                                <Link href={route("searchtempat")} className="btn btn-secondary btn-lg flex flex-row justify-center items-center" as="button">
                                    <img src={b} alt="Wisata Menarik" />
                                    <span className="capitalize lowercase">Wisata Menarik</span>
                                </Link>
                                <Link href={route("searchmakanan")} className="btn btn-secondary btn-lg flex flex-row justify-center items-center" as="button">
                                    <img src={c} alt="Makanan Khas" />
                                    <span className="capitalize lowercase">Makanan Khas</span>
                                </Link>
                                <Link to="/" className="btn btn-secondary btn-lg flex flex-row justify-center items-center" as="button">
                                    <img src={d} alt="Jenis Daging" />
                                    <span className="capitalize lowercase">Pilihan Daging</span>
                                </Link>
                            </div>
                            {/* Elastic Search Bar */}
                            <div className="mt-4">
                                <input
                                    type="text"
                                    placeholder="Cari tempat..."
                                    className="w-full p-2 border border-gray-300 rounded-md text-black"
                                    value={wordEntered}
                                    onChange={handleFilter}
                                />
                                {filteredData.length !== 0 && (
                                    <div className="max-h-40 overflow-y-auto">
                                        {filteredData.slice(0, 15).map((value, index) => (
                                            <Link
                                                href={route('daftarmakanan.kota', { namakota: value.namakota })}
                                                method="get"
                                                key={index}
                                            >
                                                <div className="py-2 px-4 cursor-pointer transition duration-300 hover:bg-primary hover:text-white border-b border-gray-200">
                                                    <div className="flex flex-col ml-3">
                                                        <span className="text-white">{value.namakota}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Hero;
