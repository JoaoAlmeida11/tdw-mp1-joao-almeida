import React from 'react';

import * as styles from './tags.module.css';

const Tags = function ({ tags }) {
  return (
    tags?.length > 0 && (
      <small className={styles.tags}>
        {tags.map(tag => (
          <div key={tag} className={styles.tag}>
            {tag}
          </div>
        ))}
      </small>
    )
  );
};

export default Tags;
