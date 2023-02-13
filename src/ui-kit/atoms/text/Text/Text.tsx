import { Component, createMemo, ParentProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { Color, CssProps, Size } from '../../../types';
import styles from './Text.css';

export interface TextProps extends CssProps {
    tag?: string;
    color?: Color;
    size?: Size;
    bold?: boolean;
    light?: boolean;
    dim?: boolean;
    italic?: boolean;
}

export const Text: Component<ParentProps<TextProps>> = (props) => {
    const classList = createMemo(() => ({
        ...(props.classList || {}),
        [props.class || '']: Boolean(props.class),

        [styles[`color-${props.color}`]]: Boolean(props.color),
        [styles[`size-${props.size}`]]: Boolean(props.size),
        [styles.bold]: props.bold,
        [styles.light]: props.light,
        [styles['normal-weight']]: props.bold === false || props.light === false,
        [styles.italic]: props.italic,
        [styles['normal-style']]: props.italic === false,
        [styles.dim]: props.dim,
        [styles['non-dim']]: props.dim === false,
    }));

    const tag = () => props.tag || 'span';

    return (
        <Dynamic
            component={tag()}
            class={styles.text}
            classList={classList()}
        >
            {props.children}
        </Dynamic>
    );
};
