import { Component, ParentProps } from 'solid-js';
import { Text, TextProps } from '../Text/Text';
import styles from './Paragraph.css';

export type ParagraphProps = Omit<TextProps, 'tag'>;

export const Paragraph: Component<ParentProps<ParagraphProps>> = (props) => {
    return (
        <Text {...props} tag="p" class={styles.paragraph}>{props.children}</Text>
    );
};
