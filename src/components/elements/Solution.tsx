import React from 'react'
import styles from '@/styles/Solution.module.css';

type Props = {
  solution: string;
};

export default function Solution({ solution }: Props) {
  return (
    <li className={styles.container}>
      {solution}
    </li>
  );
}
