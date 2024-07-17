import React from 'react';

const Tutorial = () => {
  return (
    <div className="py-6 px-4 space-y-8 bg-gray-100 rounded-lg">
      <div className="relative">
        <div className="flex items-center relative space-x-4">
          <div className="hidden md:block w-16 text-2xl font-semibold text-blue-600">
            <span>1</span>
          </div>

          <div className="border-r-2 border-blue-600 absolute h-10 left-6 md:left-16 top-0 z-10">
            <i className="fas fa-circle absolute top-2 left-[-14px] text-blue-600 text-2xl"></i>
          </div>

          <div className="ml-8">
            <div className="text-xl font-semibold text-gray-800 pl-8">Cara Menggunakan</div>
            <div className="text-lg text-gray-600 mt-4">
              Terdapat 4 kriteria yaitu:
              <ul className="list-disc pl-6">
                <li>Fasilitas: tersedia mushola, fasilitas MCK, fasilitas parkir, dan atraksi daya tarik</li>
                <li>Pelayanan: Keramahan, Sikap dalam melayani pengunjung</li>
                <li>Ramah keluarga: Wisata ditujukan untuk segala kalangan atau usia</li>
                <li>Akomodasi: Tersedia penginapan dan akses perjalanan</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center relative space-x-4 mt-8">
          <div className="hidden md:block w-16 text-2xl font-semibold text-blue-600">
            <span>2</span>
          </div>

          <div className="border-r-2 border-blue-600 absolute h-10 left-6 md:left-16 top-0 z-10">
            <i className="fas fa-circle absolute top-2 left-[-14px] text-blue-600 text-2xl"></i>
          </div>

          <div className="ml-8">
            <div className="text-xl font-semibold text-gray-800 pl-8">Keterangan Nilai</div>
            <div className="text-lg text-gray-600 mt-4">
              Nilai 1 memiliki arti kedua kriteria memiliki kepentingan yang sama.
              <ul className="list-disc pl-6">
                <li>Nilai 2 memiliki arti salah satu kriteria memiliki nilai sedikit lebih penting dibanding kriteria.</li>
                <li>Nilai 3 memiliki arti salah satu kriteria memiliki nilai sedikit lebih dari sedikit lebih penting dibanding kriteria lawan.</li>
                <li>Nilai 4 memiliki arti salah satu kriteria memiliki nilai lebih penting dibanding kriteria lawan.</li>
                <li>Nilai 5 memiliki arti salah satu kriteria memiliki nilai dua kali lebih penting dibanding kriteria lawan.</li>
                <li>Nilai 6 memiliki arti salah satu kriteria memiliki nilai antara 5 dan 7.</li>
                <li>Nilai 7 memiliki arti salah satu kriteria memiliki nilai sangat lebih penting dibanding kriteria lawan.</li>
                <li>Nilai 8 memiliki arti salah satu kriteria memiliki nilai antara 7 dan 9.</li>
                <li>Nilai 9 memiliki arti salah satu kriteria memiliki nilai mutlak lebih penting dibanding kriteria lawan.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center relative space-x-4 mt-8">
          <div className="hidden md:block w-16 text-2xl font-semibold text-blue-600">
            <span>3</span>
          </div>

          <div className="border-r-2 border-blue-600 absolute h-10 left-6 md:left-16 top-0 z-10">
            <i className="fas fa-circle absolute top-2 left-[-14px] text-blue-600 text-2xl"></i>
            <i className="fas fa-circle absolute bottom-0 left-[-14px] text-blue-600 text-2xl"></i>
          </div>

          <div className="ml-8">
            <div className="text-xl font-semibold text-gray-800 pl-8">Hasil</div>
            <div className="text-lg text-gray-600 mt-4">
              Jika nilai yang dimasukkan tidak konsisten, masukkan nilai kembali.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
