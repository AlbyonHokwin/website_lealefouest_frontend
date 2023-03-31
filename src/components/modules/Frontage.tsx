import React from 'react';
import styles from '@/styles/Frontage.module.css';
import Link from 'next/link';

import CustomImage from '../elements/CustomImage';
import { PortableText } from '@portabletext/react';

import type { FrontageProps } from '@/types/FrontageProps';

type Props = FrontageProps & {
  firstname: string;
  lastname: string;
}

export default function Frontage(props: Props) {
  const { introductory, picture, buttonLabel, firstname, lastname } = props;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

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

          <div className={styles.nameAndContact}>
            <h2 className={styles.name}>
              <div className={styles.whiteLine}>
                <div className={styles.verticalLine}></div>
              </div>
              {firstname} {lastname}
            </h2>
            <Link href='#contact' onClick={handleClick} className={styles.contactMe}>{buttonLabel}</Link>
          </div>

        </div>

        <div className={styles.right}>
          <div className={styles.image}>
            <CustomImage image={picture} objectFit='cover' maxSize={1000} priority />
          </div>
        </div>
      </div>
    </div>
  );
}
