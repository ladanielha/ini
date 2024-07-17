import { router } from '@inertiajs/react';
import React, { useState } from 'react';

const Formbobotmsaw = ({ props }) => {
    const [kualitas, setKualitas] = useState(null);
    const [gizi, setGizi] = useState(null);
    const [harga, setHarga] = useState(null);
    const [porsi, setPorsi] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        router.post('/hitungbobotmakanansaw', {
            sumber_protein: kualitas,
            penyajian: gizi,
            harga_m: harga,
            porsi: porsi,
        });
        // Kirim nilai ke laravel 
        // Inertia.post("/your-backend", { bobotawal });
    };

    const renderRadioButtons = (name, state, setState) => {
        return (
            <>
                <label className="radio-label inline-block mr-4">
                    <input type='radio' name={name} onChange={() => setState(1)} value="1" />
                    <span className="radio-text ml-2">1</span>
                </label>
                <label className="radio-label inline-block mr-4">
                    <input type='radio' name={name} onChange={() => setState(2)} value="2" />
                    <span className="radio-text ml-2">2</span>
                </label>
                <label className="radio-label inline-block mr-4">
                    <input type='radio' name={name} onChange={() => setState(3)} value="3" />
                    <span className="radio-text ml-2">3</span>
                </label>
                <label className="radio-label inline-block mr-4">
                    <input type='radio' name={name} onChange={() => setState(4)} value="4" />
                    <span className="radio-text ml-2">4</span>
                </label>
                <label className="radio-label inline-block mr-4">
                    <input type='radio' name={name} onChange={() => setState(5)} value="5" />
                    <span className="radio-text ml-2">5</span>
                </label>
                <br />
            </>
        );
    };

    return (
        <div className="bg-white shadow-lg rounded-md overflow-hidden">
            <div className="p-6">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <p className="text-sm md:text-base font-medium text-neutral-900">
                        Seberapa pentingkah <span className="font-bold">Gizi pada makanan</span> menurutmu?
                    </p>
                    {renderRadioButtons('kualitas', kualitas, setKualitas)}

                    <p className="text-sm md:text-base font-medium text-neutral-900">
                        Seberapa pentingkah <span className="font-bold">Kualitas pada makanan</span> menurutmu?
                    </p>
                    {renderRadioButtons('gizi', gizi, setGizi)}

                    <p className="text-sm md:text-base font-medium text-neutral-900">
                        Seberapa pentingkah <span className="font-bold">Harga pada makanan</span> menurutmu?
                    </p>
                    {renderRadioButtons('harga', harga, setHarga)}

                    <p className="text-sm md:text-base font-medium text-neutral-900">
                        Seberapa pentingkah <span className="font-bold">Porsi pada makanan</span> menurutmu?
                    </p>
                    {renderRadioButtons('porsi', porsi, setPorsi)}

                    <div className="py-6 w-full flex justify-center">
                        <button type="submit" className="btn btn-md btn-success">
                            <i className="fa fa-save"></i> Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Formbobotmsaw;
