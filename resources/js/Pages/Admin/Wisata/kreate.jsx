import Sidebar from '@/Components/Admin/Sidebar';
import Navbaradmin from '@/Components/Navbaradmin';
import { Head, router, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Create(props, errors) {
    const [namatempat, setNamatempat] = useState('');
    const [jeniswisata, setJeniswisata] = useState('');
    const [alamat, setAlamat] = useState('');
    const [harga, setHarga] = useState('');
    const [jambuka, setJambuka] = useState('');
    const [jamtutup, setJamtutup] = useState('');
    const [desc, setDesc] = useState('');
    const [gambar, setGambar] = useState('');
    const [link, setLink] = useState('');


    //function "storePost"
    const storeWisata = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('namatempat', namatempat);
        formData.append('jeniswisata', jeniswisata);
        formData.append('alamat', alamat);
        formData.append('harga', harga);
        formData.append('jambuka', jambuka);
        formData.append('jamtutup', jamtutup);
        formData.append('desc', desc);
        formData.append('gambar', gambar);
        formData.append('link', link);

        router.post('/storewisata', formData);
    }
    //console.log("cekdarihalcreate", props)

    return (
        <>
            <div className=" min-h-screen bg-slate-50">
                <Navbaradmin user={props.auth.user} />
                <Head title="Dashboard" />
                <Sidebar />


                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-44">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">

                                <div className="card-header">
                                    <span className="font-weight-bold">Tambah Tempat Wisata</span>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={storeWisata}>

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Nama Wisata</label>
                                            <input type="text" className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900" value={namatempat} onChange={(e) => setNamatempat(e.target.value)} placeholder="Keraton Cirebon" />
                                        </div>
                                        {props.errors.namatempat && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.namatempat}</span>
                                            </div>

                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Jenis Wisata</label>
                                            <input type="text" className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900" value={jeniswisata} onChange={(e) => setJeniswisata(e.target.value)} placeholder="Wisata Buatan" />
                                        </div>
                                        {props.errors.jeniswisata && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.jeniswisata}</span>
                                            </div>

                                        )}


                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Alamat</label>
                                            <textarea className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Jl, Asd no 1" rows={4}></textarea>
                                        </div>
                                        {props.errors.alamat && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.alamat}</span>
                                            </div>
                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Harga</label>
                                            <input type="text" className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900" value={harga} onChange={(e) => setHarga(e.target.value)} placeholder="10000" />
                                        </div>
                                        {props.errors.harga && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.harga}</span>
                                            </div>

                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Jam Buka</label>
                                            <input type="number" className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900" value={jambuka} onChange={(e) => setJambuka(e.target.value)} placeholder="8" />
                                        </div>
                                        {props.errors.jambuka && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.jambuka}</span>
                                            </div>

                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Jam Tutup</label>
                                            <input type="number" min={0} max={24} className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900" value={jamtutup} onChange={(e) => setJamtutup(e.target.value)} placeholder="18" />
                                        </div>
                                        {props.errors.jamtutup && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.jamtutup}</span>
                                            </div>

                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Desc</label>
                                            <textarea className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Keterangan" rows={4}></textarea>
                                        </div>
                                        {props.errors.desc && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.desc}</span>
                                            </div>
                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Gambar</label>
                                            <input type="file" className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900" onChange={(e) => setGambar(e.target.files[0])} />
                                        </div>
                                        {props.errors.gambar && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>{props.errors.gambar}</span>
                                            </div>
                                        )}
                                        {gambar && (
                                            <div className="mb-3">
                                                <label className="form-label fw-bold text-emerald-400 ">Preview Gambar</label>
                                                <img className="mt-2 flex h-400 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                src={URL.createObjectURL(gambar)} alt="Gambar Preview" style={{ maxWidth: '40%' }} />
                                            </div>
                                        )}


                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Link Map</label>
                                            <input className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900" value={link} onChange={(e) => setLink(e.target.value)} />
                                        </div>
                                        {props.errors.link && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.link}</span>
                                            </div>
                                        )}

                                        <div>
                                            <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> Simpan</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
