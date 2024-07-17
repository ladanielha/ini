
import { router } from '@inertiajs/react';
import React, { useState } from 'react';

const Formbobotmahp = ({ props }) => {
    const [harga_kualitas, setBobothk] = useState(null);
    const [harga_gizi, setBobothg] = useState(null);
    const [harga_porsi, setBobothp] = useState(null);
    const [kualitas_gizi, setBobotkg] = useState(null);
    const [kualitas_porsi, setBobotkp] = useState(null);
    const [gizi_porsi, setBobotgp] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if the input value is 0, set harga_kualitas to 1
        const sendharga_kualitas = harga_kualitas === "0" ? 0 : harga_kualitas;
        const sendharga_gizi = harga_gizi === "0" ? 0 : harga_gizi;
        const sendharga_porsi = harga_porsi === "0" ? 0 : harga_porsi;
        const sendkualitas_gizi = kualitas_gizi === "0" ? 0 : kualitas_gizi;
        const sendkualitas_porsi = kualitas_porsi === "0" ? 0 : kualitas_porsi;
        const sendgizi_porsi = gizi_porsi === "0" ? 0 : gizi_porsi;
        // Kirim nilai ke laravel
        router.post('/hitungbobotmakanan', {
            harga_kualitas: sendharga_kualitas,
            harga_gizi: sendharga_gizi,
            harga_porsi: sendharga_porsi,
            kualitas_gizi: sendkualitas_gizi,
            kualitas_porsi: sendkualitas_porsi,
            gizi_porsi: sendgizi_porsi,
        });
    };

    const renderSlider = (label1, label2, state, setState, name) => (
        <div className="flex flex-col space-y-4 p-4" key={name}>
            <div className="flex justify-between font-semibold">
                <div className="flex-1 text-left">{label1}</div>
                <div className="flex-1 text-right">{label2}</div>
            </div>
            <input
                type="range"
                className="w-full"
                min="-4"
                max="4"
                step="1"
                defaultValue={0}
                onChange={(e) => setState(e.target.value)}
            />
            <ul className="flex justify-between w-full px-[10px]">
                {[...Array(9)].map((_, index) => (
                    <li key={index} className="flex justify-center relative">
                        <span className="absolute" style={{ marginTop: `${Math.abs(index - 4) * 10}px` }}>{Math.abs(index - 4)}</span>
                    </li>
                ))}
            </ul>
            <div className="flex p-2 b-2 justify-center">
                <h1 className="b-2 p-4">Nilai: {state}</h1>
            </div>
        </div>
    );

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md  bg-white p-6 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {renderSlider(
                        'Harga',
                        'Kualitas',
                        harga_kualitas,
                        setBobothk,
                        'slider1'
                    )}
                    {renderSlider(
                        'Harga',
                        'Gizi',
                        harga_gizi,
                        setBobothg,
                        'slider2'
                    )}
                    {renderSlider(
                        'Harga',
                        'Porsi',
                        harga_porsi,
                        setBobothp,
                        'slider3'
                    )}
                    {renderSlider(
                        'Kualitas',
                        'Gizi',
                        kualitas_gizi,
                        setBobotkg,
                        'slider4'
                    )}
                    {renderSlider(
                        'Kualitas',
                        'Porsi',
                        kualitas_porsi,
                        setBobotkp,
                        'slider5'
                    )}
                    {renderSlider('Gizi', 'Porsi', gizi_porsi, setBobotgp, 'slider6')}

                    {/** Submit Button */}
                    <div className="py-6 w-full justify-center items-center">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <i className="fa fa-save"></i> Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Formbobotmahp;
