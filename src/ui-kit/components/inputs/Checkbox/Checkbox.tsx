import {
    Component,
    createMemo,
    JSX,
    Show,
} from 'solid-js';
import { text } from '../../../atoms/text/text';
import { Color, Size } from '../../../types';
import { Check } from './Check/Check';
import styles from './Checkbox.css';

export interface CheckboxProps {
    value: boolean | undefined;
    onUpdate: (newValue: boolean) => void;

    color?: Color;
    size?: Size;

    disabled?: boolean;
    name?: string;

    label?: JSX.Element;
}

export const Checkbox: Component<CheckboxProps> = (props) => {
    const wrapperClassList = createMemo(() => ({
        [styles.disabled]: props.disabled,
    }));

    const checked = () => props.value ?? false;
    const indeterminate = () => props.value === undefined;

    let ref!: HTMLInputElement;

    return (
        <label
            class={styles.wrapper}
            classList={wrapperClassList()}
        >
            <input
                ref={ref}
                type="checkbox"
                class={styles.checkbox}
                checked={checked()}
                // @ts-ignore
                indeterminate={indeterminate()}
                disabled={props.disabled}
                name={props.name}
                onChange={() => {
                    props.onUpdate(!props.value);
                }}
            />
            <Check
                checked={props.value}
                color={props.color}
                size={props.size}
                disabled={props.disabled}
            />
            <Show
                when={typeof props.label === 'string'}
                fallback={props.label}
            >
                <span
                    class={styles.label}
                    classList={text({ size: props.size })}
                >
                    {props.label}
                </span>
            </Show>
        </label>
    );
};
