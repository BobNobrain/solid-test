import { Atom } from '../types';
import styles from './card.css';

interface CardState {
    elevated?: boolean;
}

export const card: Atom<CardState> = (state) => {
    return {
        [styles.card]: true,
        [styles.elevated]: state.elevated,
    };
};
