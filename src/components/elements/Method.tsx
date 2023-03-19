import React from 'react';
import styles from '@/styles/Method.module.css';

import CustomImage from './CustomImage';

import type { Method } from '@/types/MethodologiesProps';

type Props = Method;

export default function Method({ name, picture }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.picture}>
        <CustomImage
          image={picture}
          objectFit='cover'
          maxSize={400}
        />
      </div>

      <p className={styles.name}>
        {name}
      </p>
    </div>
  )
}
