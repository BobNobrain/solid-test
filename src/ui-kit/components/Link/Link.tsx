import { ParentComponent } from 'solid-js';
import styles from './Link.css';

export interface LinkProps {
    href: string;
    target?: string;
    onClick?: (ev: MouseEvent) => void;
}

export const Link: ParentComponent<LinkProps> = (props) => {
    return (
        <a
            class={styles.link}
            href={props.href}
            target={props.target}
            onClick={props.onClick}
        >
            {props.children}
        </a>
    );
};
