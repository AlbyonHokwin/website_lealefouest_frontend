import type { Component } from './Component';
import type { SanityImage } from './SanityImage';
import type { SanityIcon } from './SanityIcon';
import type { RichText } from './RichText';

export type Solutions = {
    component: Component;
    headTitle: string;
    picture: SanityImage;
    solutions: string[];
    iconBonus: SanityIcon;
    bonuses: RichText[];
}
