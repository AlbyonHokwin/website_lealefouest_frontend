import type { PortableTextBlock} from '@portabletext/types';
import type { Component } from './Component';
import type { SanityImage } from './SanityImage';

export type Home = {
    component: Component;
    introductory: PortableTextBlock[];
    picture: SanityImage;
}