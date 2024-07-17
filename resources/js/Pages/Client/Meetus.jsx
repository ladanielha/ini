import React from "react";
import Navbar from "@/Components/Navbar";
import g from "/resources/images/Fred.png";
import b from "/resources/images/erick.jpeg";
import d from "/resources/images/daniel.jpeg";
import w from "/resources/images/wilson.jpg";
import h from "/resources/images/herdi.jpeg";
import i from "/resources/images/dinan.jpeg";
import Footer from "@/Components/Footer";

const Meetus = (props) => {
    const imageWidth = "220px"; // Set the desired width
    const imageHeight = "260px"; // Set the desired height

    return (
        <>
            <div>
                <Navbar user={props.auth.user} />
            </div>
            <div className="about-us bg-slate-100">

            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                <h1 className="text-base font-thin tracking-wider lg:text-3xl text-amber-400">
    Team Halalku
</h1>

                    <h2 className="font-bold text-3xl md:text-4xl  font-heading text-bold text-primary">
                        Check our awesome team members
                    </h2>
                
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="w-full bg-slate-300 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                        <div>
                            <img
                                className="object-center object-cover"
                                src={g}
                                alt="photo"
                                style={{ width: imageWidth, height: imageHeight }}
                            />
                        </div>
                        <div className="text-center py-8 sm:py-6 ">
                            <p className="text-xl text-gray-700 font-bold mb-2">
                                Frederick Alexander Badaruddin
                            </p>
                            <p className="text-base text-gray-400 font-normal">Software Engineer , Fullstack Web Developer</p>
                            <a href="https://www.linkedin.com/in/laurentius-daniel-719ab3131/"className="text-base text-cyan-500 font-semibold">Visit my LinkedIn</a>
                        </div>
                    </div>
                    <div className="w-full bg-slate-300 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                        <div>
                            <img
                                className="object-center object-cover"
                                src={d}
                                alt="photo"
                                style={{ width: imageWidth, height: imageHeight }}
                            />
                        </div>
                        <div className="text-center py-8 sm:py-6">
                            <p className="text-xl text-gray-700 font-bold mb-2">Laurentius Daniel</p>
                            <p className="text-base text-gray-400 font-normal">Software Engineer , Sistem Rekomendasi</p>
                            <a href="https://www.linkedin.com/in/laurentius-daniel-719ab3131/"className="text-base text-cyan-500 font-semibold">Visit my LinkedIn</a>
                        </div>
                    </div>
                    <div className="w-full bg-slate-300 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                        <div>
                            <img
                                className="object-center object-cover"
                                src={b}
                                alt="photo"
                                style={{ width: imageWidth, height: imageHeight }}
                            />
                        </div>
                        <div className="text-center py-8 sm:py-6">
                            <p className="text-xl text-gray-700 font-bold mb-2">Erick Abraham Sanggor</p>
                            <p className="text-base text-gray-400 font-normal">BackEnd, Sistem Rekomendasi</p>
                            <a href="https://www.linkedin.com/in/laurentius-daniel-719ab3131/"className="text-base text-cyan-500 font-semibold">Visit my LinkedIn</a>
                        </div>
                    </div>
                    <div className="w-full bg-slate-300 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                        <div>
                            <img
                                className="object-center object-cover"
                                src={w}
                                alt="photo"
                                style={{ width: imageWidth, height: imageHeight }}
                            />
                        </div>
                        <div className="text-center py-8 sm:py-6">
                            <p className="text-xl text-gray-700 font-bold mb-2">Wilson </p>
                            <p className="text-base text-gray-400 font-normal">E-Commerce BackEnd</p>
                            <a href="https://www.linkedin.com/in/wilson-alvis-720122133"className="text-base text-cyan-500 font-semibold">Visit my LinkedIn</a>
                        </div>
                    </div>
                    <div className="w-full bg-slate-300 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                        <div>
                            <img
                                className="object-center object-cover"
                                src={h}
                                alt="photo"
                                style={{ width: imageWidth, height: imageHeight }}
                            />
                        </div>
                        <div className="text-center py-8 sm:py-6">
                            <p className="text-xl text-gray-700 font-bold mb-2">Herdi Prayudha</p>
                            <p className="text-base text-gray-400 font-normal">Sistem Rekomendasi</p>
                            <a href="https://www.linkedin.com/in/laurentius-daniel-719ab3131/"className="text-base text-cyan-500 font-semibold">Visit my LinkedIn</a>
                        </div>
                    </div>
                    <div className="w-full bg-slate-300 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                        <div>
                            <img
                                className="object-center object-cover"
                                src={i}
                                alt="photo"
                                style={{ width: imageWidth, height: imageHeight }}
                            />
                        </div>
                        <div className="text-center py-8 sm:py-6">
                            <p className="text-xl text-gray-700 font-bold mb-2">Dinan</p>
                            <p className="text-base text-gray-400 font-normal">Sistem Rekomendasi, Survey</p>
                            <a href="https://www.linkedin.com/in/laurentius-daniel-719ab3131/"className="text-base text-cyan-500 font-semibold">Visit my LinkedIn</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
            </div>
        </>
    );
};

export default Meetus;
