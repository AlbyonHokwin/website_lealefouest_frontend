import React from 'react';
import styles from '@/styles/Cause.module.css';

import Icon from './Icon';

import type { Cause } from '@/types/WhyProps';

type Props = Cause;

export default function Cause({ name, icon }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon icon={icon} objectFit='contain' />
      </div>

      <p className={styles.name}>
        {name}
      </p>
    </div>
  )
}
