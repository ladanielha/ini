import { Link } from "@inertiajs/react"
const isPlacecard = (places) => {

    return places.places.map((data, i) => {
        //console.log(places)
        return (
            <div key={i}>
                <Link href={route('detail.wisata',{ wisata_id: data.wisata_id })} method="get">
                    <div className="card w-full card-compact lg:w-96 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                    <figure><img src={data.gambar} alt="WisataCirebon" style={{ height: '250px', width: '400px' }}/></figure>
                        <div className="card-body">
                            <h2 className="card-title">{data.namatempat}</h2>
                            <p>{data.alamat}</p>
                            <p>{data.desc}</p>
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

const noPlaces = () => {
    return (
        <div>Data Wisata Belum Tersedia </div>
    )
}

const Placecard = ({ places }) => {
    //console.log(places)
    return !places ? noPlaces() : isPlacecard(places)
}

export default Placecard