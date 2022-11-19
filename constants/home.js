import kbmPutra1Pic from '../public/images/kbm-putra-1.jpg';
import kbmPutra2Pic from '../public/images/kbm-putra-2.jpg';
import kbmPutra3Pic from '../public/images/kbm-putra-3.jpg';
import asramaPutriPic from '../public/images/asrama-santri-putri.jpg';
import gedungKelasPutraPic from '../public/images/gedung-kelas-putra.jpg';
import masjidPic from '../public/images/masjid.jpg';

export const galleryCardList = [
  {
    title: 'Tentang Pondok Pesantren',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: kbmPutra1Pic,
    to: '/'
  },
  {
    title: 'Kegiatan Siswa',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: kbmPutra2Pic,
    to: '/'
  },
  {
    title: 'Akademik',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: kbmPutra3Pic,
    to: '/'
  },
];

export const fasilitasList = [
  {
    image: {
      src: asramaPutriPic,
      alt: 'Asrama Santri Putri Pondok Pesantren AlHadi'
    },
    desc: 'Asrama Santri Putri'
  },
  {
    image: {
      src: gedungKelasPutraPic,
      alt: 'Gedung Kelas Putra Pondok Pesantren AlHadi'
    },
    desc: 'Gedung Kelas Putra'
  },
  {
    image: {
      src: masjidPic,
      alt: 'Masjid Pondok Pesantren AlHadi'
    },
    desc: 'Masjid'
  },
];