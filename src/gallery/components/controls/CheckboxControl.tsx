import { Component } from 'solid-js';
import { Checkbox } from '../../../ui-kit/components/inputs/Checkbox/Checkbox';
import { StoryControlDescription, StoryControlProps } from './types';

interface CheckboxControlOptions {
    label: string;
    defaultValue?: boolean;
}

export function checkboxControl({
    defaultValue = false,
    label,
}: CheckboxControlOptions): StoryControlDescription<boolean> {
    const BooleanControl: Component<StoryControlProps<boolean>> = (props) => {
        return (
            <Checkbox
                value={props.value}
                onUpdate={props.onUpdate}

                color="primary"
                label={label}
            />
        );
    };

    return {
        component: BooleanControl,
        defaultValue,
    };
}
