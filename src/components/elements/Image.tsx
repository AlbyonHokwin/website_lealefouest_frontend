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
    let maxWidth = maxSize;
    let maxHeight = maxSize;

    if (image.aspect) {
        image.aspect > 1 ?
            maxHeight = Math.floor(maxSize / image.aspect) :
            maxWidth = Math.floor(maxSize * image.aspect);
    }

    const src: string = builder.image(image.image)
        .auto('format')
        .width(maxWidth)
        .height(maxHeight)
        .url();

    return (
        <div className={styles.container}>
            <NextImage
                src={src}
                alt={image.alt}
                style={{ objectFit, padding: objectFit === 'cover' ? 0 : '5dvmin' }}
                sizes="(max-width: 800px) 100vw, 2000px"
                fill
                priority={priority}
            />
        </div>
    );
}
