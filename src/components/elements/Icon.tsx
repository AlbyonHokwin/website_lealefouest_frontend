import React, { useEffect, useState } from 'react';
import styles from '@/styles/Icon.module.css';
import NextImage from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '@/pages/api/sanityClient';

import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import type { SanityIcon } from '@/types/SanityIcon';

type Props = {
  icon: SanityIcon;
  objectFit: React.CSSProperties['objectFit'];
  useAccentColor?: boolean;
  filter?: React.CSSProperties['filter'];
  priority?: boolean;
}

export default function Icon({ icon, objectFit, useAccentColor = false, filter = '', priority = false }: Props) {
  const [style, setStyle] = useState<React.CSSProperties>({ objectFit });

  const builder: ImageUrlBuilder = imageUrlBuilder(sanityClient);

  const src: string = builder.image(icon.icon)
    .url();

  useEffect(() => {
    useAccentColor && setStyle({ ...style, filter: 'var(--color-accent-filter)' });
    filter && setStyle({ ...style, filter });
  }, [useAccentColor, filter]);

  return (
    <div className={styles.container}>
      <NextImage
        src={src}
        alt={icon.alt}
        style={style}
        fill
        sizes='100px'
      />
    </div>
  );
}
