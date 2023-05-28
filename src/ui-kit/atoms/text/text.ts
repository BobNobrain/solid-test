import {
    Color,
    FontStyle,
    FontWeight,
} from '../../types';
import type { Size } from '../../utils/Size';
import { Atom } from '../types';
import styles from './text.css';

interface TextState {
    color?: Color;
    size?: Size;
    weight?: FontWeight;
    style?: FontStyle;
    dim?: boolean;
}

export const text: Atom<TextState> = (state) => {
    return {
        [styles.text]: true,
        [styles[`color-${state.color}`]]: Boolean(state.color),
        [styles[`size-${state.size}`]]: Boolean(state.size),
        [styles[`weight-${state.weight}`]]: Boolean(state.weight),
        [styles[`style-${state.style}`]]: Boolean(state.style),
        [styles[`dim-${state.dim}`]]: state.dim !== undefined,
    };
};
