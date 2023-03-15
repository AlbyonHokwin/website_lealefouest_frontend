import type { SanityImageObject } from '@sanity/image-url/lib/types/types';

export type SanityIcon = {
    name: string;
    icon: SanityImageObject;
    alt: string;
    need: boolean;
}