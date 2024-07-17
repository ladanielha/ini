import { Link } from "@inertiajs/react"

function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    // jika text kepanjangn maka ptong  text
    return text.slice(0, maxLength) + '...';
  }

const isTablewisata = (places) => {
        
        return (
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-base">
                        <tr>                           
                            <th>No</th>
                            <th>Gambar</th>
                            <th>Nama Tempat</th>
                            <th>Alamat</th>
                            <th>Kota</th>
                            <th>Harga</th>
                            <th>Deskripsi</th>
                            <th>Aksi</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { places.places.map((data, i) =>
                        
                        <tr key = {i}>
                            <td>{++i}</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
                                            <img src={data.gambar} alt="Wisata" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            {data.namatempat}
                                <br />
                                <span className="badge badge-sm">{data.jambuka} AM -{data.jamtutup} PM</span>
                            </td>
                            
                            <td>{data.alamat}</td>
                            <td>{data.namakota}</td>
                            <td>{data.harga}</td>
                            <td>{truncateText(data.desc, 35)}</td>
                            <th>
                                <Link href={route('edit.wisata')} method="get" data={{wisata_id: data.wisata_id}}className="btn btn-outline btn-xs btn-warning">Edit</Link>
                                <Link href={route('delete.wisata')} method="post" data={{wisata_id: data.wisata_id}}className="btn btn-outline btn-xs btn-error">Hapus</Link>                               
                            </th>
                        </tr>)}
                    </tbody>

                </table>
            </div>
        )
    
}
const noTablewisata = () => {
    return (
        <div>Data Wisata Belum Tersedia </div>
    )
}

const Tablewisata = ({ places }) => {

    return !places ? noTablewisata() : isTablewisata(places)
}

export default Tablewisata