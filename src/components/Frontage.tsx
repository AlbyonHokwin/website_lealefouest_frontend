import React from 'react';
import styles from '@/styles/Frontage.module.css';

import Image from './elements/Image';
import { PortableText } from '@portabletext/react';

import type { FrontageProps } from '@/types/FrontageProps';

type Props = FrontageProps & {
  firstname: string;
  lastname: string;
}

export default function Frontage(props: Props) {
  const { introductory, picture, firstname, lastname } = props;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <PortableText
            value={introductory.text}
            components={{
              block: {
                normal: ({ children }) => <h1 className={styles.catchPhrase}>{children}</h1>
              },
              marks: {
                em: ({ children }) => <><em>{children}</em><br /></>
              }
            }}
          />


          <h2 className={styles.name}>
            <div className={styles.whiteLine}>
              <div className={styles.verticalLine}></div>
            </div>
            {firstname} {lastname}
          </h2>
        </div>

        <div className={styles.right}>
          <div className={styles.image}>
            <Image image={picture} objectFit='cover' maxSize={1000} priority />
          </div>
        </div>
      </div>
    </div>
  );
}
