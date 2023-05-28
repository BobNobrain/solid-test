import { For, JSX } from 'solid-js';
import { Color } from '../../../types';
import { Radiobox } from '../Radiobox/Radiobox';
import { Size } from '../../../utils/Size';

export interface RadioGroupOption<T> {
    label?: JSX.Element;
    color?: Color;

    value: T;
}

export interface RadioGroupProps<T> {
    options: RadioGroupOption<T>[];

    value: T;
    onUpdate: (newValue: T) => void;

    size?: Size;
    color?: Color;
    disabled?: boolean;
}

export function RadioGroup<T>(props: RadioGroupProps<T>) {
    return (
        <For each={props.options}>
            {(option) => {
                return (
                    <Radiobox
                        value={option.value === props.value}
                        onChecked={() => {
                            props.onUpdate(option.value);
                        }}
                        color={option.color ?? props.color}
                        disabled={props.disabled}
                        size={props.size}
                        label={option.label}
                    />
                );
            }}
        </For>
    );
}
