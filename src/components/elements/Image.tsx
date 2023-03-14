import React from 'react';
import styles from '@/styles/Image.module.css'
import NextImage from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '@/pages/api/sanityClient';

import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import type { SanityImage } from '@/types/SanityImage';

type Props = {
    image: SanityImage;
    objectFit: React.CSSProperties['objectFit'];
    maxSize: number;
    priority?: boolean;
}

export default function Image({ image, objectFit, maxSize, priority = false }: Props) {
    const builder: ImageUrlBuilder = imageUrlBuilder(sanityClient);

    const src: string = builder.image(image.image)
        .auto('format')
        .width(maxSize)
        .height(maxSize)
        .url();

    return (
        <div className={styles.container}>
            <NextImage
                src={src}
                alt={image.alt}
                style={{ objectFit }}
                sizes="(max-width: 800px) 100vw, 2000px"
                fill
                priority={priority}
            />
        </div>
    );
}
