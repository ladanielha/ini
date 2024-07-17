import Sidebar from '@/Components/Admin/Sidebar';
import Navbaradmin from '@/Components/Navbaradmin';
import { router } from '@inertiajs/react';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Create(props, errors) {
    const [namakota, setNamakota] = useState('');
    const [gambar, setGambar] = useState('');


    //function "storePost"
    const storeKota = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('namakota', namakota);
        formData.append('gambar', gambar);

        router.post('/storekota', formData);
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
                                    <span className="font-weight-bold">Tambah Tempat Kota</span>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={storeKota}>

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Nama Kota</label>
                                            <input type="text" className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900" 
                                            value={namakota} onChange={(e) => setNamakota(e.target.value)} placeholder="Keraton Cirebon" />
                                        </div>
                                        {props.errors.namakota && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.namakota}</span>
                                            </div>

                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Gambar</label>
                                            <input type="file" className="form-control" onChange={(e) => setGambar(e.target.files[0])} />
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
                                                <label className="form-label fw-bold">Preview Gambar</label>
                                                <img className="mt-2 flex h-400 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                    src={URL.createObjectURL(gambar)} alt="Gambar Preview" style={{ maxWidth: '40%' }} />
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
