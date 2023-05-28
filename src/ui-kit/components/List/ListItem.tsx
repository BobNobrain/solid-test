import { JSX, ParentProps } from 'solid-js';
import { Styles, composeStyles } from '../../utils/styles';
import { listItem } from '../../atoms/list/list';

export interface ListItemProps<T> {
    value: T;
    selected?: boolean;
    onClick?: (value: T, ev: MouseEvent) => void;
    styles?: Styles;
}

export function ListItem<T>(props: ParentProps<ListItemProps<T>>): JSX.Element {
    return (
        <li
            classList={composeStyles(props.styles, listItem({
                hoverable: Boolean(props.onClick),
                selected: props.selected,
            }))}
            onClick={props.onClick ? (ev) => props.onClick?.(props.value, ev) : undefined}
        >
            {props.children}
        </li>
    );
}
