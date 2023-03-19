import { Component, createMemo, ParentProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { composeStyles } from '../../../utils/styles';
import { getTextStyles, StyleableTextProps } from '../common';
import styles from './Heading.css';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';

export interface HeadingProps extends StyleableTextProps {
    level?: HeadingLevel;
}

export const Heading: Component<ParentProps<HeadingProps>> = (props) => {
    const tag = () => `h${props.level || '2'}`;

    const classList = createMemo(() => composeStyles(
        getTextStyles(props),
        styles[tag()],
    ));

    return (
        <Dynamic
            component={tag()}
            class={styles.heading}
            classList={classList()}
        >
            {props.children}
        </Dynamic>
    );
};
