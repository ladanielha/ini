import Navbar from '@/Components/Navbarerik';
import React from 'react';

export default function landingpage(props) {
    console.log(props)
    return (

        <div className='min-h-screen bg-slate-50'>
            <Navbar />
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141348.jpg?w=1380&t=st=1695749338~exp=1695749938~hmac=648078e51c82c293f97f022ea85256be8a58c6bdacefb191860b6f8ee126ad70)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Selamat Datang!</h1>
                        <p className="mb-5">Kami menyediakan rekomendasi makanan halal khas Cirebon untukmu</p>
                        <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Mulai</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-green">Silahkan pilih sesuai dengan kriteria anda</h3>
                                <select className="select select-bordered w-full max-w-xs mb-5 text-green">
                                    <option disabled selected>Jenis Makanan</option>
                                    <option className='text-green'>Makanan Ringan / Cemilan</option>
                                    <option className='text-green'>Makanan Berat</option>
                                </select>
                                <select className="select select-bordered w-full max-w-xs mb-5 text-green">
                                    <option disabled selected>Jenis Protein</option>
                                    <option className='text-green'>Sapi</option>
                                    <option className='text-green'>Ayam</option>
                                    <option className='text-green'>Ikan</option>
                                </select>
                                <select className="select select-bordered w-full max-w-xs mb-5 text-green">
                                    <option disabled selected>Harga</option>
                                    <option className='text-green'>Murah</option>
                                    <option className='text-green'>Sedang</option>
                                    <option className='text-green'>Mahal</option>
                                </select>
                                <select className="select select-bordered w-full max-w-xs mb-5 text-green">
                                    <option disabled selected>Halal</option>
                                    <option className='text-green'>Bersertifikat</option>
                                    <option className='text-green'>Tidak Bersertifikat</option>
                                </select>

                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
}