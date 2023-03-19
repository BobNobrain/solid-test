import {
    Component,
    createMemo,
    JSX,
    Show,
} from 'solid-js';
import { text } from '../../../atoms/text/text';
import { Color, Size } from '../../../types';
import styles from './Radiobox.css';

export interface RadioboxProps {
    value: boolean;
    onChecked: () => void;

    color?: Color;
    size?: Size;

    disabled?: boolean;
    name?: string;

    label?: JSX.Element;
}

export const Radiobox: Component<RadioboxProps> = (props) => {
    const boxClassList = createMemo(() => ({
        [styles[`color-${props.color ?? 'default'}`]]: true,
        [styles[`size-${props.size ?? 'm'}`]]: true,
        [styles.on]: props.value === true,
        [styles.off]: props.value === false,
    }));

    const wrapperClassList = createMemo(() => ({
        [styles.disabled]: props.disabled,
    }));

    const checked = () => props.value ?? false;

    let ref!: HTMLInputElement;

    return (
        <label
            class={styles.wrapper}
            classList={wrapperClassList()}
        >
            <input
                ref={ref}
                type="radio"
                class={styles.radiobox}
                checked={checked()}
                disabled={props.disabled}
                name={props.name}
                onChange={() => {
                    if (props.disabled) {
                        return;
                    }
                    props.onChecked();
                }}
            />
            <div
                class={styles.box}
                classList={boxClassList()}
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
