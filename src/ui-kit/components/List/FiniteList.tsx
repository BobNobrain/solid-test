import { For, JSX } from 'solid-js';
import { list } from '../../atoms/list/list';

export interface FiniteListProps<T> {
    items: T[];
    renderItem: (item: T) => JSX.Element;
    emptyState?: JSX.Element;
}

export function FiniteList<T>(props: FiniteListProps<T>): JSX.Element {
    return (
        <ul classList={list({})}>
            <For each={props.items} fallback={props.emptyState}>
                {(item) => props.renderItem(item)}
            </For>
        </ul>
    );
}
