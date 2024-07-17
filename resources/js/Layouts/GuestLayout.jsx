import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { Link } from '@inertiajs/react';
import g from "/resources/images/HALALKU(V2).png"


export default function Guest({ children }) {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-slate-300">
                <div>
                    <Link href={route('login')}>
                        <a className="btn btn-ghost normal-case] text-xl text-black" >
                            <img src={g} />
                        </a>
                    </Link>
                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-100 shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
}
