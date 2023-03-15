import React from 'react'
import styles from '@/styles/Bonus.module.css';

import type { RichText } from '@/types/RichText';

type Props = {
  bonus: RichText;
};

export default function Bonus({ bonus }: Props) {
  return (
    <div className={styles.container}>
    </div>
  )
}
