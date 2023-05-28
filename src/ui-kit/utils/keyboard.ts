import { onCleanup, onMount } from 'solid-js';

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
export enum Keyboard {
    Escape = 'Escape',
    Enter = 'Enter',
    ArrowDown = 'ArrowDown',
    ArrowUp = 'ArrowUp',
    ArrowLeft = 'ArrowLeft',
    ArrowRight = 'ArrowRight',
    Home = 'Home',
    End = 'End',
    Tab = 'Tab',
}

export function hasModifiers(ev: KeyboardEvent): boolean {
    return ev.ctrlKey || ev.shiftKey || ev.metaKey || ev.altKey;
}

export function createGlobalKeyDownListener(listener: (ev: KeyboardEvent) => void) {
    onMount(() => {
        document.addEventListener('keydown', listener);
    });
    onCleanup(() => {
        document.removeEventListener('keydown', listener);
    });
}

export function createGlobalKeyUpListener(listener: (ev: KeyboardEvent) => void) {
    onMount(() => {
        document.addEventListener('keyup', listener);
    });
    onCleanup(() => {
        document.removeEventListener('keyup', listener);
    });
}
