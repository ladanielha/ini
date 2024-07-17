import { router } from '@inertiajs/react';
import React, { useState } from 'react';

const Formbobotwsaw = ({ props }) => {
    const [fasilitas, setFasilitas] = useState(null);
    const [pelayanan, setPelayanan] = useState(null);
    const [ramahkeluarga, setRamahkeluarga] = useState(null);
    const [akomodasi, setAkomodasi] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(fasilitas);
        router.post('/hitungbobotwisatasaw', {
            fasilitas: fasilitas,
            pelayanan: pelayanan,
            ramahkeluarga: ramahkeluarga,
            akomodasi: akomodasi,
        });
        // Kirim nilai ke laravel
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
        <div className="bg-white shadow-lg rounded-md overflow-hidden mb-8">
            <div className="p-6">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <p className="text-sm md:text-base font-medium text-neutral-900">
                        Seberapa pentingkah <span className="font-bold">Fasilitas Ibadah</span> menurutmu?
                    </p>
                    {renderRadioButtons('fasilitas', fasilitas, setFasilitas)}

                    <p className="text-sm md:text-base font-medium text-neutral-900">
                        Seberapa pentingkah <span className="font-bold">Keramahan keluarga pada tempat wisata</span> menurutmu?
                    </p>
                    {renderRadioButtons('pelayanan', pelayanan, setPelayanan)}

                    <p className="text-sm md:text-base font-medium text-neutral-900">
                        Seberapa pentingkah <span className="font-bold">Pelayanan</span> menurutmu?
                    </p>
                    {renderRadioButtons('ramahkeluarga', ramahkeluarga, setRamahkeluarga)}

                    <p className="text-sm md:text-base font-medium text-neutral-900">
                        Seberapa pentingkah <span className="font-bold">Akomodasi halal</span> menurutmu?
                    </p>
                    {renderRadioButtons('akomodasi', akomodasi, setAkomodasi)}

                    <button
                        type="submit"
                        className="px-3 md:px-5 py-2 md:py-2.5 font-medium text-sm md:text-base text-neutral-900 rounded-md bg-blue-700 text-white text-sm font-medium rounded-md transition duration-150 ease-in-out hover:bg-blue-800"
                    >
                        Dapatkan Rekomendasi
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Formbobotwsaw;
