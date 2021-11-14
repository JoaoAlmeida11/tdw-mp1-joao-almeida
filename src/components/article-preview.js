import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import DOMPurify from 'dompurify';

import Container from './container';
import Tags from './tags';
import * as styles from './article-preview.module.css';

const ArticlePreview = function ({ posts }) {
  if (!posts) return null;
  if (!Array.isArray(posts)) return null;
  const sanitizer = DOMPurify.sanitize;

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`} className={styles.link}>
              <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
              <h2 className={styles.title}>{post.title}</h2>
            </Link>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizer(post.description.childMarkdownRemark.html),
              }}
            />
            <div className={styles.meta}>
              <small className="meta">{post.publishDate}</small>
              <Tags tags={post.tags} />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ArticlePreview;
