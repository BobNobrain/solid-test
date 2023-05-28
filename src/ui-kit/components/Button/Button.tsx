import { createMemo, ParentComponent, Ref } from 'solid-js';
import { button, ButtonState } from '../../atoms/button/button';
import styles from './Button.css';

export type ButtonMode = 'solid' | 'pale' | 'text';

export interface ButtonProps extends ButtonState {
    ref?: Ref<HTMLButtonElement>;
    onClick?: (ev: MouseEvent) => void;
}

export const Button: ParentComponent<ButtonProps> = (props) => {
    const classList = createMemo(() => button(props));

    return (
        <button
            ref={props.ref}
            type="button"
            class={styles.button}
            classList={classList()}
            disabled={props.disabled}
            onClick={(ev) => {
                if (!props.disabled && !props.loading && props.onClick) {
                    props.onClick(ev);
                }
            }}
        >
            {props.children}
        </button>
    );
};
