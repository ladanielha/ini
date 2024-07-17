import Sidebar from '@/Components/Admin/Sidebar';
import Navbaradmin from '@/Components/Navbaradmin';
import { router } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useState } from 'react';



export default function Edit(props, errors) {
    //console.log('halaman edit nilai', props)
    const [wisata, setNamatempat] = useState(props.nilaialt.namatempat);
    const [rate_fasilitas, setRf] = useState(props.nilaialt.rate_fasilitas);
    const [rate_pelayanan, setRp] = useState(props.nilaialt.rate_pelayanan);
    const [rate_ramahkeluarga, setRr] = useState(props.nilaialt.rate_ramahkeluarga);
    const [rate_akomodasi, setRa] = useState(props.nilaialt.rate_akomodasi);


    //function "updatePost"
    const updatenilai = async (e) => {
        e.preventDefault();

        router.post(`/nilaialt/update`, {
            nilaialt_id: props.nilaialt.nilaialt_id,
            wisata_id: props.nilaialt.wisata_id,
            rate_fasilitas: rate_fasilitas,
            rate_pelayanan: rate_pelayanan,
            rate_ramahkeluarga: rate_ramahkeluarga,
            rate_akomodasi: rate_akomodasi
        });
    }
    console.log("cekdarihaledit", props)

    return (
        <>
            <div className=" min-h-screen bg-slate-50">
                <Navbaradmin user={props.auth.user} />
                <Head title="Nilai Alternatif" />
                <Sidebar />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-44">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                            <input type="hidden"  value={props.nilaialt.nilaialt_id} onChange={(e) => setId(e.target.value)} />
                                <div className="card-header">
                                    <span className="font-weight-bold">Edit Bobot Nilai Wisata</span>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={updatenilai}>
                                    
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Nama Wisata</label>
                                            <input disabled type="text" className="disabled form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-red-900"
                                                value={props.nilaialt.namatempat} onChange={(e) => setNamatempat(e.target.value)} />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Rate Fasilitas</label>
                                            <input type="number" className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                defaultValue={props.nilaialt.rate_fasilitas} onChange={(e) => setRf(e.target.value)} placeholder="0.43210"
                                                min="0.00000"
                                                max="1.00000"
                                                step="0.00001"
                                            />
                                        </div>
                                        {props.errors.alamat && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.rate_fasilitas}</span>
                                            </div>
                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Rate Pelayanan</label>
                                            <input type="number" className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                defaultValue={props.nilaialt.rate_pelayanan} onChange={(e) => setRp(e.target.value)} placeholder="Jl, Asd no 1"
                                                min="0.00000"
                                                max="1.00000"
                                                step="0.00001"
                                            />

                                        </div>
                                        {props.errors.alamat && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.rate_pelayanan}</span>
                                            </div>
                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Rate Ramah Keluarga</label>
                                            <input type="number" className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                defaultValue={props.nilaialt.rate_ramahkeluarga} onChange={(e) => setRr(e.target.value)} placeholder="Jl, Asd no 1"
                                                min="0.00000"
                                                max="1.00000"
                                                step="0.00001"
                                            ></input>
                                        </div>
                                        {props.errors.desc && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.rate_ramahkeluarga}</span>
                                            </div>
                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Rate Akomodasi</label>
                                            <input type="number" className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                defaultValue={props.nilaialt.rate_akomodasi} onChange={(e) => setRa(e.target.value)} placeholder="Jl, Asd no 1" 
                                                min="0.00000"
                                                max="1.00000"
                                                step="0.00001"
                                            ></input>
                                        </div>
                                        {props.errors.desc && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.rate_akomodasi}</span>
                                            </div>
                                        )}


                                        <div>
                                            <button type="submit" className="btn btn-md btn-success me-2 justify-center"><i className="fa fa-save"></i> Simpan</button>
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
