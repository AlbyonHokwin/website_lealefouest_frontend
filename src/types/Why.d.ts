import type { PortableTextBlock} from '@portabletext/types';
import type { Component } from './Component';
import type { SanityIcon } from './SanityIcon';

export type Cause = {
    name: string;
    icon: SanityIcon;
}

export type Why = {
    component: Component;
    headTitle: string;
    shockPhrase: PortableTextBlock[];
    causes: Cause[];
}