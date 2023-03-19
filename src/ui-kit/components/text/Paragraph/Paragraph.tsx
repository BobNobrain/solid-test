import { Component, createMemo, ParentProps } from 'solid-js';
import { getTextStyles, StyleableTextProps } from '../common';
import styles from './Paragraph.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ParagraphProps extends StyleableTextProps {}

export const Paragraph: Component<ParentProps<ParagraphProps>> = (props) => {
    const classList = createMemo(() => getTextStyles(props));

    return (
        <p
            class={styles.paragraph}
            classList={classList()}
        >
            {props.children}
        </p>
    );
};
