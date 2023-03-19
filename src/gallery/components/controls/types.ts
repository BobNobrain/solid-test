import type { Component } from 'solid-js';

export interface StoryControlProps<T> {
    value: T;
    onUpdate: (newValue: T) => void;
}

export type StoryControlDescription<T> = {
    defaultValue: T;
    component: Component<StoryControlProps<T>>;
};
