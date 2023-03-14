import type { Component } from './Component';
import type { SanityIcon } from './SanityIcon';

export type Expectation = {
    text: string;
    icon: SanityIcon;
}

export type ExpectationsProps = {
    component: Component;
    headTitle: string;
    expectations: Expectation[];
}
