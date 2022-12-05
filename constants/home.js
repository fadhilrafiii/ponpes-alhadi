import asramaPutriPic from '../public/images/asrama-santri-putri.jpg';
import berita1Pic from '../public/images/berita1.jpg';
import berita2Pic from '../public/images/berita2.jpg';
import berita3Pic from '../public/images/berita3.jpg';
import berita4Pic from '../public/images/berita4.jpg';
import gedungKelasPutraPic from '../public/images/gedung-kelas-putra.jpg';
import masjidPic from '../public/images/masjid.jpg';

export const dummyNewsList = [
  {
    title: 'Ponpes Al Hadi mengucapkan Selamat Hari Guru Nasional 2022',
    image: berita1Pic,
  },
  {
    title: 'Pondok Pesantren Al Hadi hafal 30 Juz',
    image: berita2Pic,
  },
  {
    title: 'Kajian Bersama Syeikh Abdul Basith Musfi di Pondok Pesantren Al Hadi Sungai Langka',
    image: berita3Pic,
  },
  {
    title: 'Pondok Pesantren Al Hadi & Syekh Muhammad Jaber Mencetak Generasi Al Quran dan Sunnah',
    image: berita4Pic,
  },
];

export const fasilitasList = [
  {
    image: {
      src: asramaPutriPic,
      alt: 'Asrama Santri Putri Pondok Pesantren AlHadi',
    },
    desc: 'Asrama Santri Putri',
  },
  {
    image: {
      src: gedungKelasPutraPic,
      alt: 'Gedung Kelas Putra Pondok Pesantren AlHadi',
    },
    desc: 'Gedung Kelas Putra',
  },
  {
    image: {
      src: masjidPic,
      alt: 'Masjid Pondok Pesantren AlHadi',
    },
    desc: 'Masjid',
  },
];
