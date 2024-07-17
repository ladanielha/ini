import Sidebar from '@/Components/Admin/Sidebar';
import Navbaradmin from '@/Components/Navbaradmin';
import { router } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useState } from 'react';



export default function Edit(props, errors) {
    const [makanan_id, setId] = useState(props.places.makanan_id);
    const [namamakanan, setNamamakanan] = useState(props.places.namamakanan);
    const [jenismakanan, setJenismakanan] = useState(props.places.jenismakanan);
    const [harga, setHarga] = useState(props.places.harga);
    const [desc, setDesc] = useState(props.places.desc);
    const [gambar, setGambar] = useState(props.places.gambar);
    const [resto, setResto] = useState(props.places.resto);
    // const [sertifikat, setSertifikat] = useState(props.places.sertifikat);

    //function "updatePost"
    const updateMakanan = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('makanan_id', makanan_id);
        formData.append('namamakanan', namamakanan);
        formData.append('jenismakanan', jenismakanan);
        formData.append('harga', harga);
        formData.append('desc', desc);
        formData.append('resto', resto);

        if (gambar instanceof File) {
            formData.append('gambar', gambar);
        }
        router.post('/makanan/update', formData);
    }
    console.log("cekdarihaledit", props)

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
                                    <span className="font-weight-bold">Edit Data Makanan</span>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={updateMakanan}>
                                    <input type="hidden"  value={props.places.makanan_id} onChange={(e) => setId(e.target.value)} placeholder="Nama Makanan" />
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Nama Makanan</label>
                                            <input type="text" className="form-control" defaultValue={props.places.namamakanan} onChange={(e) => setNamamakanan(e.target.value)} placeholder="Nama Makanan" />
                                        </div>
                                        {props.errors.namamakanan && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.namamakanan}</span>
                                            </div>

                                        )}
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Jenis Makanan</label>
                                            <input type="text" className="form-control" defaultValue={props.places.jenismakanan} onChange={(e) => setJenismakanan(e.target.value)} placeholder="Nama Makanan" />
                                        </div>
                                        {props.errors.jenismakanan && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.jenismakanan}</span>
                                            </div>

                                        )}
                            
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Harga</label>
                                            <input type="number" className="form-control" defaultValue={props.places.harga} onChange={(e) => setHarga(e.target.value)} />
                                        </div>
                                        {props.errors.harga && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.harga}</span>
                                            </div>

                                        )}
                                        

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Desc</label>
                                            <textarea className="form-control" defaultValue={props.places.desc} onChange={(e) => setDesc(e.target.value)} placeholder="Jl, Asd no 1" rows={4}></textarea>
                                        </div>
                                        {props.errors.desc && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.desc}</span>
                                            </div>
                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Gambar</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                onChange={(e) => setGambar(e.target.files[0])}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Restoran</label>
                                            <input className="form-control" defaultValue={props.places.resto} onChange={(e) => setResto(e.target.value)} placeholder="Link Google Maps" />
                                        </div>
                                        {props.errors.resto && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.resto}</span>
                                            </div>
                                        )}

                                        {/* <div className="mb-3">
                                            <label className="form-label fw-bold">Nomor Sertifikat</label>
                                            <input className="form-control" defaultValue={props.places.sertifikat} onChange={(e) => setSertifikat(e.target.value)} placeholder='ID123456789'/>
                                        </div>
                                        {props.errors.sertifikat && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.sertifikat}</span>
                                            </div>
                                        )} */}


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
