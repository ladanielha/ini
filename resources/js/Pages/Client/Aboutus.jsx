import { Link } from "@inertiajs/react"

import b from "/resources/images/pngwing.com.png"

import c from "/resources/images/makan.png"

import d from "/resources/images/daging icon.png"
import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
export const fontWeights = {
    Thin: 100,
    UltraLight: 200,
    Light: 300,
    Regular: 400,
    Medium: 500,
    Semibold: 600,
    Bold: 700,
    Heavy: 800,
    Black: 900
};
const Aboutus = (props) => {
    return (
        <>
            <Navbar user={props.auth.user} />
            <div className="hero min-h-screen bg-base-100">

                <div className="hero min-h-screen" style={{ backgroundImage: 'url(/uploads/background.jpg)' }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-white">
                        <div className="max-w">
                            <h1 className="mb-5 text-5xl font-heavy">About us</h1>
                            <h1 className="mb-5  font-thin">
                                Siapa Kami?
                                Halalku adalah komunitas berkomitmen di Indonesia yang menyediakan layanan terbaik dalam mencari makanan lezat, tempat wisata menarik, dan jenis daging berkualitas tinggi. Tim kami, dengan beragam individu, bersatu dalam visi untuk memudahkan Anda menemukan semua ini dengan mudah dan nyaman.</h1>
                            <div className="flex items-center justify-center space-x-2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-primary">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/uploads/background.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-white py-10">Kenapa pilih halalku?
                        </h1>
                        <p className="py-6 font-medium text-white">
                            <span className="text-3xl text-blue-300 font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg cursor-pointer">
                                Kualitas Terbaik<br></br>
                            </span> <br></br><br></br>Kami mengutamakan kualitas dalam semua yang kami tawarkan. Setiap rekomendasi makanan, destinasi wisata, dan jenis daging yang kami hadirkan telah dipilih dengan teliti untuk memenuhi standar halal tertinggi.
                        </p>

                        <p className="py-6 font-medium text-white">
                            <span className="text-3xl text-blue-300 font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg cursor-pointer">
                                Kemudahan
                            </span> <br></br><br></br>Platform kami dirancang untuk memberikan pengalaman yang mudah dan nyaman. Cari, temukan, dan nikmati apa yang Anda cari dengan beberapa kali klik.
                        </p>

                        <p className="py-6 font-medium text-white">
                            <span className="text-3xl text-blue-300 font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg cursor-pointer">
                                Dukungan Pelanggan
                            </span> <br></br><br></br>Tim dukungan pelanggan kami selalu siap membantu Anda. Pertanyaan, saran, atau masukan, kami selalu mendengarkan Anda.
                        </p>

                        <p className="py-6 font-medium text-white">
                            <span className="text-3xl text-blue-300 font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg cursor-pointer">
                                Komunitas Halal
                            </span> <br></br><br></br>Halalku bukan hanya sebuah platform, tapi juga komunitas yang peduli tentang kehalalan. Bergabunglah dengan kami dan temukan orang-orang dengan minat yang sama.
                        </p>

                        <p className="py-6 font-medium text-white">
                            <span className="text-3xl text-blue-300 font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg cursor-pointer">
                                Bersama Halalku

                            </span> <br></br><br></br>Anda akan menemukan cara baru untuk mengeksplorasi kuliner, destinasi wisata, dan jenis daging halal di seluruh Indonesia. Jadilah bagian dari perjalanan kami menuju pengalaman halal yang tak terlupakan.
                        </p>
                        <Link href="/" className="btn btn-ghost normal-case text-xl text-primary bg-white px-2 py-1 rounded">
                            <button className="text-5xl text-white "></button>
                            Selamat berselancar di Halalku!
                            <button />

                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Aboutus