import { ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import styles from './Card.css';

interface CardProps {
    tag?: string;
    elevated?: boolean;
}

export const Card: ParentComponent<CardProps> = (props) => {
    const tag = () => props.tag ?? 'div';

    return (
        <Dynamic
            component={tag()}
            class={styles.card}
        >
            {props.children}
        </Dynamic>
    );
};
