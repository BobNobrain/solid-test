import { ParentComponent } from 'solid-js';
import type { Size } from '../../utils/Size';
import styles from './Sidebar.css';

export interface SidebarProps {
    size?: Size;
}

export const Sidebar: ParentComponent<SidebarProps> = (props) => {
    return (
        <aside class={styles.sidebar}>
            {props.children}
        </aside>
    );
};
