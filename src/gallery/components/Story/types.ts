import type { Component } from 'solid-js';
import { StoryControlDescription } from '../controls/types';

export type StoryControls<Controls> = {
    [key in keyof Controls]: StoryControlDescription<Controls[key]>;
}

export interface StoryDescription<Controls> {
    title: string;
    controls: StoryControls<Controls>;
    component: Component<{controls: Controls}>;
}
