import React from 'react';
import { Link } from 'gatsby';

import Container from './container';
import * as styles from './footer.module.css';

const Footer = function () {
  return (
    <Container as="footer">
      <div className={styles.container}>
        Built with <Link href="https://contentful.com/">Contentful</Link> and{' '}
        <Link href="https://gatsbyjs.com">Gatsby</Link> &middot;{' '}
        <Link href="https://github.com/contentful/starter-gatsby-blog">
          Source
        </Link>
      </div>
    </Container>
  );
};

export default Footer;
