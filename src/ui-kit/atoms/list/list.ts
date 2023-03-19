import { Atom } from '../types';
import styles from './list.css';

export const list: Atom<{}> = () => {
    return {
        [styles.list]: true,
    };
};

export interface ListItemState {
    hoverable?: boolean;
    selected?: boolean;
}

export const listItem: Atom<ListItemState> = (state) => {
    return {
        [styles.item]: true,
        [styles.selected]: state.selected,
        [styles.hoverable]: state.hoverable,
    };
};
