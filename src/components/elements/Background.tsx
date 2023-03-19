import React from 'react';
import styles from '@/styles/Background.module.css'

import CustomImage from './CustomImage';
import { SanityImage } from '@/types/SanityImage';

type Props = {
    background: SanityImage;
}

export default function Background({ background }: Props) {
    return (
        <div className={styles.background}>
            <CustomImage image={background} objectFit='cover' maxSize={2000} priority />
        </div>
    );
}
