import { For } from 'solid-js';
import { list, listItem } from '../../atoms/list/list';

export interface SimpleListItem<T> {
    text: string;
    value: T;
}

export interface SimpleListProps<T> {
    items: SimpleListItem<T>[];
    selected?: SimpleListItem<T>;
    onPick?: (item: SimpleListItem<T>) => void;
}

export function SimpleList<T>(props: SimpleListProps<T>) {
    return (
        <ul classList={list({})}>
            <For each={props.items}>
                {(item) => (
                    <li
                        classList={listItem({
                            hoverable: Boolean(props.onPick),
                            selected: props.selected === item,
                        })}
                        onClick={() => {
                            if (props.onPick) {
                                props.onPick(item);
                            }
                        }}
                    >
                        {item.text}
                    </li>
                )}
            </For>
        </ul>
    );
}
