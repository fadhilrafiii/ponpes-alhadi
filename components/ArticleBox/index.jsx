import Link from 'next/link';

import { Grid } from '@mui/material';

import PropTypes from 'prop-types';

import Img from 'components/base/Img';

import classes from './index.module.css';

const ArticleBox = ({ img, title, body, path, redirectText }) => {
  return (
    <article>
      <Grid
        container
        flexDirection="column"
        justifyContent="space-between"
        className={classes.articleBox}
      >
        <Grid item>
          <Grid container flexDirection="column">
            <Link href={path}>
              <Img
                className={classes.articleImg}
                src={img}
                alt={`${title}-image`}
                sizes="(max-width: 560px) 60vw, (max-width: 1200px) 80vw, 100vw"
              />
            </Link>
            <h4 className={classes.articleTitle}>{title}</h4>
            <p className={classes.articleDesc}>{body}</p>
          </Grid>
        </Grid>
        <Grid item className={classes.articleLink}>
          <Link href={path}>
            <a>{redirectText}</a>
          </Link>
        </Grid>
      </Grid>
    </article>
  );
};

ArticleBox.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  path: PropTypes.string,
  redirectText: PropTypes.string,
};

ArticleBox.defaultProps = {
  redirectText: 'Explore More',
};

export default ArticleBox;
