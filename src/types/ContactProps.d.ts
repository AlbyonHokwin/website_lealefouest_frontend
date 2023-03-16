import type { Component } from './Component';
import type { Comment } from './Comment';

export type ContactProps = {
    component: Component;
    headTitle: string;
    buttonText: string;
    comments?: Comment[];
}
