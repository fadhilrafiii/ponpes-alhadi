import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { Grid } from '@mui/material';

import NavbarProvider from 'layouts/NavbarProvider';

import ArticleBox from 'components/ArticleBox';
import Dropdown from 'components/base/Dropdown';
import Img from 'components/base/Img';
import MyButton from 'components/base/MyButton';
import Carousel from 'components/Carousel';
import Footer from 'components/Footer';
import ReservationForm from 'components/ReservationForm';

import {
  BOTTOM_MENU_DROPDOWN,
  CAROUSEL_IMAGES,
  HOME_BOTTOM_ARTICLES,
  HOME_MIDDLE_CAROUSEL_ARTICLE_IMAGES,
  HOME_TOP_ARTICLES,
} from '../constants/pages/home';

import classes from '../styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Your Hotel Choice | Hotel Name</title>
        <meta
          name="description"
          content="Book at Hotelname.com to get the guaranteed best rates for Hotel Name®. See How Rewarding The World Really Is. Earn Nights, Experiences and More. Outstanding Services."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarProvider>
        <div className={classes.carouselContainer}>
          <Carousel className={classes.carouselDimension}>
            {CAROUSEL_IMAGES.map((image) => (
              <div key={image.url} className={classes.carouselDimension}>
                <Img
                  src={`/images/${image.url}`}
                  alt={image.name}
                  sizes="(max-width: 560px) 40vw, (max-width: 1200px) 62.5vw, 100vw"
                />
                <figcaption className={classes.imageCaption}>{image.name}</figcaption>
              </div>
            ))}
          </Carousel>
        </div>
        <main className={classes.mainContent}>
          <ReservationForm />
          <div className={classes.articleWrapper}>
            <div className={classes.topArticle}>
              <Grid item container rowSpacing={5} columnSpacing={3}>
                {HOME_TOP_ARTICLES.map((article) => (
                  <Grid item key={article.title} xs={12} md={6}>
                    <ArticleBox
                      title={article.title}
                      body={article.body}
                      img={article.img}
                      path={article.path}
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
            <div className={classes.middleArticle}>
              <Grid container columnSpacing={2} flexDirection="column">
                <Grid container item xs={12} lg={3} flexDirection="column">
                  <Grid item className={classes.featured}>
                    FEATURED DESTINATION
                  </Grid>
                  <Grid item className={classes.middleArticleTitle}>
                    <h2>DISCOVER THE BEAUTY OF ASIA PACIFIC</h2>
                  </Grid>
                </Grid>
                <Grid item container className={classes.articleCarouselWrapper}>
                  <Carousel className={classes.articleCarousel}>
                    {HOME_MIDDLE_CAROUSEL_ARTICLE_IMAGES.map((image) => (
                      <div key={image.url} className={classes.articleCarousel}>
                        <Img
                          className={classes.articleCarouselImg}
                          src={image.url}
                          alt={image.name}
                          sizes="(max-width: 560px) 40vw, (max-width: 1200px) 62.5vw, 100vw"
                        />
                        {/* <figcaption className={classes.imageCaption}>{image.name}</figcaption> */}
                      </div>
                    ))}
                  </Carousel>
                </Grid>
                <Grid item container flexDirection="column" xs={12} lg={3}>
                  <Grid item className={classes.middleArticleBody}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum dicta error
                      assumenda odit? Maiores, vel? Blanditiis libero illum voluptates pariatur
                      cupiditate cumque voluptatem iure deserunt similique.
                    </p>
                  </Grid>
                  <Grid item className={classes.middleArticleButton}>
                    <MyButton theme="secondary" buttonType="filled">
                      EXPLORE HOTELS &#38; RESORTS
                    </MyButton>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div className={classes.bottomArticle}>
              <Grid item container rowSpacing={5} columnSpacing={3}>
                {HOME_BOTTOM_ARTICLES.map((article) => (
                  <Grid item key={article.title} xs={12} md={6}>
                    <ArticleBox
                      title={article.title}
                      body={article.body}
                      img={article.img}
                      path={article.path}
                      redirectText="Discover More"
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
            <div className={classes.lastArticle}>
              <Grid
                container
                className={classes.lastArticleContent}
                spacing={6}
                alignItems="center"
              >
                <Grid item xs={12} md={8} lg={9}>
                  <Grid container>
                    <Img
                      className={classes.lastArticleImg}
                      src="/images/sail_away.jpeg"
                      alt="Sail Away Picture"
                      sizes="(max-width: 560px) 40vw, (max-width: 1200px) 62.5vw, 100vw"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <span className={classes.lastArticleSailAway}>SAIL AWAY</span>
                  <h2 className={classes.lastArticleTitle}>ICONIC YACHTING PLAYGROUNDS</h2>
                  <p className={classes.lastArticleDesc}>
                    Set sail on a journey of discovery with our Yacht Collection on all-inclusive
                    luxury voyages, embarking to exclusive destinations
                  </p>
                  <MyButton
                    theme="secondary"
                    buttonType="filled"
                    className={classes.lastArticleButton}
                  >
                    EXPLORE YACHT ITINERARIES
                  </MyButton>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className={classes.sectionDropdown}>
            {BOTTOM_MENU_DROPDOWN.map((menu, idx) => (
              <Dropdown
                key={idx}
                text={menu.title}
                className={classes.sectionDropdownItem}
                textClassName={classes.sectionDropdownText}
                containerClassName={classes.sectionDropdownContainer}
              >
                <div>
                  {menu.groups.map((subMenu, idx) => (
                    <React.Fragment key={idx}>
                      <h2>{subMenu.title}</h2>
                      {subMenu.subGroups.map((link, idx) => (
                        <React.Fragment key={idx}>
                          <Link href={link.path}>
                            <a>{link.title}</a>
                          </Link>
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </Dropdown>
            ))}
          </div>
        </main>
        <Footer />
      </NavbarProvider>
    </div>
  );
};

export default Home;
