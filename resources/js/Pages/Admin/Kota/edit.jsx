import Sidebar from '@/Components/Admin/Sidebar';
import Navbaradmin from '@/Components/Navbaradmin';
import { router } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useState } from 'react';



export default function Edit(props, errors) {
    console.log(props)
    const [kota_id, setId] = useState(props.kota.kota_id);
    const [namakota, setnamakota] = useState(props.kota.namakota);
    const [gambar, setGambar] = useState(props.kota.gambar);
    

    //function "updatePost"
    const updateKota = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('kota_id', kota_id);
        formData.append('namakota', namakota);
        // Update the image if a new file is selected
        if (gambar instanceof File) {
            formData.append('gambar', gambar);
        }
        router.post('/kota/update', formData);
    }
    //console.log("cekdarihaledit", props)

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
                                    <span className="font-weight-bold">Edit Kota</span>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={updateKota}>
                                        <input type="hidden" value={props.kota.kota_id} onChange={(e) => setId(e.target.value)} placeholder="Nama kota" />
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Nama kota</label>
                                            <input type="text" className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900" defaultValue={props.kota.namakota} onChange={(e) => setnamakota(e.target.value)} placeholder="Nama Wisata" />
                                        </div>
                                        {props.errors.namakota && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.namakota}</span>
                                            </div>

                                        )}
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Gambar</label>
                                            <input
                                                type="file"
                                                className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                onChange={(e) => setGambar(e.target.files[0])}
                                            />
                                        </div>
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
