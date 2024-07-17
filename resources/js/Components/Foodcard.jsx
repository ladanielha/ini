import { Link } from "@inertiajs/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMoneyBillAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const isFoodcard = (foods) => {
    console.log(foods)
    // Fungsi untuk mengubah harga ke format dengan titik koma
    const formatRupiah = (price) => {
        return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(price);
    };

    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        // jika text kepanjangn maka ptong  text
        return text.slice(0, maxLength) + '...';
    }

    return foods.map((data, i) => {

        const limitedDescription = truncateText(data.desc, 100);
        return (
            <div key={i}>
                <Link href={route('detail.makanan', { makanan_id: data.makanan_id })} method="get">
                    <div className="card w-full card-compact lg:w-96 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                        <figure><img src={data.gambar} alt="WisataCirebon" style={{ height: '250px', width: '400px' }} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{data.namamakanan}</h2>
                            <div className="mb-3 text-lg font-bold text-primary dark:text-primary-500">
                                <FontAwesomeIcon icon={faMoneyBillAlt} className="mr-2" />
                                {formatRupiah(data.harga)}
                            </div>
                            <p>{limitedDescription}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })


}

const noFoods = () => {
    return (
        <div>Data Wisata Belum Tersedia </div>
    )
}

const Foodcard = ({ foods }) => {
    //console.log(foods)
    return !foods ? noFoods() : isFoodcard(foods)
}

export default Foodcard