import React from 'react'
import styles from '@/styles/Method.module.css';

import Image from './Image';

import type { Method } from '@/types/MethodologiesProps';

type Props = Method;

export default function Method({ name, picture }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.picture}>
        <Image
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
