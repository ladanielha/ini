import { Link } from "@inertiajs/react"


const isTablenilaialt = (nilaialts) => {
            console.log("nihnilai",nilaialts)
        return (
            <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead className="text-base">
                                    <tr>
                                        <th>No</th>
                                        <th>Nama Makanan</th>
                                        <th>Harga</th>
                                        <th>Kualitas</th>
                                        <th>Gizi</th>
                                        <th>Porsi</th>
                                        <th>Aksi</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {nilaialts.map((data, i) =>
                                        <tr key={i}>
                                            <td>
                                                {++i}
                                            </td>
                                            <td>
                                                {data.namamakanan}
                                            </td>
                                            <td>{data.rate_harga}</td>
                                            <td>{data.rate_kualitas}</td>
                                            <td>{data.rate_gizi}</td>
                                            <td>{data.rate_porsi}</td>
                                            <th>
                                                <Link href={route('edit.nilaimakanansaw',data={ nilaialt_id: data.nilaialt_id })} method="get"  className="btn btn-outline btn-xs btn-warning">Edit</Link>
                                            </th>
                                        </tr>)}
                                </tbody>

                            </table>
                        </div>
        )
    
}
const noTablenilaialt = () => {
    return (
        <div>Data nilaialt Belum Tersedia </div>
    )
}

const Tablenilaialt = ( {nilaialts} ) => {

    return !nilaialts ? noTablenilaialt() : isTablenilaialt(nilaialts)
}

export default Tablenilaialt