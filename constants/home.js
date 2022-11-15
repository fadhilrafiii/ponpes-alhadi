import kbmPic from '../public/images/kbm.png';
import senamPic from '../public/images/senam.png';
import senam2Pic from '../public/images/senam-2.jpg';
import halamanKelasPic from '../public/images/halaman-kelas.jpg';
import aulaPutriPic from '../public/images/aula-santri-putri.jpg';
import masjidPic from '../public/images/masjid.jpg';
import juaraTahfidzPic from '../public/images/juara-tahfidz.png';

export const galleryCardList = [
  {
    title: 'Tentang Pondok Pesantren',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: kbmPic,
    to: '/'
  },
  {
    title: 'Kegiatan Siswa',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: senamPic,
    to: '/'
  },
  {
    title: 'Akademik',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: juaraTahfidzPic,
    to: '/'
  },
];

export const fasilitasList = [
  {
    image: {
      src: senam2Pic,
      alt: 'Senam Pondok Pesantren AlHadi'
    },
    desc: 'Arena Lapangan & Sarana Olahraga'
  },
  {
    image: {
      src: halamanKelasPic,
      alt: 'Halaman Pondok Pesantren AlHadi'
    },
    desc: 'Halaman'
  },
  {
    image: {
      src: aulaPutriPic,
      alt: 'Aula Santri Putri Pondok Pesantren AlHadi'
    },
    desc: 'Aula Santri Putri'
  },
  {
    image: {
      src: masjidPic,
      alt: 'Masjid Pondok Pesantren AlHadi'
    },
    desc: 'Masjid'
  },
];