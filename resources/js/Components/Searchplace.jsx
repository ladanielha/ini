import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ city }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState(""); 

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);

        const newFilter = city.filter((value) => {
            const cityName = value.namakota.toLowerCase();
            const searchWordLowerCase = searchWord.toLowerCase();

            // Check if each character in the search word appears in order in the city name
            for (let i = 0; i < searchWordLowerCase.length; i++) {
                if (cityName[i] !== searchWordLowerCase[i]) {
                    return false;
                }
            }

            return true;
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    return (
        <div className="flex items-center bg-white rounded-lg shadow-md p-2 pl-4">
            <div className="text-gray-500">
                <div className="form">
                    <FontAwesomeIcon icon={faSearch} />
                    <input
                        type="text"
                        placeholder="kota"
                        className="w-64 focus:outline-none ml-2"
                        value={wordEntered}
                        onChange={handleFilter}
                    />
                    <span className="left-pan"><i className="fa fa-microphone"></i></span>
                </div>

                {filteredData.length !== 0 && (
                    <div className="dataResult">
                        <div className="max-h-40 overflow-y-auto">
                            {filteredData.slice(0, 15).map((value, index) => (
                                <Link
                                    href={route('daftarwisata.kota', { namakota: value.namakota })}
                                    method="get"
                                    key={index}
                                >
                                    <div className="py-2 px-4 cursor-pointer transition duration-300 hover:bg-primary hover:text-white border-b border-gray-200">
                                        <div className="flex flex-col ml-3">
                                            <span className="text-Black">{value.namakota}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBar;
