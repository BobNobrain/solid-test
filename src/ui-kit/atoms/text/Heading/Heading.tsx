import { Component, ParentProps } from 'solid-js';
import { Text, TextProps } from '../Text/Text';
import styles from './Heading.css';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';

export type HeadingProps = Omit<TextProps, 'tag'> & {
    level?: HeadingLevel;
};

export const Heading: Component<ParentProps<HeadingProps>> = (props) => {
    const tag = () => `h${props.level || '2'}`;

    const classList = () => ({
        [styles[tag()]]: true,
    });

    return (
        <Text
            {...props}
            tag={tag()}
            class={styles.paragraph}
            classList={classList()}
        >
            {props.children}
        </Text>
    );
};
