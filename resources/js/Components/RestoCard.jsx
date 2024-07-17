import { Link } from '@inertiajs/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faBuilding, faStore } from '@fortawesome/free-solid-svg-icons';

function RestoCard({ restos }) {
    // console.log(restos.resto);

    return restos.resto.map((data, i) => (
        <div key={i}>
            <div className="card w-full card-compact lg:w-96 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg" style={{ backgroundColor: '#f0f0f0', height: '100%' }}>
                <Link
                    href={route('detail.resto', { store_id: data.store_id })}
                    method="get"
                >
                    <div className="card-body">
                        <h2 className="card-title">
                            <FontAwesomeIcon icon={faStore} className="mr-2" />
                            {data.namarestoran}
                        </h2>
                    </div>
                    <figure>
                        <img
                            className="card-image"
                            src={data.gambarrestoran}
                            alt={data.gambarrestoran}
                            style={{
                                height: '200px',
                                width: '100%',
                            }}
                        />
                    </figure>
                    <div className="card-body text-primary">
                        <h2 className="card-title">
                            <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                            {data.kota}
                        </h2>
                    </div>
                    <div className="card-body">
                        <p className="mb-4 text-lg text-primary dark:text-primary-500 text-indigo-600">
                            <FontAwesomeIcon icon={faClock} className="mr-2" />
                            Opening Hours: {data.jambuka}:00 AM - {data.jamtutup}:00 PM
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    ));
}

export default RestoCard;
