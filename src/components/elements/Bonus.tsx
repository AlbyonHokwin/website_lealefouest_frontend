import React from 'react'
import styles from '@/styles/Bonus.module.css';

import { PortableText } from '@portabletext/react';
import Icon from './Icon';

import type { RichText } from '@/types/RichText';
import type { SanityIcon } from '@/types/SanityIcon';

type Props = {
  bonus: RichText;
  icon: SanityIcon
};

export default function Bonus({ bonus, icon }: Props) {
  return (
    <li className={styles.container}>
      <div className={styles.icon}>
        <Icon
          icon={icon}
          objectFit='contain'
          useAccentColor
        />
      </div>

      <PortableText value={bonus.text} />
    </li>
  )
}
