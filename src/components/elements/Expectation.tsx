import React from 'react'
import styles from '@/styles/Expectation.module.css';

import Icon from './Icon';

import type { Expectation } from '@/types/ExpectationsProps';

type Props = Expectation;

export default function Expectation({ text, icon }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon icon={icon} objectFit='contain' />
      </div>

      <p className={styles.text}>
        {text}
      </p>
    </div>
  )
}
