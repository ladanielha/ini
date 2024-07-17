import { Link } from "@inertiajs/react"
import { faShoppingCart, faBell, faUser, faUtensils, faStore, faBuilding, faBook} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Statistic = ( ) => {

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <div className="bg-blue-500 bg-primary   shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <FontAwesomeIcon className="text-black" icon={faBuilding} style={{ fontSize: '1.5rem' }} />
            </div>
            <div className="text-right">
            <Link className="text-2xl" href={route("admin.kota")}>Kota</Link>
            </div>
          </div>
          <div className="bg-blue-500 bg-primary   shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <FontAwesomeIcon className="text-black" icon={faStore} style={{ fontSize: '1.5rem' }} />
            </div>
            <div className="text-right">
              <Link  className="text-2xl" href={route("admin.wisata")}>Wisata</Link>
            </div>
          </div>
          <div className="bg-blue-500 bg-primary   shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <FontAwesomeIcon className="text-black" icon={faUtensils} style={{ fontSize: '1.5rem' }} />
            </div>
            <div className="text-right">
            <Link className="text-2xl" href={route("admin.makanan")}>Makanan</Link>
            </div>
          </div>
          <div className="bg-blue-500 bg-primary   shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <FontAwesomeIcon className="text-black" icon={faBook} style={{ fontSize: '1.5rem' }} />
            </div>
            <div className="text-right">
            <Link className="text-1xl" href={route("admin.nilaialt")}>Nilai Wisata AHP</Link>
            </div>
          </div>
          <div className="bg-blue-500 bg-primary   shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <FontAwesomeIcon className="text-black" icon={faBook} style={{ fontSize: '1.5rem' }} />
            </div>
            <div className="text-right">
            <Link className="text-1xl" href={route("admin.nilaiwisatasaw")}>Nilai Wisata SAW</Link>
            </div>
          </div>
      
          <div className="bg-blue-500 bg-primary   shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <FontAwesomeIcon className="text-black" icon={faBook} style={{ fontSize: '1.5rem' }} />
            </div>
            <div className="text-right">
            <Link className="text-1xl" href={route("admin.nilaimakananahp")}>Nilai Makanan AHP</Link>
            </div>
          </div>
          <div className="bg-blue-500 bg-primary   shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <FontAwesomeIcon className="text-black" icon={faBook} style={{ fontSize: '1.5rem' }} />
            </div>
            <div className="text-right">
            <Link className="text-1xl" href={route("admin.nilaimakanansaw")}>Nilai Makanan SAW</Link>
            </div>
          </div>
          
          
          
        </div>
    )

}

export default Statistic