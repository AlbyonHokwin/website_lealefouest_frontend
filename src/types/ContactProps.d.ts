import type { Component } from './Component';
import type { Comment } from './Comment';
import type { SanityImage } from './SanityImage';

export type ContactProps = {
    component: Component;
    headTitle: string;
    picture: SanityImage;
    buttonText: string;
    comments?: Comment[];
}
