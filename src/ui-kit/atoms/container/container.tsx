import type { Size } from '../../utils/Size';
import { Atom } from '../types';
import styles from './container.css';

export type ContainerAlignment = 'start' | 'end' | 'center' | 'stretch';
export type ContainerSize = 'fill' | 'content';
export type ContainerDirection = 'row' | 'column';
export type ContainerPadding = Size | 'none';

export interface ContainerState {
    size?: ContainerSize;
    direction?: ContainerDirection;
    wrap?: boolean;
    padding?: ContainerPadding;
    gap?: ContainerPadding;

    justify?: ContainerAlignment;
    align?: ContainerAlignment;
}

export const container: Atom<ContainerState> = (state) => {
    const {
        direction = 'row',
        size = 'fill',
        wrap = false,
        padding = 'none',
        gap = padding,
        justify = 'start',
        align = 'start',
    } = state;

    return {
        [styles.container]: true,
        [styles[direction]]: true,
        [styles[size]]: true,
        [styles[`pad-${padding}`]]: true,
        [styles.wrap]: wrap,
        [styles[`gap-${gap}`]]: true,
        [styles[`justify-${justify}`]]: true,
        [styles[`align-${align}`]]: true,
    };
};
