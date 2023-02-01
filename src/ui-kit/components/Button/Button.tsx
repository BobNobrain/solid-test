import { Component, ParentProps } from 'solid-js';
import styles from './button.css';

export interface ButtonProps {
    onClick?: (ev: MouseEvent) => void;
}

export const Button: Component<ParentProps<ButtonProps>> = (props) => {
    return (
        <button
            class={styles.button}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};
