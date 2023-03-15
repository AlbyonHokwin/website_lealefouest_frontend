import React from 'react';
import styles from '@/styles/Icon.module.css'
import NextImage from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '@/pages/api/sanityClient';

import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import type { SanityIcon } from '@/types/SanityIcon';

type Props = {
  icon: SanityIcon;
  objectFit: React.CSSProperties['objectFit'];
  useAccentColor?: boolean;
  priority?: boolean;
}

export default function Icon({ icon, objectFit, useAccentColor = false, priority = false }: Props) {
  const builder: ImageUrlBuilder = imageUrlBuilder(sanityClient);

  const src: string = builder.image(icon.icon)
    .url();

  return (
    <div className={styles.container}>
      <NextImage
        src={src}
        alt={icon.alt}
        style={{ objectFit, filter: useAccentColor ? 'var(--color-accent-filter)' : '' }}
        fill
        sizes='100px'
      />
    </div>
  );
}
