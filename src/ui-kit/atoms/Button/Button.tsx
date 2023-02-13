import { Component, createMemo, ParentProps } from 'solid-js';
import { Size, Color } from '../../types';
import styles from './Button.css';

export type ButtonMode = 'solid' | 'pale' | 'text';

export interface ButtonProps {
    color?: Color;
    mode?: ButtonMode;
    size?: Size;
    disabled?: boolean;
    square?: boolean;

    onClick?: (ev: MouseEvent) => void;
}

export const Button: Component<ParentProps<ButtonProps>> = (props) => {
    const classList = createMemo(() => {
        const color = props.disabled ? 'disabled' : (props.color ?? 'default');

        return {
            [styles[`color-${color}`]]: true,
            [styles[`mode-${props.mode ?? 'solid'}`]]: true,
            [styles[`size-${props.size ?? 'm'}`]]: true,
            [styles.disabled]: props.disabled,
            [styles.square]: props.square,
        };
    });

    return (
        <button
            type="button"
            class={styles.button}
            classList={classList()}
            disabled={props.disabled}
            onClick={(ev) => {
                if (!props.disabled && props.onClick) {
                    props.onClick(ev);
                }
            }}
        >
            {props.children}
        </button>
    );
};
