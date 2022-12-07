export const isEmail = (string) => {
  return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(string);
};

export const getVideoYoutubeEmbedUrl = (url) => {
  if (!url) return '';

  const path = url.split('?')[1];

  const idQuery = path.split('&').find((q) => q.indexOf('v=') === 0);

  return 'https://www.youtube.com/embed/' + idQuery.slice(2);
};

export const getVideoYoutubeThumbnailImage = (url) => {
  if (!url) return '';

  const path = url.split('?')[1];

  const idQuery = path.split('&').find((q) => q.indexOf('v=') === 0);

  return 'https://img.youtube.com/vi/' + idQuery.slice(2) + '/hqdefault.jpg';
};
