import { Link } from "@inertiajs/react"
import { motion } from 'framer-motion';

const isCitycard = (city) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return city.kota.map((data, i) => {
        //console.log(city)
        return (
            
            <div className="relative" key={i}>
                <Link href={route('daftarwisata.kota', { namakota: data.namakota })} method="get">
                
                <img className="card-image rounded-xl" src={data.gambar} alt="WisataCirebon" style={{
                    height: "12em", width: "100%"
                }}
                />

                    <div className="bg-gray-900/30 rounded-xl absolute top-0 left-0 w-full h-full">

                        <div className="card-body">
                            <h2 className="left-4 bottom-4 text-2xl font-bold text-white absolute">{data.namakota}</h2>
                        </div>
                    </div>
                </Link>
            </div>


        )
    })


}

const nocity = () => {
    return (
        <div>Data Wisata Belum Tersedia </div>
    )
}

const Kotapilihan = ({ city }) => {
    //console.log(city)
    return !city ? nocity() : isCitycard(city)
}

export default Kotapilihan