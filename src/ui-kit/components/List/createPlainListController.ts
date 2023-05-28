import { Accessor, createSignal } from 'solid-js';
import { FiniteListController } from './types';

export interface CreatePlainListControllerOptions<T> {
    itemsCount: Accessor<number>;
    itemAt: (at: number) => T;
    getItemIndex: (item: T) => number;

    initialIndex?: number;
    alwaysSelected: Accessor<boolean | undefined>;

    onItemActivate?: (item: T) => void;
}

export function createSimpleListController<T>(opts: CreatePlainListControllerOptions<T>): FiniteListController<T> {
    const [selectedIndex, setSelectedIndex] = createSignal(opts.initialIndex ?? -1);

    const controller: FiniteListController<T> = {
        selectItem: (item) => {
            const index = opts.getItemIndex(item);
            if (index >= 0) {
                setSelectedIndex(index);
            }
        },
        selectItemAt: (index) => {
            if (index >= 0 && index < opts.itemsCount()) {
                setSelectedIndex(index);
            }
        },
        unselect: () => {
            if (opts.alwaysSelected()) {
                setSelectedIndex(-1);
            }
        },

        selectNext: () => {
            if (opts.itemsCount() < 2) {
                return;
            }

            const idx = selectedIndex();
            const nextIdx = (idx + 1) % opts.itemsCount();
            setSelectedIndex(nextIdx);
        },
        selectPrevious: () => {
            if (opts.itemsCount() < 2) {
                return;
            }

            const idx = selectedIndex() ?? 0;
            const prevIdx = idx - 1 < 0
                ? opts.itemsCount() - 1
                : idx - 1;
            setSelectedIndex(prevIdx);
        },

        selectFirst: () => {
            if (!opts.itemsCount()) {
                return;
            }

            setSelectedIndex(0);
        },
        selectLast: () => {
            if (!opts.itemsCount()) {
                return;
            }

            setSelectedIndex(opts.itemsCount() - 1);
        },

        activateSelectedItem: () => {
            if (!opts.onItemActivate || selectedIndex() === -1) {
                return;
            }

            opts.onItemActivate(opts.itemAt(selectedIndex()));
        },
    };

    return controller;
}
