import Head from 'next/head';
import Link from 'next/link';

import { monthOptions, weekdays } from 'constants/general';
import parse from 'html-react-parser';

import Img from 'components/base/Img';

import { getNews, getNewsDetail } from 'client/news';

import PageLayout from 'shared/layouts/PageLayout';
import dayjs from 'shared/utils/datetime';
import {
  getVideoYoutubeEmbedUrl,
  getVideoYoutubeThumbnailImage,
  isYoutubeUrl,
} from 'shared/utils/string';

import styles from 'styles/Berita.module.scss';

const BeritaDetail = ({ news, recentNews }) => {
  const newsCreated = dayjs(news.createdAt);

  return (
    <div>
      <Head>
        <title>{news.title} | Berita Ponpes Al Hadi</title>
        <meta
          name="description"
          content={`Berita ${news.title}. Pondok Pesantren Al Hadi Sungkai Langka.`}
        />
      </Head>
      <PageLayout withFooter>
        <h1 className={styles.newsTitle}>{news.title}</h1>
        <div className={styles.newsContainer}>
          <div className={styles.newsWrapper}>
            <div className={styles.newsHeading}>
              {isYoutubeUrl(news.banner) ? (
                <iframe
                  className={styles.iframe}
                  src={news.banner}
                  srcDoc={
                    // eslint-disable-next-line quotes, max-len
                    `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${getVideoYoutubeEmbedUrl(
                      news.banner,
                    )}/?autoplay=1><img src=${getVideoYoutubeThumbnailImage(
                      news.banner,
                      // eslint-disable-next-line max-len
                    )} alt='Kata Babe Haikal Hasan Tentang Pondok Pesantren Al-Hadi'><span>▶</span></a>`
                  }
                  title={news.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder={0}
                  allowFullScreen
                />
              ) : (
                <Img
                  layout="fill"
                  objectFit="contain"
                  src={news.banner}
                  alt={news.title}
                  size="(max-width: 960px) 100vw, 80vw"
                  priority
                  quality={100}
                />
              )}
            </div>
            <h3>{news.title}</h3>
            <div className={styles.newsInfo}>
              <span>
                Ditulis oleh <strong>Admin</strong>
              </span>
              <span>{`${weekdays[newsCreated.day()]}, ${newsCreated.date()} ${
                monthOptions[newsCreated.month()].label
              } ${newsCreated.year()}`}</span>
            </div>
            <div className={styles.newsContent}>{parse(news.content)}</div>
          </div>
          <aside className={styles.recentNewsWrapper}>
            <h3>Berita Terbaru</h3>
            <div className={styles.recentNews}>
              {recentNews.map(({ title }) => (
                <Link href={`/berita/${title}`} key={title}>
                  <a className={title === news.title ? styles.currentNews : ''}>{title}</a>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </PageLayout>
    </div>
  );
};

export const getStaticPaths = async () => {
  const { data } = await getNews({ isTitleOnly: true, limit: 1000 });

  const paths = data.map((post) => ({
    params: { slug: post.title },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { data: news } = await getNewsDetail(params.slug);
  const { data: recentNews } = await getNews({ isTitleOnly: true, limit: 5 });

  return { props: { news, recentNews } };
};

export default BeritaDetail;
