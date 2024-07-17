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
                <div key={i}>
                <Link href={route('detail.makanan', { makanan_id: data.makanan_id })} method="get">
                    <div className="card w-96 h-96 shadow-md card-compact lg:w-96 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                    <figure><img src={data.gambar} alt={data.namamakanan} style={{ height: '250px', width: '400px' }}/></figure>
                        <div className="card-body">
                            <h2 className="card-title">{data.namamakanan}</h2>
                            <p>{limitedDescription}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-primary badge-outline">{data.jenismakanan}</div>
                                <div className="badge badge-primary badge-outline">{++i}</div>
                                {/* <div className="badge badge-primary badge-outline">{(data.score*100).toFixed(2)+"%"}</div> */}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
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
