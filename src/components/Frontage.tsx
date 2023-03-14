import React from 'react';
import styles from '@/styles/Frontage.module.css';

import type { FrontageProps } from '@/types/FrontageProps';

export default function Frontage(props: FrontageProps) {
  const { introductory, picture} = props;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
      </div>
    </div>
  );
}
