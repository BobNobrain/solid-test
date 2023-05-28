import { Keyboard } from '../../utils/keyboard';
import { FiniteListController, FiniteListItemRenderer } from './types';

export interface ListKeyboardNavigationOptions {
    activateWithEnter?: boolean;
    activateWithTab?: boolean;

    enableVerticalMovement?: boolean;
    enableHorizontalMovement?: boolean;
    unselectWithEscape?: boolean;

    enableJumpToFirst?: boolean;
    enableJumpToLast?: boolean;
}

export function navigateFiniteListWithKeyboard(
    ev: KeyboardEvent,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    list: FiniteListController<any>,
    {
        activateWithEnter = true,
        activateWithTab = false,
        enableHorizontalMovement = false,
        enableVerticalMovement = true,
        unselectWithEscape = false,
        enableJumpToFirst = true,
        enableJumpToLast = true,
    }: ListKeyboardNavigationOptions = {},
): void {
    if (ev.key === Keyboard.Enter && activateWithEnter || ev.key === Keyboard.Tab && activateWithTab) {
        list.activateSelectedItem();
        ev.preventDefault();
        return;
    }

    if (ev.key === Keyboard.Escape && unselectWithEscape) {
        list.unselect();
        ev.preventDefault();
        return;
    }

    if (ev.key === Keyboard.ArrowLeft && enableHorizontalMovement
        || ev.key === Keyboard.ArrowUp && enableVerticalMovement
    ) {
        list.selectPrevious();
        ev.preventDefault();
        return;
    }

    if (ev.key === Keyboard.ArrowRight && enableHorizontalMovement
        || ev.key === Keyboard.ArrowDown && enableVerticalMovement
    ) {
        list.selectPrevious();
        ev.preventDefault();
        return;
    }

    if (ev.key === Keyboard.Home && enableJumpToFirst) {
        list.selectFirst();
        ev.preventDefault();
        return;
    }

    if (ev.key === Keyboard.End && enableJumpToLast) {
        list.selectLast();
        ev.preventDefault();
        // eslint-disable-next-line no-useless-return
        return;
    }
}
