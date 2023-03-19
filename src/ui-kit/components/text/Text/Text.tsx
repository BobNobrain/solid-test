import { Component, createMemo, ParentProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { StyleableTextProps, getTextStyles } from '../common';
import styles from './Text.css';

export interface TextProps extends StyleableTextProps {
    tag?: string;
}

export const Text: Component<ParentProps<TextProps>> = (props) => {
    const classList = createMemo(() => getTextStyles(props));
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
