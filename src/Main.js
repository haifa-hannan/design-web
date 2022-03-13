import React from "react";
import './App.css';
import Lesson from "./Lesson";


class Main extends React.Component{
    render(){
        const lessonList =[
            {
                name: 'Zaman Batu Muda',
                lesson1: 'Sungai Nil telah menjadi urat nadi peradaban Mesir semenjak masyarakat pemburu-peramu yang hidup berpindah-pindah mulai menempati tepiannya pada zaman Pleistosen. Peradaban bangsa Mesir perdana ini meninggalkan jejak-jejak berupa artefak-artefak dan ukiran-ukiran pada batu yang ditemukan di sepanjang teras Sungai Nil dan di wahah-wahah Mesir. Bagi bangsa Mesir, Sungai Nil berarti kehidupan dan gurun berarti kematian, kendati justru gurunlah yang membentengi mereka dari invasi.',
                lesson2: 'Di sepanjang tepian Sungai Nil pada milenium ke-12 SM, muncul suatu kebudayaan masyarakat yang hidup dari mengirik biji-bijian dan telah memanfaatkan peralatan berupa bilah arit jenis terawal. Kebudayaan ini menggantikan kebudayaan masyarakat pengguna peralatan batu, yang mencari nafkah dengan berburu, menangkap ikan, dan meramu. Ada pula bukti-bukti keberadaan permukiman manusia serta kegiatan penggembalaan ternak sebelum tahun 8000 SM di penjuru barat daya Mesir, dekat dari tapal batas Sudan. Meskipun demikian, menurut Barbara Barich, teori yang menyatakan bahwa penjinakan satwa jenis bovinae berlangsung di Afrika sudah harus ditinggalkan karena bukti-bukti lebih lanjut untuk kurun waktu sepanjang tiga puluh tahun yang terkumpul telah gagal mendukung teori itu.[1] Sehubungan dengan pendapat Barbara Barich ini, bekas-bekas penjinakan bovinae tertua di Afrika yang telah diketahui adalah bukti-bukti yang ditemukan di Al Fayyum dan diperkirakan berasal dari sekitar tahun 4400 SM.[2] Bukti-bukti geologi dan studi percontohan iklim berbasis komputer menunjukkan bahwa perubahan iklim sekitar 8000 SM mengakibatkan kekeringan mulai melanda lahan penggembalaan ternak yang terbentang luas di kawasan utara Afrika dan pada akhirnya menciptakan Gurun Sahara (sekitar 2500 SM). Kemarau panjang memaksa leluhur-leluhur bangsa Mesir perdana untuk berpindah dan tinggal lebih lama di sekitar Sungai Nil. Kemarau panjang juga memaksa mereka untuk mengadopsi gaya hidup yang lebih menetap.'
            },
            {
                name:'Zaman Wangsa',
                lesson1 : 'Catatan-catatan sejarah Mesir Kuno diawali dengan menyebut Mesir sebagai suatu negara kesatuan yang terwujud sekitar 3150 SM. Menurut tradisi Mesir, Menes, yang diyakini sebagai tokoh pemersatu Mesir Hulu dan Mesir Hilir, adalah raja Mesir yang pertama. Budaya, adat-istiadat, seni rupa, rancang bangun, dan susunan kemasyarakatan Mesir berkaitan erat dengan agama, luar biasa stabilnya, dan sedikit demi sedikit mengalami perubahan dalam kurun waktu hampir 3000 tahun.',
                lesson2: 'Kronologi Mesir, yang memuat tahun-tahun pemerintahan raja-raja, berawal pada kurun waktu ini. Kronologi Mesir konvensional adalah kronologi yang diterima pada abad ke-20, namun kronologi ini tidak memuat satu pun usulan-usulan perbaikan penting yang juga telah diajukan dalam abad itu. Dalam satu karya ilmiah saja, arkeolog kerap menetapkan lebih dari satu tanggal atau bahkan mengajukan lebih dari satu kronologi utuh yang mungkin digunakan. Oleh karena itu, dapat saja penetapan waktu yang digunakan dalam artikel ini berbeda dari penetapan waktu dalam artikel lain yang bertopik terkait Mesir Kuno. Mungkin pula terdapat lebih dari satu cara eja nama-nama tokoh sejarah. Lazimnya para egiptolog membagi kurun waktu pemerintahan para firaun mengikuti urut-urutan yang disusun pertama kali oleh Manetho dalam Aegyptiaca (Sejarah Mesir) yang ditulis semasa Wangsa Ptolemaios berkuasa pada abad ke-3 SM. Sebelum penyatuan Mesir, wilayah negeri ini terbagi-bagi atas desa-desa mandiri. Sejak kemunculan wangsa-wangsa perdana, dan untuk sebagian besar dari sejarah Mesir selanjutnya, negeri ini dikenal sebagai Dua Negeri. Para pemimpin membentuk administrasi nasional dan melantik gubernur-gubernur kerajaan.'
            },
            {
                name: 'Zaman Kerajaan Lama',
                lesson1: 'Zaman Kerajaan Lama lazimnya dianggap sebagai kurun waktu semenjak Mesir diperintah oleh Wangsa Ketiga sampai Wangsa Keenam (2686–2181 SM). Ibu kota Kerajaan Mesir pada Zaman Kerajaan Lama adalah Memphis, yang ditetapkan Djoser sebagai pusat pemerintahannya. Akan tetapi Zaman Kerajaan Lama mungkin lebih dikenal karena banyaknya piramida yang dibangun pada zaman ini sebagai makam firaun. Inilah sebabnya Zaman Kerajaan Lama kerap dijuluki "Zaman Piramida." Firaun pertama yang menonjol pada kurun waktu ini adalah Djoser (2630–2611 SM) dari Wangsa Ketiga, yang memerintahkan pembangunan sebuah Piramida Berundak di Saqqara, nekropolis Kota Memphis.',
                lesson2: 'Pada zaman inilah negara-negara kecil Mesir Kuno yang sebelumnya merdeka berubah menjadi satuan-satuan administratif yang disebut Nome dan yang diperintah oleh firaun semata. Para pemimpin sebelumnya dipaksa menduduki jabatan kepala daerah atau jabatan pemungut cukai. Bangsa Mesir pada zaman ini menyembah firaun sebagai dewa yang mereka yakini sebagai penjamin keberlangsungan banjir tahunan yang diperlukan tanaman-tanaman mereka.'
            },
            {
                name:'Zaman Kerajaan Pertengahan',
                lesson1:'Zaman Kerajaan Pertengahan adalah kurun waktu dalam sejarah Mesir Kuno yang merentang sejak tahun ke-39 pemerintahan Mentuhotep II dari Wangsa Kesebelas sampai pada akhir masa kekuasaan Wangsa Ketiga Belas, kira-kira antara 2030 SM dan 1650 SM. Zaman ini terdiri atas dua tahap. Yang pertama adalah masa kekuasaan Wangsa Kesebelas yang memerintah di Thebes dan yang kedua adalah masa kekuasaan Wangsa Kedua Belas yang beribu kota di el-Lisht. Masa kekuasaan dua wangsa ini mula-mula dianggap sebagai keseluruhan dari rentang waktu zaman kerajaan persatuan ini, namun beberapa sejarawan kini[16] beranggapan bahwa paruh pertama dari Wangsa Ketiga Belas tergolong pula dalam Zaman Kerajaan Pertengahan.',
                lesson2:'Firaun-firaun terawal dari Zaman Kerajaan Pertengahan menisbatkan asal-usulnya pada dua nomark dari Thebes, yakni Intef Agung, putera Iku yang mengabdi pada seorang firaun Herakleopolis dari Wangsa Kesepuluh, dan penggantinya Mentuhotep I. Firaun yang menggantikan Mentuhotep I, Intef I adalah penguasa Thebes pertama yang menggelari dirinya dengan Nama Horus, dan oleh karena itu menyatakan diri berhak atas tahta Mesir. Ia dianggap sebagai firaun pertama dari Wangsa Kesebelas. Pernyataan diri itu mengakibatkan rakyat Thebes bertikai dengan para penguasa dari Dinasti Kesepuluh. Intef I dan saudaranya, Intef II, beberapa kali melancarkan peperangan ke wilayah utara dan pada akhirnya merebut nome penting, Abydos.'
            },
            {
                name:'Zaman Kekuasaan Hyksos',
                lesson1: 'Periode Antara Kedua merupakan kurun waktu dalam sejarah Mesir Kuno di antara akhir Zaman Kerajaan Pertengahan dan awal Zaman Kerajaan Baru tatkala negeri itu sekali lagi tercerai-berai. Zaman ini dikenal sebagai zaman ketika bangsa Hyksos (salah satu suku di Asia) menunjukkan keberadaannya di Mesir. Tahun-tahun pemerintahan raja-raja bangsa Hyksos inilah yang merupakan masa kekuasaan Wangsa Kelima Belas.',
                lesson2: 'Wangsa Ketiga Belas terbukti tidak mampu mempertahankan keutuhan wilayah Mesir yang begitu luas, sehingga sebuah keluarga penguasa provinsi berkebangsaan Kanaan yang berlokasi di kawasan rawa-rawa di sebelah timur muara di Avaris melepaskan diri dari pemerintah pusat serta membentuk Wangsa Keempat Belas. Besar kemungkinan perpecahan wilayah Mesir terjadi tak lama sesudah berkuasanya raja-raja perkasa dari Wangsa Ketiga Belas, Neferhotep I dan Sobekhotep IV sekitar 1720 SM. Jika Wangsa Keempat Belas berkebangsaan Kanaan, maka bangsa Hyksos pertama kali muncul dalam sejarah Mesir sekitar 1650 SM tatkala mereka mengambil alih kendali atas kota Avaris dan bergegas ke selatan menuju Memphis, dan dengan demikian mengakhiri masa kekuasaan Wangsa Ketiga Belas dan Wangsa Keempat Belas. Rangkuman riwayat-riwayat tradisional mengenai "invasi" bangsa Hyksos atas Mesir terdapat dalam Aegyptiaca karya Manetho, yang menulis bahwa pada masa itu bangsa Hyksos menguasai Mesir di bawah pimpinan Salitis, pendiri Wangsa Kelima Belas. Meskipun demikian, sekarang ini telah muncul teori baru yang mendapat banyak dukungan bahwa sesungguhnya yang terjadi hanyalah migrasi sederhana yang melibatkan sedikit atau tanpa kekerasan sama sekali. Menurut teori ini, para penguasa Mesir dari Wangsa Ketiga Belas dan Wangsa Keempat Belas tidak sanggup membendung masuknya para pendatang dari kawasan Levant setelah meninggalkan kerajaan-kerajaan mereka yang tengah dibelit berbagai permasalahan internal yang kemungkinan besar juga meliputi bencana kelaparan dan wabah penyakit.'
            },
            {
                name:'Zaman Kerajaan Baru',
                lesson1: 'Besar kemungkinan sebagai akibat dari penjajahan bangsa Hyksos selama Periode Menengah Kedua, pada Zaman Kerajaan Baru bangsa Mesir berupaya membangun penghalang di antara Levant dan Mesir, serta berhasil memperluas wilayah kekuasaannya ke selatan sampai jauh ke Nubia dan menguasai wilayah-wilayah luas di Timur Dekat. Bala tentara Mesir bertempur melawan bala tentara Het untuk merebut kendali atas wilayah Suriah sekarang ini.',
                lesson2: 'Pada zaman inilah Mesir mengalami kemakmuran dan kekuasaaan yang besar. Beberapa firaun yang paling penting dan ternama memerintah pada zaman ini. Hatshepsut adalah salah seorang di antara firaun-firaun tersebut. Hatshepsut sendiri merupakan suatu keluarbiasaan karena ia adalah seorang firaun perempuan, suatu peristiwa langka dalam sejarah Mesir. Ia adalah seorang pemimpin yang penuh ambisi dan cakap, yang menambah jangkauan perniagaan Mesir sampai ke Somalia di selatan dan Mediterania di utara. Ia memerintah selama dua puluh tahun dengan jalan memadukan propaganda luas tersebar dan kepiawaian dalam berpolitik. Firaun sepemerintahan sekaligus penggantinya Thutmose III (" Napoleon dari Mesir") memperbesar angkatan perang Mesir dan memanfaatkannya dengan hasil yang besar. Menjelang akhir masa pemerintahannya ia memerintahkan penghapusan nama Hatshepsut dari monumen-monumen yang dibangun firaun perempuan itu. Ia berperang melawan orang-orang Asia dan merupakan Firaun Mesir yang paling sukses. Amenhotep III mendirikan kuil Karnak secara besar-besaran, termasuk Kuil Luxor, yang terdiri atas dua Pilon, sebuah selasar bertiang dua baris di belakang pintu masuk kuil baru itu, dan sebuah kuil baru untuk Dewi Maat.'
            },
            {
                name: 'Zaman Antara Ketiga',
                lesson1: 'Setelah Ramesses XI mangkat, penggantinya Smendes memerintah dari kota Tanis di utara, sementara Imam Besar Dewa Amun di Thebes secara efektif berkuasa di selatan meskipun masih mengakui Smendes sebagai Raja.[26] Pada kenyataannya, terbelahnya kekuasaan ini tidaklah seberapa penting karena baik imam besar maupun firaun berasal dari satu keluarga yang sama. Piankh, memegang kendali atas Mesir Hulu, memerintah dari Thebes, dengan batas utara daerah kekuasaan yang berakhir di Al-Hibah. (Imam Besar Herihor meninggal dunia mendahului Ramesses XI, namun semasa hidupnya ia adalah seorang pemimpin yang berkuasa penuh dalam segala hal kecuali dalam hal kemandirian, menjelang akhir masa pemerintahan raja.) Negeri Mesir sekali lagi terbagi dua dengan para imam yang memerintah dari Thebes dan para firaun yang memerintah dari Tanis. Tidak ada yang luar biasa dari masa pemerintahan mereka, dan mereka pun dilengserkan tanpa banyak gejolak oleh para raja berkebangsaan Libya dari Wangsa Kedua Puluh Dua.',
                lesson2: 'Hubungan Mesir dengan Libya sudah lama terjalin, dan raja pertama wangsa baru ini, Shoshenq I, adalah orang Libya dari puak Meshwesh, yang mengabdi sebagai panglima bala tentara Mesir pada masa pemerintahan pemimpin terakhir dari Wangsa Kedua Puluh Satu, Psusennes II. Ia mempersatukan Mesir, mengendalikan para rohaniwan Dewa Amun dengan cara menjadikan puteranya sendiri sebagai pemangku jabatan Imam Besar Dewa Amun yang sebelumnya diwariskan turun-temurun. Sedikit dan tidak lengkapnya keterangan yang terdapat dalam peninggalan-peninggalan tertulis dari zaman ini menimbulkan dugaan bahwa zaman ini dipenuhi pergolakan. Tampaknya ada banyak kelompok pembangkang yang akhirnya menciptakan Wangsa Kedua Puluh Tiga. Wangsa baru ini memerintah pada waktu yang bersamaan dengan masa pemerintahan raja-raja terakhir Wangsa Kedua Puluh Dua.'
            },
            {
                name : 'Zaman Akhir',
                lesson1: 'Sejak 671 SM sampai seterusnya, Memphis dan kawasan muara menjadi sasaran penyerbuan-penyerbuan bangsa Asyur yang akhirnya menghalau bangsa Nubia dan menyerahkan kekuasaan kepada raja-raja sekutu mereka dari Wangsa Kedua Puluh Enam. Psamtik I adalah orang pertama yang diakui sebagai raja atas seluruh tanah Mesir, dan ia berhasil menjadikan Mesir semakin kokoh selama 54 tahun memerintah dari ibu kota baru di Sais. Empat raja Sais berturut-turut berhasil menuntun Mesir dalam damai mulai 610–526 SM, dengan memanfaatkan tenaga prajurit-prajurit upahan dari Yunani untuk menghalangi bangsa Babilonia memasuki wilayah Mesir.',
                lesson2: 'Menjelang penghujung zaman ini tumbuh suatu kekuatan baru di Timur Dekat yaktu Persia. Firaun Psamtik III harus menghadapi kekuatan Persia di Pelusium; ia dikalahkan, dan meskipun sempat melarikan diri ke Memphis, dalam waktu yang singkat ia tertangkap dan kemudian dihukum mati.'
            }
        ]
        return(
            <div className="Main">
                <div className="top">
                    <div className="container">
                        <h1>Egyptian History</h1>
                        <p>Sejarah Mesir Kuno meliputi kurun waktu yang bermula sejak permukiman-permukiman Zaman Prawangsa didirikan di kawasan utara Lembah Sungai Nil dan berakhir dengan ditaklukkannya Mesir oleh bangsa Romawi pada tahun 30 SM. Zaman pemerintahan para firaun diperkirakan bermula sekitar tahun 3200 SM, dengan dipersatukannya Mesir Hulu dan Mesir Hilir, sampai tanah Mesir ditaklukkan bangsa Makedonia pada tahun 332 SM.</p>
                    </div>
                </div>
                <div className="content">
                    <div className="container">
                        <h1>Tentang Mesir Kuno</h1>
                        {lessonList.map((lessonItem)=>{
                            return(
                                <Lesson
                                name={lessonItem.name}
                                lesson1 ={lessonItem.lesson1}
                                lesson2={lessonItem.lesson2}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;