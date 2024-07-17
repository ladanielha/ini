import { Link } from "@inertiajs/react";

const isTablecart = (cart) => {
    console.log("cekcart", cart);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className="text-base">
                    <tr>
                        <th>No</th>
                        <th>Nama Pembeli </th>
                        <th>No Telepon</th>
                        <th>Pesan</th>
                        <th>Total_harga</th>
                        <th>Tanggal Pesanan</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.cart.map((data, i) => (
                        <tr key={i}>
                            <td>{++i}</td>
                            <td>{data.name}</td>
                            <td>{data.phone_number}</td>
                            <td>{data.message}</td>
                            <td>
                                {new Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                }).format(data.total_price)}
                            </td>
                            <td>
                                {new Date(data.created_at).toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
const noTablecart = () => {
    return <div>Data Cart Belum Tersedia </div>;
};

const Tablecart = ({ cart }) => {
    return !cart ? noTablecart() : isTablecart(cart);
};

export default Tablecart;
