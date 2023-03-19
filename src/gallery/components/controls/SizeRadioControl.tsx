import { Component } from 'solid-js';
import { container } from '../../../ui-kit/atoms/container/container';
import { RadioGroup, RadioGroupOption } from '../../../ui-kit/components/inputs/RadioGroup/RadioGroup';
import { Size } from '../../../ui-kit/types';
import { StoryControlDescription, StoryControlProps } from './types';

interface SizeRadioControlOptions {
    defaultValue?: Size;
}
const sizes: Size[] = ['xs', 's', 'm', 'l', 'xl'];
const sizesOptions: RadioGroupOption<Size>[] = sizes.map((size) => ({
    label: size.toLocaleUpperCase(),
    value: size,
}));

export function sizeRadioControl({
    defaultValue = 'm',
}: SizeRadioControlOptions = {}): StoryControlDescription<Size> {
    const SizeRadioControl: Component<StoryControlProps<Size>> = (props) => {
        return (
            <div classList={container({ size: 'content', gap: 'm' })}>
                <RadioGroup
                    value={props.value}
                    onUpdate={props.onUpdate}
                    options={sizesOptions}
                    color="primary"
                />
            </div>
        );
    };

    return {
        component: SizeRadioControl,
        defaultValue,
    };
}
