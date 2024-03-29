import type { Component } from './Component';
import type { SanityIcon } from './SanityIcon';
import type { SanityImage } from './SanityImage';

export type SocialNetwork = {
    name: string;
    icon: SanityIcon;
    url?: string;
}

export type Media = {
    name: string;
    mainUrl: string;
    text: string;
    image: SanityImage;
    contained: boolean;
    useArrow: boolean;
    socialNetworks?: SocialNetwork[];
}

export type OtherMediasProps = {
    component: Component;
    headTitle: string;
    arrowIcon: SanityIcon;
    medias: Media[];
}
