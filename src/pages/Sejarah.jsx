import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import petaImage from '/assets/peta.jpg';
import sultanRiauLinggaImage from '/assets/sultanriaulingga.jpg';
import pasirPanjangImage from '/assets/pasirpanjang.png';
import bp3rImage from '/assets/bp3r.jpg';
import ansarImage from '/assets/ansar.jpg';
import marlinImage from '/assets/marlin.jpg';
import bintanImage from '/assets/bintan.png';
import karimunImage from '/assets/karimun.png';
import anambasImage from '/assets/anambas.jpg';
import linggaImage from '/assets/lingga.png';
import natunaImage from '/assets/natuna.png';
import batamImage from '/assets/batam.png';
import tanjungpinangImage from '/assets/tanjungpinang.png';

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
            <p className={`text-base leading-relaxed mb-4 transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} duration-1000 delay-200`}>
              Kepulauan Riau (disingkat Kepri) adalah sebuah provinsi yang ada di Indonesia. Provinsi Kepulauan Riau berbatasan dengan Vietnam dan Kamboja di sebelah Utara; Malaysia dan provinsi Kalimantan Barat di sebelah Timur; provinsi
              Kepulauan Bangka Belitung dan Jambi di Selatan; negara Singapura, Malaysia dan provinsi Riau di sebelah Barat. Provinsi ini termasuk provinsi kepulauan di Indonesia. Tahun 2020, penduduk Kepulauan Riau berjumlah 2.064.564
              jiwa, dengan kepadatan 252 jiwa/km2, dan 58% penduduknya berada di kota Batam.
            </p>
            <p className={`text-base leading-relaxed transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} duration-1000 delay-400`}>
              Secara keseluruhan wilayah Kepulauan Riau terdiri dari 5 kabupaten, dan 2 kota, 52 kecamatan serta 299 kelurahan/desa dengan jumlah 2.408 pulau besar, dan kecil yang 30% belum bernama, dan berpenduduk. Adapun luas wilayahnya
              sebesar 8.201,72 km², sekitar 96% merupakan lautan, dan hanya sekitar 4% daratan.
            </p>
          </div>
        </div>

        {/* Batas Wilayah */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Batas Wilayah</h2>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Arah</th>
                <th className="border border-gray-300 px-4 py-2">Batas Wilayah</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Utara</td>
                <td className="border border-gray-300 px-4 py-2">Laut Natuna Utara, Laut Natuna, Kamboja, Vietnam</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Timur</td>
                <td className="border border-gray-300 px-4 py-2">Pulau Kalimantan, Kalimantan Barat, Malaysia Timur, Selat Karimata</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Selatan</td>
                <td className="border border-gray-300 px-4 py-2">Selat Berhala, Kepulauan Bangka Belitung</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Barat</td>
                <td className="border border-gray-300 px-4 py-2">Pulau Sumatra, Riau, Jambi, Malaysia Barat, Singapura</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Geografi */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Geografi</h2>
          <p className="text-base leading-relaxed mb-4">
            Secara geografis provinsi Kepulauan Riau berbatasan dengan negara tetangga, yaitu Singapura, Malaysia, dan Vietnam yang memiliki luas wilayah 251.810,71 km² dengan 96 persennya adalah perairan dengan 1.350 pulau besar, dan kecil
            telah menunjukkan kemajuan dalam penyelenggaraan kegiatan pemerintahan, pembangunan, dan kemasyarakatan. Ibu kota provinsi Kepulauan Riau berkedudukan di Tanjungpinang. Provinsi ini terletak pada jalur lalu lintas transportasi
            laut, dan udara yang strategis, dan terpadat pada tingkat internasional serta pada bibir pasar dunia yang memiliki peluang pasar. Titik tertinggi di Kepulauan Riau adalah Gunung Daik (1.165 mdpl) yang terdapat di pulau Lingga.
          </p>
        </div>

        {/* Sumber Daya Alam */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sumber Daya Alam</h2>
          <p className="text-base leading-relaxed mb-4">
            Kepri memiliki potensi sumber daya alam mineral, dan energi yang relatif cukup besar, dan bervariasi baik berupa bahan galian A (strategis) seperti minyak bumi, dan gas alam, bahan galian B (vital) seperti timah, bauksit, dan
            pasir besi, maupun bahan galian golongan C seperti granit, pasir, dan kuarsa.
          </p>
        </div>

        {/* Bagian Asal Usul Nama */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-12 bg-white p-8 rounded-lg shadow-lg">
          {/* Gambar di Kiri */}
          <div className={`md:w-1/3 transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} duration-1000 delay-500`}>
            <img src={sultanRiauLinggaImage} alt="Sultan Riau Lingga" className="w-full max-w-sm rounded-lg shadow-lg" />
          </div>
          {/* Teks di Kanan */}
          <div className={`md:w-2/3 text-base leading-relaxed text-gray-700 transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} duration-1000 delay-700`}>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Asal Usul Nama</h2>
            <p className="mb-4">
              Asal usul nama Kepulauan Riau berasal dari nama Riau. Riau diduga berasal dari kata "riuh" yang berarti ramai. Hal ini dikarenakan daerah Kepulauan Riau dahulunya merupakan pusat perdagangan dan keramaian. Lalu nama ini
              berkembang dengan digunakannya nama Riau pada nama Kesultanan Lingga. Pada masa kolonial, kata Riau dituliskan "Riouw", sesuai dengan ejaan bahasa Belanda.
            </p>
            <p className="mb-4">
              Setelah proklamasi kemerdekaan, wilayah Riau (Kepulauan Riau saat ini) disatukan dengan wilayah Kesultanan Siak di daratan Sumatra. Dahulunya, hal ini dilakukan karena gerakan Ganyang Malaysia sehingga mempermudah hubungan
              dari wilayah kepulauan ke daratan Sumatra.
            </p>
            <p className="mb-4">
              Namun, seiring berjalannya waktu, nama Riau digunakan oleh wilayah Kesultanan Siak di daratan Sumatra, sementara Kepulauan Riau memekarkan diri. Kata kepulauan ditambahkan di depan kata Riau karena wilayah yang sebagian besar
              lautan atau berbentuk kepulauan.
            </p>
            <p className="mb-4">Asal usul nama Riau juga menuai polemik di antara budayawan Riau dan Kepulauan Riau. Kedua kubu ini menilai bahwa nama Riau berasal dari provinsinya masing-masing dengan versi sejarah yang berbeda.</p>
          </div>
        </div>

        {/* Bagian Sejarah */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-12 bg-white p-8 rounded-lg shadow-lg">
          {/* Gambar di Kiri */}
          <div className={`md:w-1/3 transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} duration-1000 delay-800`}>
            <img src={pasirPanjangImage} alt="Prasasti Pasir Panjang" className="w-full max-w-sm rounded-lg shadow-lg mb-4" />
            <img src={bp3rImage} alt="Badan Perjuangan Pembentukan Provinsi Kepulauan Riau" className="w-full max-w-sm rounded-lg shadow-lg mt-4" />
          </div>
          {/* Teks di Kanan */}
          <div className={`md:w-2/3 text-base leading-relaxed text-gray-700 transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} duration-1000 delay-1000`}>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Sejarah</h2>
            <h3 className="text-xl font-semibold mb-4">Sejarah Sebelum Pembentukan Provinsi</h3>
            <p className="mb-4">
              Masa sejarah di Kepulauan Riau dimulai dengan ditemukannya Prasasti Pasir Panjang di Kabupaten Karimun yang terdapat semboyan pemujaan melalui tapak kaki Buddha. Hal ini diduga berhubungan dengan Kerajaan Melayu di Sumatra.
              Buddha diperkirakan masuk melalui pedagang dari Tiongkok dan India.
            </p>
            <p className="mb-4">
              Masa Islam di Kepulauan Riau berkembang dengan berdirinya Kesultanan Riau-Lingga. Kesultanan ini berasaskan Melayu Islam dan Islam sendiri dikenal setelah dibawa oleh pedagang dari Gujarat, India, dan Arab.
            </p>
            <p className="mb-4">
              Masa Kolonial sangat berpengaruh dalam sejarah Kepulauan Riau. Julukan Hawaii Van Lingga yang diberikan kepada pulau Penuba, penggunaan uang tersendiri bagi Kepulauan Riau, dan terbentuknya Karesidenan Riouw menjadi bukti
              pengaruh kuat para kolonial di Kepulauan Riau. Pada tahun 1922, Afdeeling Tanjung Pinang membawahi empat onder-afdeeling yang terdiri dari:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Onder-Afdeeling Tanjung Pinang</li>
              <li>Onder-Afdeeling Karimun</li>
              <li>Onder-Afdeeling Lingga</li>
              <li>Onder-Afdeeling Pulau Tujuh yang dibagi ke dalam dua ressort, yakni ressort Kepulauan Anambas dan ressort Kepulauan Natuna.</li>
            </ul>
            <p className="mb-4">
              Adapun Afdeeling Indragiri yang terdiri dari Kuantan, Indragirische Bovenlanden dan Indragirische Benedenlanden, yang pada awal mulanya merupakan satu kesatuan dengan Kepulauan Riau, pada akhirnya, sesudah tahun 1950-an,
              dimasukkan ke dalam Riau.
            </p>
            <p className="mb-4">
              Setelah masa kemerdekaan, Kepulauan Riau bergabung dengan wilayah Kesultanan Siak di daratan Sumatra sehingga membentuk provinsi Riau. Dahulunya, Kepulauan Riau juga menggunakan mata uang tersendiri bernama Uang Kepulauan Riau
              (KR). Namun secara perlahan, penggunaan mata uang ini dihentikan dan digantikan dengan mata uang Rupiah.
            </p>
            <p className="mb-4">
              Setelah lama bergabung dengan Riau, Kepulauan Riau akhirnya memutuskan untuk memisahkan diri dengan membentuk Badan Perjuangan Pembentukan Provinsi Kepulauan Riau (BP3KR). Perjuangan BP3KR akhirnya membuahkan hasil dengan
              pemekaran provinsi Kepulauan Riau dari Riau pada tanggal 24 September 2002.
            </p>

            <h3 className="text-xl font-semibold mb-4 mt-8">Sejarah Setelah Pembentukan Provinsi</h3>
            <p className="mb-4">
              Kepulauan Riau merupakan provinsi baru hasil pemekaran dari provinsi Riau. Provinsi Kepulauan Riau terbentuk berdasarkan Undang-undang Nomor 25 tahun 2002 merupakan provinsi ke-32 di Indonesia yang mencakup Kota Tanjungpinang,
              Kota Batam, Kabupaten Bintan, Kabupaten Karimun, Kabupaten Natuna, Kabupaten Kepulauan Anambas dan Kabupaten Lingga.
            </p>
          </div>
        </div>

        {/* Pemerintahan, Perwakilan, dan Kabupaten dan Kota */}
        <div className="mb-12 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Pemerintahan</h2>
          {/* Gubernur dan Wakil Gubernur */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Gubernur */}
            <div className="flex flex-col items-center text-center">
              <img src={ansarImage} alt="Gubernur Ansar Ahmad" className="w-48 h-64 object-cover rounded-lg shadow-lg mb-4" />
              <div>
                <h3 className="text-xl font-semibold">Ansar Ahmad</h3>
                <p className="text-base">Gubernur Kepulauan Riau</p>
                <p className="text-base">Mulai Jabatan: 25 Februari 2021</p>
                <p className="text-base">Akhir Jabatan: Petahana (2021-2024)</p>
              </div>
            </div>

            {/* Wakil Gubernur */}
            <div className="flex flex-col items-center text-center">
              <img src={marlinImage} alt="Wakil Gubernur Marlin Agustina" className="w-48 h-64 object-cover rounded-lg shadow-lg mb-4" />
              <div>
                <h3 className="text-xl font-semibold">Marlin Agustina</h3>
                <p className="text-base">Wakil Gubernur Kepulauan Riau</p>
                <p className="text-base">Mulai Jabatan: 25 Februari 2021</p>
                <p className="text-base">Akhir Jabatan: Petahana (2021-2024)</p>
              </div>
            </div>
          </div>

          {/* Perwakilan */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Perwakilan</h2>
            <p className="text-base leading-relaxed mb-4">
              DPRD Kepulauan Riau beranggotakan 45 orang yang dipilih melalui pemilihan umum setiap lima tahun sekali. Pimpinan DPRD Kepulauan Riau terdiri dari 1 Ketua dan 3 Wakil Ketua yang berasal dari partai politik pemilik jumlah kursi
              dan suara terbanyak. Anggota DPRD Kepulauan Riau yang sedang menjabat saat ini adalah hasil Pemilu 2019 yang dilantik pada 9 September 2019 oleh Wakil Ketua Pengadilan Tinggi Pekanbaru, Moch. Eka Kartika, di Ruang Sidang Utama
              Gedung DPRD Provinsi Kepulauan Riau. Komposisi anggota DPRD Kepulauan Riau periode 2019-2024 terdiri dari 10 partai politik dimana PDI Perjuangan dan Partai Golkar adalah partai politik pemilik kursi terbanyak yaitu
              masing-masing 8 kursi, kemudian disusul oleh Partai Keadilan Sejahtera dan Partai NasDem yang masing-masing meraih 6 kursi.
            </p>
          </div>

          {/* Kabupaten dan Kota */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Kabupaten dan Kota</h2>
            <p className="text-base leading-relaxed">Provinsi Kepulauan Riau merupakan salah satu provinsi di Pulau Sumatra. Provinsi Kepulauan Riau terdiri atas 5 kabupaten dan 2 kota.</p>

            {/* Tabel Kabupaten/Kota */}
            <div className="mb-12 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Kabupaten/Kota di Kepulauan Riau</h2>
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">No.</th>
                    <th className="border border-gray-300 px-4 py-2">Kabupaten/Kota</th>
                    <th className="border border-gray-300 px-4 py-2">Pusat Pemerintahan</th>
                    <th className="border border-gray-300 px-4 py-2">Bupati/Wali Kota</th>
                    <th className="border border-gray-300 px-4 py-2">Lambang</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                    <td className="border border-gray-300 px-4 py-2">Kabupaten Bintan</td>
                    <td className="border border-gray-300 px-4 py-2">Bandar Seri Bentan</td>
                    <td className="border border-gray-300 px-4 py-2">Roby Kurniawan</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <img src={bintanImage} alt="Lambang Bintan" className="w-12 h-auto mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">Kabupaten Karimun</td>
                    <td className="border border-gray-300 px-4 py-2">Tanjung Balai Karimun</td>
                    <td className="border border-gray-300 px-4 py-2">Aunur Rafiq</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <img src={karimunImage} alt="Lambang Karimun" className="w-12 h-auto mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">Kabupaten Kepulauan Anambas</td>
                    <td className="border border-gray-300 px-4 py-2">Tarempa</td>
                    <td className="border border-gray-300 px-4 py-2">Abdul Haris</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <img src={anambasImage} alt="Lambang Anambas" className="w-12 h-auto mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">4</td>
                    <td className="border border-gray-300 px-4 py-2">Kabupaten Lingga</td>
                    <td className="border border-gray-300 px-4 py-2">Daik</td>
                    <td className="border border-gray-300 px-4 py-2">M. Nizar</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <img src={linggaImage} alt="Lambang Lingga" className="w-12 h-auto mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">5</td>
                    <td className="border border-gray-300 px-4 py-2">Kabupaten Natuna</td>
                    <td className="border border-gray-300 px-4 py-2">Ranai</td>
                    <td className="border border-gray-300 px-4 py-2">Wan Siswandi</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <img src={natunaImage} alt="Lambang Natuna" className="w-12 h-auto mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">6</td>
                    <td className="border border-gray-300 px-4 py-2">Kota Batam</td>
                    <td className="border border-gray-300 px-4 py-2">-</td>
                    <td className="border border-gray-300 px-4 py-2">Muhammad Rudi</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <img src={batamImage} alt="Lambang Batam" className="w-12 h-auto mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">7</td>
                    <td className="border border-gray-300 px-4 py-2">Kota Tanjungpinang</td>
                    <td className="border border-gray-300 px-4 py-2">-</td>
                    <td className="border border-gray-300 px-4 py-2">Hasan, S.Sos</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <img src={tanjungpinangImage} alt="Lambang Tanjungpinang" className="w-12 h-auto mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Sejarah;
