import { Component, createMemo } from 'solid-js';
import { Color, Size } from '../../../types';
import styles from './Radiobox.css';

export interface RadioboxProps {
    value: boolean;
    onChecked: () => void;

    color?: Color;
    size?: Size;

    disabled?: boolean;
    name?: string;
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
        <div
            class={styles.wrapper}
            classList={wrapperClassList()}
            onClick={() => {
                if (props.disabled) {
                    return;
                }
                ref.focus(); // this will also enable keyboard interactions
                props.onChecked();
            }}
        >
            <input
                ref={ref}
                type="radio"
                class={styles.radiobox}
                checked={checked()}
                disabled={props.disabled}
                name={props.name}
            />
            <div
                class={styles.box}
                classList={boxClassList()}
            />
        </div>
    );
};
