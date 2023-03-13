import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type SanityImage = {
    name: string;
    image: SanityImageSource;
    alt: string;
    caption?: string;
}