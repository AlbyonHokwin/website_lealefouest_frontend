import React, { PropsWithChildren } from 'react';
import styles from '@/styles/WhiteBand.module.css';

type Props = PropsWithChildren & {
  headTitle?: string;
};

export default function WhiteBand(props: Props) {
  return (
    <div className={styles.container}>

      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{props.headTitle}</h3>
      </div>

      <div className={styles.whiteBand}>
        <div className={styles.topAccentBar} />
        <div className={styles.bottomAccentBar} />

        <div className={styles.content}>
          {props.children}
        </div>
      </div>

    </div>
  );
}
