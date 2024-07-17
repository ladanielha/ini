import Sidebar from '@/Components/Admin/Sidebar';
import Statistic from '@/Components/Admin/Statistic';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbaradmin';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <>
            <div className=" min-h-screen bg-slate-50">
                <Navbar user={props.auth.user} />
                <Head title="Dashboard" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-56">

                        <Statistic />


                    </div>
                </div>
            </div>
        </>
    );
}
