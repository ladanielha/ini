import Sidebar from '@/Components/Admin/Sidebar';
import Tablenilaialt from '@/Components/Admin/Tablenilaiwisatasaw';
import Navbaradmin from '@/Components/Navbaradmin';
import { Head, Link } from '@inertiajs/react';

export default function Index(props) {
    //console.log('cek ', props)
    return (
        <>
        
            <div className="min-h-screen bg-slate-50">
                <Navbaradmin user={props.auth.user} />
                <Head title="Dashboard" />
                <Sidebar/>

                <div className="container py-12 max-w-7xl mx-auto sm:px-6 lg:px-56">
                    <div className="btn-group btn-group-vertical lg:btn-group-horizontal left-0">
                            <h1 href="#">Nilai Wisata Rekomendasi SAW</h1>
                        </div>

                        {props.flash.message && (
                            <div className="alert alert-success " >
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{props.flash.message}</span>
                            </div>
                        )}.
                    <Tablenilaialt nilaialts={props.nilaialts} />
                </div>
                
            </div>

        </>
    );
}
