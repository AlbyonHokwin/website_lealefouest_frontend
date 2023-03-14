import type { SanityImageObject } from '@sanity/image-url/lib/types/types';

export type SanityIcon = {
    name: string;
    image: SanityImageObject;
    alt: string;
    need: boolean;
}