import Navbaradmin from "@/Components/Navbaradmin";
import Sidebar from "@/Components/Admin/Sidebar";
import { Head, router, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";
import abi from "./contractjs/CertificateStorage.json";
import { ethers } from "ethers";

export default function Create(props, errors) {
    const [namamakanan, setNamamakanan] = useState("");
    const [jenismakanan, setJenismakanan] = useState("");
    const [namakota, setNamakota] = useState("");
    const [harga, setHarga] = useState("");
    const [desc, setDesc] = useState("");
    const [gambar, setGambar] = useState("");
    const [store, setStore] = useState("");
    const [resto, setResto] = useState("");
    const [sertifikat, setSertifikat] = useState("");

    console.log(props.restoran);
    const goBack = () => {
        window.history.back();
    };

    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
    });
    const [account, setAccount] = useState("not Connected");
    const [certificate, setCertificate] = useState("");
    useEffect(() => {
        const initializeBlockchain = async () => {
            const contractAddress =
                "0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE"; // Replace with your contract address
            const contractABI = abi.abi; // Replace with your contract ABI

            const { ethereum } = window;
            const account = await ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccount(account);
            const provider = new ethers.BrowserProvider(ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(
                contractAddress,
                contractABI,
                signer
            );
            console.log(contract);
            setState({ provider, signer, contract });
        };

        initializeBlockchain();
    }, []);
    const storeCertificate = async () => {
        if (state.contract && certificate) {
            try {
                const tx = await state.contract.storeCertificate(certificate); // Assume your contract has a function named storeSertifikat
                await tx.wait();
                console.log("Sertifikat stored on the blockchain!");
                console.log(tx.hash);
                setSertifikat(tx.hash);
            } catch (error) {
                console.error("Error storing sertifikat:", error);
            }
        } else {
            console.error("Contract or sertifikat data is missing.");
        }
    };
    //function "storePost"
    const storeMakanan = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("namamakanan", namamakanan);
        formData.append("jenismakanan", jenismakanan);
        formData.append("namakota", namakota);
        formData.append("harga", harga);
        formData.append("desc", desc);
        formData.append("gambar", gambar);
        formData.append("store_id", store);
        formData.append("resto", resto);
        formData.append("sertifikat", sertifikat);
        router.post("/storemakanan", formData);
    };
    //console.log("cekdarihalcreate", props)

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
                                    <span className="font-weight-bold">
                                        Tambah Data Makanan
                                    </span>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={storeMakanan}>
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Nama Makanan
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                value={namamakanan}
                                                onChange={(e) =>
                                                    setNamamakanan(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Docang"
                                            />
                                        </div>
                                        {props.errors.namamakanan && (
                                            <div className="alert alert-error">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="stroke-current shrink-0 h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <span>
                                                    {props.errors.namamakanan}
                                                </span>
                                            </div>
                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Jenis Makanan
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                value={jenismakanan}
                                                onChange={(e) =>
                                                    setJenismakanan(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Nasi"
                                            />
                                        </div>
                                        {props.errors.jenismakanan && (
                                            <div className="alert alert-error">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="stroke-current shrink-0 h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <span>
                                                    {props.errors.jenismakanan}
                                                </span>
                                            </div>
                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Nama Kota
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                value={namakota}
                                                onChange={(e) =>
                                                    setNamakota(e.target.value)
                                                }
                                                placeholder="Cirebon"
                                            />
                                        </div>
                                        {props.errors.namakota && (
                                            <div className="alert alert-error">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="stroke-current shrink-0 h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <span>
                                                    {props.errors.namakota}
                                                </span>
                                            </div>
                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Harga
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                value={harga}
                                                onChange={(e) =>
                                                    setHarga(e.target.value)
                                                }
                                                placeholder="10000"
                                            />
                                        </div>
                                        {props.errors.harga && (
                                            <div className="alert alert-error">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="stroke-current shrink-0 h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <span>
                                                    {props.errors.harga}
                                                </span>
                                            </div>
                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Deskripsi
                                            </label>
                                            <textarea
                                                className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                value={desc}
                                                onChange={(e) =>
                                                    setDesc(e.target.value)
                                                }
                                                placeholder="Keterangan"
                                                rows={4}
                                            ></textarea>
                                        </div>
                                        {props.errors.desc && (
                                            <div className="alert alert-error">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="stroke-current shrink-0 h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <span>{props.errors.desc}</span>
                                            </div>
                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Gambar
                                            </label>
                                            <input
                                                type="file"
                                                className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                onChange={(e) =>
                                                    setGambar(e.target.files[0])
                                                }
                                            />
                                        </div>
                                        {props.errors.gambar && (
                                            <div className="alert alert-error">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="stroke-current shrink-0 h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <span>
                                                    {props.errors.gambar}
                                                </span>
                                            </div>
                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                ID Resto
                                            </label>
                                            <input
                                                className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                value={store}
                                                onChange={(e) =>
                                                    setStore(e.target.value)
                                                }
                                                placeholder="1"
                                            />
                                        </div>
                                        {props.errors.store && (
                                            <div className="alert alert-error">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="stroke-current shrink-0 h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <span>
                                                    {props.errors.store}
                                                </span>
                                            </div>
                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Restoran
                                            </label>
                                            <input
                                                className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                value={resto}
                                                onChange={(e) =>
                                                    setResto(e.target.value)
                                                }
                                                placeholder="Link Google Maps"
                                            />
                                        </div>
                                        {props.errors.resto && (
                                            <div className="alert alert-error">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="stroke-current shrink-0 h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <span>
                                                    {props.errors.resto}
                                                </span>
                                            </div>
                                        )}
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Nomor Sertifikat
                                            </label>
                                            <input
                                                className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                value={sertifikat}
                                                onChange={(e) =>
                                                    setSertifikat(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="ID123456789"
                                            />
                                            {props.errors.sertifikat && (
                                                <div className="alert alert-error">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="stroke-current shrink-0 h-6 w-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                    <span>
                                                        {
                                                            props.errors
                                                                .sertifikat
                                                        }
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Nomor Sertifikat
                                            </label>
                                            <input
                                                className="form-control mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-900"
                                                value={certificate}
                                                onChange={(e) =>
                                                    setCertificate(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="ID123456789"
                                            />
                                            <button
                                                onClick={storeCertificate}
                                                className="border border-blue-500 text-blue-500 px-4 py-2 rounded"
                                            >
                                                Store Sertifikat
                                            </button>
                                            {props.errors.certificate && (
                                                <div className="alert alert-error">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="stroke-current shrink-0 h-6 w-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                    <span>
                                                        {
                                                            props.errors
                                                                .certificate
                                                        }
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="btn btn-md btn-success me-2"
                                            >
                                                <i className="fa fa-save"></i>{" "}
                                                Simpan
                                            </button>
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
