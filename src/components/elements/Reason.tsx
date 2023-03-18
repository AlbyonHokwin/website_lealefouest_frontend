import React from 'react';
import styles from '@/styles/Reason.module.css';

type Props = {
  reason: string;
};

export default function Reason({ reason }: Props) {
  return (
    <li className={styles.container}>
      {reason}
    </li>
  );
}
