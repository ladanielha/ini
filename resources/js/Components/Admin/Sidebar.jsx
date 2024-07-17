import { Link } from "@inertiajs/react";
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="py-10 sidebar bg-slate-100">
      <ul>
        <li>
          <Link
            href={route("admin")}
            className="mb-3 text-left font-bold hover:bg-primary hover:text-white transition-all duration-300 px-4 py-2 rounded"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href={route("admin.kota")}
            className="mb-3 text-left font-bold hover:bg-primary hover:text-white transition-all duration-300 px-4 py-2 rounded"
          >
            Kota
          </Link>
        </li>
        <li>
          <Link
            href={route("admin.wisata")}
            className="mb-3 text-left font-bold hover:bg-primary hover:text-white transition-all duration-300 px-4 py-2 rounded"
          >
            Wisata
          </Link>
        </li>
        <li>
          <Link
            href={route("admin.makanan")}
            className="mb-3 text-left font-bold hover:bg-primary hover:text-white transition-all duration-300 px-4 py-2 rounded"
          >
            Makanan
          </Link>
        </li>
        <li>
          <Link
            href={route("admin.nilaialt")}
            className="mb-3 text-left font-bold hover:bg-primary hover:text-white transition-all duration-300 px-4 py-2 rounded"
          >
            Nilai Wisata AHP
          </Link>
        </li>
        <li>
          <Link
            href={route("admin.nilaiwisatasaw")}
            className="mb-3 text-left font-bold hover:bg-primary hover:text-white transition-all duration-300 px-4 py-2 rounded"
          >
            Nilai Wisata SAW
          </Link>
        </li>
        <li>
          <Link
            href={route("admin.nilaimakananahp")}
            className="mb-3 text-left font-bold hover:bg-primary hover:text-white transition-all duration-300 px-4 py-2 rounded"
          >
            Nilai Makanan AHP
          </Link>
        </li>
        <li>
          <Link
            href={route("admin.nilaimakanansaw")}
            className="mb-3 text-left font-bold hover:bg-primary hover:text-white transition-all duration-300 px-4 py-2 rounded"
          >
            Nilai Makanan SAW
          </Link>
        </li>
        <li>
          <Link
            href={route("transactions")}
            className="mb-3 text-left font-bold hover:bg-primary hover:text-white transition-all duration-300 px-4 py-2 rounded"
          >
            Transaction
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
