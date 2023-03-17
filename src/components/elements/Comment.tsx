import React from 'react';
import styles from '@/styles/Comment.module.css';

import Icon from './Icon';

import type { Comment } from '@/types/Comment';

type Props = Comment;

export default function Comment({ author, text, quoteIcon }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon icon={quoteIcon} objectFit='contain' useAccentColor />
      </div>

      <p className={styles.text}>
        {text}
      </p>

      <p className={styles.author}>
        {author}
      </p>
    </div>
  );
}
