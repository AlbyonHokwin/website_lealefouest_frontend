import type { Component } from './Component';
import type { SanityIcon } from './SanityIcon';

export type Pricing = {
    component: Component;
    headTitle: string;
    price: number;
    motivation: string;
    icon: SanityIcon;
    reasons: string[];
}
