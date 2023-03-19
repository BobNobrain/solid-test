import { Component } from 'solid-js';
import { TextInput } from '../../../ui-kit/components/inputs/TextInput/TextInput';
import { StoryControlDescription, StoryControlProps } from './types';

interface TextControlOptions {
    label: string;
    defaultValue?: string;
    placeholder?: string;
}

export function textControl({
    defaultValue = '',
    label,
    placeholder,
}: TextControlOptions): StoryControlDescription<string> {
    const TextControl: Component<StoryControlProps<string>> = (props) => {
        return (
            <TextInput
                value={props.value}
                onUpdate={props.onUpdate}

                label={label}
                placeholder={placeholder}
            />
        );
    };

    return {
        component: TextControl,
        defaultValue,
    };
}
