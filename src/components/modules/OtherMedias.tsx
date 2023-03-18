import React from 'react';
import styles from '@/styles/OtherMedias.module.css';

import Media from '../elements/Media';

import type { OtherMediasProps } from '@/types/OtherMediasProps';

type Props = OtherMediasProps

export default function OtherMedias({ headTitle, arrowIcon, medias }: Props) {
  const mediasWithDivider = medias.map((media, i) => {
    const divider = i === medias.length - 1 ?
      null :
      <div className={styles.divider} />;
    return <React.Fragment key={i}>
      <Media {...media} arrowIcon={arrowIcon} />
      {/* {divider} */}
    </React.Fragment>
  })

  return (
    <div className={styles.container}>
      {/* <Media {...medias[0]} arrowIcon={arrowIcon} /> */}
      {mediasWithDivider}
    </div>
  );
}
