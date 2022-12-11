import dayjs from 'shared/utils/datetime';

export const timeUnitOptions = [
  {
    label: 'Tahun',
    value: 'year',
  },
  {
    label: 'Bulan',
    value: 'month',
  },
];

export const yearOptions = Array(5)
  .fill(0)
  .map((val, idx) => {
    const value = dayjs().year() - idx;
    return {
      label: value.toString(),
      value: value.toString(),
    };
  });

export const monthOptions = [
  {
    label: 'Tidak diatur',
    value: '',
  },
  {
    label: 'Januari',
    value: '0',
  },
  {
    label: 'Februari',
    value: '1',
  },
  {
    label: 'Maret',
    value: '2',
  },
  {
    label: 'April',
    value: '3',
  },
  {
    label: 'Mei',
    value: '4',
  },
  {
    label: 'Juni',
    value: '5',
  },
  {
    label: 'Juli',
    value: '6',
  },
  {
    label: 'Agustus',
    value: '7',
  },
  {
    label: 'September',
    value: '8',
  },
  {
    label: 'Oktober',
    value: '9',
  },
  {
    label: 'November',
    value: '10',
  },
  {
    label: 'Desember',
    value: '11',
  },
];

export const inputTypeOptions = [
  {
    label: 'Video',
    value: 'video',
  },
  {
    label: 'Berita',
    value: 'berita',
  },
];

export const headingTypeNews = [
  {
    label: 'Video',
    value: 'video',
  },
  {
    label: 'Gambar',
    value: 'gambar',
  },
];

export const weekdays = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
