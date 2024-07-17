import { Link } from '@inertiajs/react';
import React from 'react';

function CityPlaceCard({ city }) {

    console.log(city)
    return city.map((data, i) => {
        return (<div key={i}>
            <div className="card w-full card-compact lg:w-96 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg" style={{ backgroundColor: '#f0f0f0', height: '100%' }}>
                <Link
                    href={route('daftarwisata.kota', { namakota: data.id })}
                    method="get"
                >
                    <figure>
                        <img className="card-image" src={data.gambar} alt="WisataCirebon" style={{
                            height: "200px",
                            width: "100%"
                        }}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.namakota}</h2>
                    </div>
                </Link>
            </div>
        </div>
        )
    })
}


export default CityPlaceCard;