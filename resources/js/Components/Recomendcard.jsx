import { Link } from "@inertiajs/react";

function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    // jika text kepanjangn maka ptong  text
    return text.slice(0, maxLength) + '...';
  }

const isPlacecard = (places) => {
    //console.log(places)
    const placesArray = Object.values(places);
    //sort session berdasarkan score 
    placesArray.sort((a, b) => b.score - a.score);

    return placesArray.map((data, i) => {
        const limitedDescription = truncateText(data.desc, 100);

        return (
            <div key={i}>
                <Link href={route('detail.wisata',{ wisata_id: data.wisata_id })} method="get">
                    <div className="card w-full card-compact lg:w-96 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                        <figure><img src={data.gambar} alt="WisataCirebon" style={{ height: '260px', width: '400px' }} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">#{++i} {data.namatempat}</h2>
                            <p>Lokasi : {data.alamat}</p>
                            <p className="mb-6 text-neutral-500 dark:text-neutral-900">
                                Jam Buka : {data.jambuka}:00 AM - {data.jamtutup}:00 PM
                                    
                            </p>
                            <p>{limitedDescription}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-primary badge-outline">
                                    {data.jeniswisata}
                                </div>
                                {/* <div className="badge badge-primary badge-outline">
                                    {(data.score*100).toFixed(2)+"%"}
                                </div> */}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
};

const noPlaces = () => {
    return <div>Data Wisata Belum Tersedia</div>;
};

const Placecard = ({ places }) => {
    return !places ? noPlaces() : isPlacecard(places);
};

export default Placecard;
