import type { JSX } from 'solid-js';

export interface FiniteListController<T> {
    selectItem: (item: T) => void;
    selectItemAt: (index: number) => void;
    selectNext: () => void;
    selectPrevious: () => void;
    unselect: () => void;

    selectFirst: () => void;
    selectLast: () => void;

    activateSelectedItem: () => void;
}

export interface FiniteListItemRendererContext<T> {
    controller: FiniteListController<T>;
    selected: boolean;
}
export type FiniteListItemRenderer<T> = (item: T, ctx: FiniteListItemRendererContext<T>) => JSX.Element;
