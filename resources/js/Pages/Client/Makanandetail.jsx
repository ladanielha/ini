import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faMoneyBillAlt,
    faShoppingCart,
    faRupiahSign
} from "@fortawesome/free-solid-svg-icons";

export default function Makanandetail(props) {
    const goBack = () => {
        window.history.back();
    };

    console.log("inihalamandetails :", props);
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title="Makanan Halal Cirebon" />
            <Navbar user={props.auth.user} />
            <section className="md:py-8">
                <div className="container">
                    <div className="text-center">
                        {/* <h2 className='text-3xl sm:text-5xl font-bold mb-4'>{props.foods.namamakanan}</h2> */}
                    </div>
                </div>
            </section>
            <div className="flex justify-center mt-20 flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 px-10 py-6">
                <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap  items-center gap-4 px-10 py-6">
                    <button
                        onClick={goBack}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                    >
                        <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.707 14.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L4.414 11H16a1 1 0 1 1 0 2H4.414l3.293 3.293a1 1 0 0 1 0 1.414z"
                            />
                        </svg>
                        Back
                    </button>
                </div>
                <section className="py-8 text-center">
                    <div className="container">
                        <h2 className="text-4xl sm:text-5xl font-bold text-primary">
                            {props.foods.namamakanan}
                        </h2>
                    </div>
                </section>

                <section className="mb-32 text-center md:text-left">
                    <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                        <div className="mb-6 md:mb-0">
                            <div
                                className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                <img
                                    src={props.foods.gambar}
                                    className="w-full"
                                    alt="Louvre"
                                />
                                <a href="#!">
                                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-3 text-2xl font-bold">
                                {props.foods.namamakanan}
                            </h3>
                            <div className="mb-2 badge badge-primary badge-outline">
                                {props.foods.jenismakanan}
                            </div>
                            <p className="mb-6 text-black dark:text-neutral-900">
                                Harga Makanan:
                                <FontAwesomeIcon
                                    icon={faRupiahSign}
                                    className="ml-2"
                                />
                                {props.foods.harga.toLocaleString("id-ID")}
                            </p>
                            <p className="mb-5 text-neutral-500 dark:text-neutral-900">
                                {props.foods.desc}
                            </p>
                            <div className="flex">
                                <button className="btn btn-primary flex items-center">
                                    <svg
                                        className="w-[20px] h-[20px] text-gray-800 dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 21 20"
                                    >
                                        <path
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3.308 9a2.257 2.257 0 0 0 2.25-2.264 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 1 0 4.5 0C19.058 5.471 16.956 1 16.956 1H3.045S1.058 5.654 1.058 6.736A2.373 2.373 0 0 0 3.308 9Zm0 0a2.243 2.243 0 0 0 1.866-1h.767a2.242 2.242 0 0 0 3.733 0h.767a2.242 2.242 0 0 0 3.733 0h.767a2.247 2.247 0 0 0 1.867 1A2.22 2.22 0 0 0 18 8.649V19H9v-7H5v7H2V8.524c.37.301.83.469 1.308.476ZM12 12h3v3h-3v-3Z"
                                        />
                                    </svg>
                                    <a
                                        href={route("detail.resto", {
                                            store_id: props.foods.store_id,
                                        })}
                                        method="get"
                                        className="font-bold text-white ml-2"
                                    >
                                        Restoran
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
