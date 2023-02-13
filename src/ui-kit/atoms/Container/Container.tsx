import {
    Component,
    createMemo,
    ParentProps,
} from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { Size } from '../../types';
import styles from './Container.css';

export interface ContainerProps {
    tag?: string;
    width?: 'fill' | 'content';
    direction?: 'row' | 'column';
    wrap?: boolean;
    padding?: Size;
    gap?: Size | 'none';
}

export const Container: Component<ParentProps<ContainerProps>> = (props) => {
    const classList = createMemo(() => {
        const {
            direction = 'row',
            width = 'fill',
            wrap = false,
            padding = 'm',
            gap = padding,
        } = props;

        return {
            [styles[direction]]: true,
            [styles[width]]: true,
            [styles[`pad-${padding}`]]: true,
            [styles.wrap]: wrap,
            [styles[`gap-${gap}`]]: true,
        };
    });

    const tag = () => props.tag ?? 'div';

    return (
        <Dynamic
            component={tag()}
            class={styles.container}
            classList={classList()}
        >
            {props.children}
        </Dynamic>
    );
};
