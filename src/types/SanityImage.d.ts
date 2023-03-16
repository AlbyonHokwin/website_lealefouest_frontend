import type { SanityImageObject } from '@sanity/image-url/lib/types/types';

export type SanityImage = {
    name: string;
    image: SanityImageObject;
    alt: string;
    caption?: string;
    aspect?: number;
}