import Sidebar from '@/Components/Admin/Sidebar';
import Navbaradmin from '@/Components/Navbaradmin';
import { router } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useState } from 'react';



export default function Edit(props, errors) {
    //console.log("tes", props.nilaialt.namamakanan)
    const [makanan, setNamamakanan] = useState(props.places?.namamakanan);
    const [rate_harga, setRh] = useState(props.nilaialt.rate_harga);
    const [rate_kualitas, setRk] = useState(props.nilaialt.rate_kualitas);
    const [rate_gizi, setRg] = useState(props.nilaialt.rate_gizi);
    const [rate_porsi, setRp] = useState(props.nilaialt.rate_porsi);

    //function "updatePost"
    const updatenilai = async (e) => {
        e.preventDefault();

        router.post(`/nilaimakananahp/update`, {
            nilaialt_id: props.nilaialt.makanan_id,
            wisata_id: props.nilaialt.makanan_id,
            rate_harga: rate_harga,
            rate_kualitas: rate_kualitas,
            rate_gizi: rate_gizi,
            rate_porsi: rate_porsi
        });

    }
    //console.log("cekdarihaledit", props.places)

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
                                    <span className="font-weight-bold">Edit Bobot Nilai Makanan</span>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={updatenilai}>

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Nama Makanan</label>
                                            <input disabled type="text" className="disabled form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-red-900" value={props.nilaialt.namamakanan} onChange={(e) => setNamamakanan(e.target.value)} />

                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Rate Harga</label>
                                            <input type="number" className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                defaultValue={props.nilaialt.rate_harga} onChange={(e) => setRh(e.target.value)}
                                                min="0.00000"
                                                max="1.00000"
                                                step="0.00001"
                                            />
                                        </div>
                                        {props.errors.harga && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.rate_harga}</span>
                                            </div>
                                        )}
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Rate Kualitas</label>
                                            <input type="number" className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                defaultValue={props.nilaialt.rate_kualitas} onChange={(e) => setRk(e.target.value)}
                                                min="0.00000"
                                                max="1.00000"
                                                step="0.00001"
                                             />
                                        </div>
                                        {props.errors.kualitas && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.rate_kualitas}</span>
                                            </div>
                                        )}
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Rate Gizi</label>
                                            <input type="number" className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                defaultValue={props.nilaialt.rate_gizi} onChange={(e) => setRg(e.target.value)} 
                                                min="0.00000"
                                                max="1.00000"
                                                step="0.00001"
                                            />
                                        </div>
                                        {props.errors.gizi && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.rate_gizi}</span>
                                            </div>
                                        )}
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Rate Porsi</label>
                                            <input type="number" className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                defaultValue={props.nilaialt.rate_porsi} onChange={(e) => setRp(e.target.value)} 
                                                min="0.00000"
                                                max="1.00000"
                                                step="0.00001"
                                            />
                                        </div>
                                        {props.errors.porsi && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.rate_porsi}</span>
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
