import React from 'react';
import styles from '@/styles/Media.module.css'

import SocialNetwork from './SocialNetwork';
import Image from './Image';
import Icon from './Icon';

import type { Media } from '@/types/OtherMediasProps';
import type { SanityIcon } from '@/types/SanityIcon';

type Props = Media & {
  arrowIcon: SanityIcon
};

export default function Media({ name, mainUrl, text, image, useArrow, socialNetworks, arrowIcon }: Props) {
  console.log(name, useArrow);

  return (
    <div className={styles.container}>
      {useArrow ?
        <div className={styles.containerWithArrow}>
          <a href={mainUrl} className={styles.imageContainer}>
            <Image image={image} objectFit='contain' maxSize={400} />
          </a>

          <div className={styles.textWithArrow}>
            <h4 className={styles.text}>
              {text}
            </h4>

            <div className={styles.arrowContainer}>
              <Icon icon={arrowIcon} objectFit='contain'
                filter='var(--color-light-filter)'
              />
            </div>
          </div>
        </div> :

        <div className={styles.containerWithoutArrow}>
          <h4 className={styles.text}>
            {text}
          </h4>

          <a href={mainUrl} className={styles.imageContainer}>
            <Image image={image} objectFit='contain' maxSize={400} />
          </a>
        </div>
      }

      <div className={styles.socialNetworks}>
        {socialNetworks && socialNetworks.map((socialNetwork, i) => <SocialNetwork key={i} {...socialNetwork} />)}
      </div>
    </div>
  );
}
