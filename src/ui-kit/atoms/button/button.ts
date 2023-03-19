import { Color, Size } from '../../types';
import { Atom } from '../types';
import styles from './button.css';

export type ButtonMode = 'solid' | 'pale' | 'text';

export interface ButtonState {
    color?: Color;
    mode?: ButtonMode;
    size?: Size;
    disabled?: boolean;
    square?: boolean;
    loading?: boolean;
}

export const button: Atom<ButtonState> = (state) => {
    const color = state.disabled ? 'disabled' : (state.color ?? 'default');

    return {
        [styles.button]: true,
        [styles[`color-${color}`]]: true,
        [styles[`mode-${state.mode ?? 'solid'}`]]: true,
        [styles[`size-${state.size ?? 'm'}`]]: true,
        [styles.disabled]: state.disabled,
        [styles.square]: state.square,
        [styles.loading]: state.loading,
    };
};
