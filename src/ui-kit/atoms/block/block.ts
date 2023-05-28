import {
    Color,
} from '../../types';
import type { Size } from '../../utils/Size';
import { Atom } from '../types';
import styles from './block.css';

interface BlockState {
    backgroundColor?: Color;
    backgroundOpacity?: '0' | '5' | '10' | '25' | '50' | '75';
    outerSize?: Size;
    square?: boolean;
    borderRadius?: Size;
}

export const block: Atom<BlockState> = (state) => {
    return {
        [styles.block]: true,
        [styles[`color-${state.backgroundColor}`]]: Boolean(state.backgroundColor),
        [styles[`size-${state.outerSize}`]]: Boolean(state.outerSize),
        [styles.square]: state.square,
        [styles[`br-${state.borderRadius}`]]: Boolean(state.borderRadius),
        [styles[`opacity-${state.backgroundOpacity}`]]: Boolean(state.backgroundOpacity),
    };
};
