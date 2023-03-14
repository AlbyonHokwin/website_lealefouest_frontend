import type { Component } from './Component';
import type { RichText } from './RichText';
import type { SanityImage } from './SanityImage';

export type FrontageProps = {
    component: Component;
    introductory: RichText;
    picture: SanityImage;
}