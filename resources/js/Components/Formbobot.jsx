import { router } from '@inertiajs/react';
import React, { useState } from 'react';

const Formbobot = ({ props }) => {
    const [fasilitas_pelayanan, setBobotfp] = useState(null);
    const [fasilitas_ramah, setBobotfr] = useState(null);
    const [fasilitas_akomodasi, setBobotfa] = useState(null);
    const [pelayanan_ramah, setBobotpr] = useState(null);
    const [pelayanan_akomodasi, setBobotpa] = useState(null);
    const [ramah_akomodasi, setBobotra] = useState(null);

    const handleSliderChange = (key, value) => {
        switch (key) {
            case 'fasilitas_pelayanan':
                setBobotfp(value);
                break;
            case 'fasilitas_ramah':
                setBobotfr(value);
                break;
            case 'fasilitas_akomodasi':
                setBobotfa(value);
                break;
            case 'pelayanan_ramah':
                setBobotpr(value);
                break;
            case 'pelayanan_akomodasi':
                setBobotpa(value);
                break;
            case 'ramah_akomodasi':
                setBobotra(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            fasilitas_pelayanan: fasilitas_pelayanan || 0,
            fasilitas_ramah: fasilitas_ramah || 0,
            fasilitas_akomodasi: fasilitas_akomodasi || 0,
            pelayanan_ramah: pelayanan_ramah || 0,
            pelayanan_akomodasi: pelayanan_akomodasi || 0,
            ramah_akomodasi: ramah_akomodasi || 0,
        };

        router.post('/hitungbobot', formData);
        // Kirim nilai ke laravel
    };
    const handleClose = () => {
        // Handle the close action, e.g., navigating back or closing the modal
        // You can define the behavior you want when the close button is clicked
        // For example, you can use router.push to navigate back to a previous page
        // or close a modal if this form is within a modal.
    };

    return (
        <div className="max-w-xl mx-auto bg-white text-black shadow-md rounded mb-4 relative">
            {/* Close button */}
            <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                onClick={handleClose}
            >
                <i className="fas fa-times"></i>
            </button>

            {/* Form content */}
            <form onSubmit={handleSubmit} className="rounded px-8 pt-6 pb-8">
                {[
                    ['fasilitas_pelayanan', 'Lebih Penting Fasilitas', 'Lebih Penting Pelayanan'],
                    ['fasilitas_ramah', 'Lebih Penting Fasilitas', 'Lebih Penting Ramah keluarga'],
                    ['fasilitas_akomodasi', 'Lebih Penting Fasilitas', 'Lebih Penting Akomodasi'],
                    ['pelayanan_ramah', 'Lebih Penting Pelayanan', 'Lebih Penting Ramah Keluarga'],
                    ['pelayanan_akomodasi', 'Lebih Penting Pelayanan', 'Lebih Penting Akomodasi'],
                    ['ramah_akomodasi', 'Lebih Penting Ramah Keluarga', 'Lebih Penting Akomodasi'],
                ].map(([key, label1, label2], index) => (
                    <div key={index} className="flex flex-col space-y-4 p-4">
                        <div className="flex items-center justify-between text-center text-gray-600">
                            <span className="flex-1">{label1}</span>
                            <span className="flex-1">{label2}</span>
                        </div>

                        <input
                            type="range"
                            className="w-full"
                            min="-4"
                            max="4"
                            step="1"
                            defaultValue={0}
                            onChange={(e) => handleSliderChange(key, parseInt(e.target.value))}
                        />
                        <ul className="flex justify-between w-full px-2">
                            {[...Array(9)].map((_, index) => (
                                <li key={index} className="flex justify-center relative">
                                    <span className="absolute">{Math.abs(index - 4)}</span>
                                </li>
                            ))}
                        </ul>

                        {props.errors[key] && (
                            <div className="alert alert-error py-3">
                                <span className="bg-danger-100">{props.errors[key]}</span>
                            </div>
                        )}
                    </div>
                ))}

                <div className="py-6 w-full flex justify-center">
                    <button type="submit" className="btn btn-md btn-success ">
                        <i className="fa fa-save"></i> Simpan
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Formbobot;