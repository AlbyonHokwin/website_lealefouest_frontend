import type { Component } from './Component';
import type { SanityIcon } from './SanityIcon';
import type { RichText } from './RichText';

export type Cause = {
    name: string;
    icon: SanityIcon;
}

export type Why = {
    component: Component;
    headTitle: string;
    shockPhrase: RichText;
    causes: Cause[];
}