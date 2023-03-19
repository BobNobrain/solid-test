import { Component } from 'solid-js';
import { container } from '../../../ui-kit/atoms/container/container';
import { RadioGroup, RadioGroupOption } from '../../../ui-kit/components/inputs/RadioGroup/RadioGroup';
import { Color } from '../../../ui-kit/types';
import { StoryControlDescription, StoryControlProps } from './types';

interface ColorRadioControlOptions {
    defaultValue?: Color;
}
const colors: Color[] = ['default', 'primary', 'info', 'success', 'warn', 'error'];
const colorOptions: RadioGroupOption<Color>[] = colors.map((color) => ({
    value: color,
    color,
}));

export function colorRadioControl({
    defaultValue = 'default',
}: ColorRadioControlOptions = {}): StoryControlDescription<Color> {
    const ColorRadioControl: Component<StoryControlProps<Color>> = (props) => {
        return (
            <div classList={container({ size: 'content', gap: 'm' })}>
                <RadioGroup
                    value={props.value}
                    onUpdate={props.onUpdate}
                    options={colorOptions}
                />
            </div>
        );
    };

    return {
        component: ColorRadioControl,
        defaultValue,
    };
}
