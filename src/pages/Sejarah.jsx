import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'; // Pastikan jalur impor sesuai
import Footer from '../components/Footer'; // Jika ada komponen footer
import petaImage from '/assets/peta.jpg'; // Sesuaikan jalur gambar

function Sejarah() {
  const [isMounted, setIsMounted] = useState(false); // State untuk animasi masuk

  useEffect(() => {
    // Trigger animasi saat komponen dimount
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F7F8]">
      {/* Navbar */}
      <Navbar />

      {/* Konten Sejarah */}
      <div className={`pt-24 pb-8 px-8 transition-opacity duration-1000 ease-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
        {/* Judul Besar */}
        <h1 className={`text-3xl font-bold text-center mb-12 transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} duration-1000`}>Tentang Kepri</h1>

        {/* Konten Utama */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 mb-12">
          {/* Gambar Peta */}
          <div className={`flex justify-center transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} duration-1000`}>
            <img src={petaImage} alt="Peta Kepulauan Riau" className="w-full max-w-sm rounded-lg shadow-lg" />
          </div>

          {/* Deskripsi Kepri */}
          <div className={`flex-1 transition-opacity duration-1000 delay-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-base leading-relaxed mb-4">
              Kepulauan Riau (disingkat Kepri) adalah sebuah provinsi yang ada di Indonesia. Provinsi Kepulauan Riau berbatasan dengan Vietnam dan Kamboja di sebelah Utara; Malaysia dan provinsi Kalimantan Barat di sebelah Timur; provinsi
              Kepulauan Bangka Belitung dan Jambi di Selatan; negara Singapura, Malaysia dan provinsi Riau di sebelah Barat. Provinsi ini termasuk provinsi kepulauan di Indonesia. Tahun 2020, penduduk Kepulauan Riau berjumlah 2.064.564
              jiwa, dengan kepadatan 252 jiwa/km2, dan 58% penduduknya berada di kota Batam.
            </p>
            <p className="text-base leading-relaxed">
              Secara keseluruhan wilayah Kepulauan Riau terdiri dari 5 kabupaten, dan 2 kota, 52 kecamatan serta 299 kelurahan/desa dengan jumlah 2.408 pulau besar, dan kecil yang 30% belum bernama, dan berpenduduk. Adapun luas wilayahnya
              sebesar 8.201,72 km², sekitar 96% merupakan lautan, dan hanya sekitar 4% daratan.
            </p>
          </div>
        </div>

        {/* Bagian Sejarah */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Asal Usul Nama</h2>
          <p className="text-base leading-relaxed mb-4">
            Asal usul nama Kepulauan Riau berasal dari nama Riau. Riau diduga berasal dari kata "riuh" yang berarti ramai. Hal ini dikarenakan daerah Kepulauan Riau dahulunya merupakan pusat perdagangan dan keramaian. Lalu nama ini
            berkembang dengan digunakannya nama Riau pada nama Kesultanan Lingga. Pada masa kolonial, kata Riau dituliskan "Riouw", sesuai dengan ejaan bahasa Belanda.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Setelah proklamasi kemerdekaan, wilayah Riau (Kepulauan Riau saat ini) disatukan dengan wilayah Kesultanan Siak di daratan Sumatra. Dahulunya, hal ini dilakukan karena gerakan Ganyang Malaysia sehingga mempermudah hubungan dari
            wilayah kepulauan ke daratan Sumatra.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Namun, seiring berjalannya waktu, nama Riau digunakan oleh wilayah Kesultanan Siak di daratan Sumatra, sementara Kepulauan Riau memekarkan diri. Kata kepulauan ditambahkan di depan kata Riau karena wilayah yang sebagian besar
            lautan atau berbentuk kepulauan.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Asal usul nama Riau juga menuai polemik di antara budayawan Riau dan Kepulauan Riau. Kedua kubu ini menilai bahwa nama Riau berasal dari provinsinya masing-masing dengan versi sejarah yang berbeda.
          </p>

          <h2 className="text-2xl font-semibold mb-6">Sejarah</h2>
          <h3 className="text-xl font-semibold mb-4">Sejarah Sebelum Pembentukan Provinsi</h3>
          <p className="text-base leading-relaxed mb-4">
            Masa sejarah di Kepulauan Riau dimulai dengan ditemukannya Prasasti Pasir Panjang di Kabupaten Karimun yang terdapat semboyan pemujaan melalui tapak kaki Buddha. Hal ini diduga berhubungan dengan Kerajaan Melayu di Sumatra.
            Buddha diperkiran masuk melalui pedagang dari Tiongkok dan India.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Masa Islam di Kepulauan Riau berkembang dengan berdirinya Kesultanan Riau-Lingga. Kesultanan ini berasaskan Melayu Islam dan Islam sendiri dikenal setelah dibawa oleh pedagang dari Gujarat, India, dan Arab.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Masa Kolonial sangat berpengaruh dalam sejarah Kepulauan Riau. Julukan Hawaii Van Lingga yang diberikan kepada pulau Penuba, penggunaan uang tersendiri bagi Kepulauan Riau, dan terbentuknya Karesidenan Riouw menjadi bukti
            pengaruh kuat para kolonial di Kepulauan Riau. Pada tahun 1922, Afdeeling Tanjung Pinang membawahi empat onder-afdeeling yang terdiri dari:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Onder-Afdeeling Tanjung Pinang</li>
            <li>Onder-Afdeeling Karimun</li>
            <li>Onder-Afdeeling Lingga</li>
            <li>Onder-Afdeeling Pulau Tujuh yang dibagi ke dalam dua ressort, yakni ressort Kepulauan Anambas dan ressort Kepulauan Natuna.</li>
          </ul>
          <p className="text-base leading-relaxed mb-4">
            Adapun Afdeeling Indragiri yang terdiri dari Kuantan, Indragirische Bovenlanden dan Indragirische Benedenlanden, yang pada awal mulanya merupakan satu kesatuan dengan Kepulauan Riau, pada akhirnya, sesudah tahun 1950-an,
            dimasukkan ke dalam Riau.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Setelah masa kemerdekaan, Kepulauan Riau bergabung dengan wilayah Kesultanan Siak di daratan Sumatra sehingga membentuk provinsi Riau. Dahulunya, Kepulauan Riau juga menggunakan mata uang tersendiri bernama Uang Kepulauan Riau
            (KR). Namun secara perlahan, penggunaan mata uang ini dihentikan dan digantikan dengan mata uang Rupiah.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Setelah lama bergabung dengan Riau, Kepulauan Riau akhirnya memutuskan untuk memisahkan diri dengan membentuk Badan Perjuangan Pembentukan Provinsi Kepulauan Riau (BP3KR). Perjuangan BP3KR akhirnya membuahkan hasil dengan
            pemekaran provinsi Kepulauan Riau dari Riau pada tanggal 24 September 2002.
          </p>

          <h3 className="text-xl font-semibold mb-4">Sejarah Setelah Pembentukan Provinsi</h3>
          <p className="text-base leading-relaxed mb-4">
            Kepulauan Riau merupakan provinsi baru hasil pemekaran dari provinsi Riau. Provinsi Kepulauan Riau terbentuk berdasarkan Undang-undang Nomor 25 tahun 2002 merupakan provinsi ke-32 di Indonesia yang mencakup Kota Tanjungpinang,
            Kota Batam, Kabupaten Bintan, Kabupaten Karimun, Kabupaten Natuna, Kabupaten Kepulauan Anambas dan Kabupaten Lingga.
          </p>
        </div>
      </div>

      {/* Footer (Jika Ada) */}
      <Footer />
    </div>
  );
}

export default Sejarah;
