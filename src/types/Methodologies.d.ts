import type { Component } from './Component';
import type { SanityImage } from './SanityImage';

export type Method = {
    name: string;
    picture: SanityImage;
}

export type Methodologies = {
    component: Component;
    headTitle: string;
    methods: Method[];
}
