import { Link } from "@inertiajs/react"

function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    // jika text kepanjangn maka ptong  text
    return text.slice(0, maxLength) + '...';
  }

const isTablemakanan = (makanan) => {

    return (
        <div className="w-min-screen">
            <table className="table">
                {/* head */}
                <thead className="text-base">
                    <tr>
                        <th>No</th>
                        <th>Gambar</th>
                        <th>Nama Makanan</th>
                        <th>Jenis Makanan</th>
                        <th>Restoran</th>
                        <th>Harga</th>
                        <th>Desc</th>
                        <th>No Sertifikat</th>
                        <th>Aksi</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {makanan.makanan.map((data, i) =>
                        <tr key={i}>
                            <td>{++i}</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={data.gambar} alt="Makanan Cirebon" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {data.namamakanan}
                            </td>
                            <td>{data.jenismakanan}</td>
                            <td>{data.store_id}</td>
                            <td>{data.harga}</td>
                            <td>{truncateText(data.desc, 35)}</td>
                            <td>{data.sertifikat}</td>
                            <th>
                                <Link href={route('edit.makanan')} method="get" data={{ makanan_id: data.makanan_id }} className="btn btn-outline btn-xs btn-warning">Edit</Link>
                                <Link href={route('delete.makanan')} method="post" data={{ makanan_id: data.makanan_id }} className="btn btn-outline btn-xs btn-error">Hapus</Link>
                            </th>
                        </tr>)}
                </tbody>

            </table>
        </div>
    )

}
const noTablemakanan = () => {
    return (
        <div>Data Makanan Belum Tersedia </div>
    )
}

const Tablemakanan = ({ makanan }) => {

    return !makanan ? noTablemakanan() : isTablemakanan(makanan)
}

export default Tablemakanan