import { Color } from '../../types';
import type { Size } from '../../utils/Size';
import { Atom } from '../types';
import styles from './button.css';

export type ButtonMode = 'solid' | 'pale' | 'text';

export interface ButtonState {
    color?: Color;
    mode?: ButtonMode;
    outerSize?: Size;
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
        [styles[`size-${state.outerSize ?? 'm'}`]]: true,
        [styles.disabled]: state.disabled,
        [styles.square]: state.square,
        [styles.loading]: state.loading,
    };
};
