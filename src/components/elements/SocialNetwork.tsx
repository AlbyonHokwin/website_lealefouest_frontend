import React from 'react';
import styles from '@/styles/SocialNetwork.module.css';

import Icon from './Icon';

import type { SocialNetwork } from '@/types/OtherMediasProps';

type Props = SocialNetwork

export default function SocialNetwork({ name, icon, url }: Props) {
  return (
    <a href={url} className={styles.container}>
      <Icon icon={icon} objectFit='contain' filter='var(--color-light-filter)' />
    </a>
  );
}
