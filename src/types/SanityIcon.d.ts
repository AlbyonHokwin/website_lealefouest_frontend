import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type SanityIcon = {
    name: string;
    image: SanityImageSource;
    alt: string;
    need: boolean;
}