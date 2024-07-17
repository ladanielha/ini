import React from 'react';
import CityCard from '@/Components/CityPlaceCard';

const cities = [
    {
        name: 'Cirebon',
        image: 'cirebon.jpg',
        description: 'Cirebon adalah sebuah kota di Jawa Barat, Indonesia, terkenal dengan budayanya.'
    },
    {
        name: 'Bandung',
        image: 'bandung.jpg',
        description: 'Bandung adalah ibu kota Jawa Barat, dikenal dengan keindahan alamnya.'
    },
    // Tambahkan kota lainnya
];

function App() {
    return (
        <div>
            {cities.map((city, index) => (
                <CityCard key={index} cityInfo={city} />
            ))}
        </div>
    );
}

export default App;