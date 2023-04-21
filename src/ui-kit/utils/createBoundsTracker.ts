import {
    Accessor,
    createSignal,
    onCleanup,
    onMount,
} from 'solid-js';

interface ResizeTrackerOptions {
    pollIntervalMs?: number;
}

export type ResizeTrackerResult = [getBounds: Accessor<DOMRect>, recheck: () => void];

export function createBoundsTracker(
    nodeGetter: () => HTMLElement | undefined,
    { pollIntervalMs = 100 }: ResizeTrackerOptions = {},
): ResizeTrackerResult {
    const [getTargetBounds, setTargetBounds] = createSignal<DOMRect>(
        nodeGetter()?.getBoundingClientRect() ?? new DOMRect(),
    );

    const recheck = () => {
        const newRect = nodeGetter()?.getBoundingClientRect();
        if (!newRect) {
            return;
        }

        setTargetBounds((oldRect) => {
            if (oldRect.left === newRect.left
                && oldRect.right === newRect.right
                && oldRect.bottom === newRect.bottom
                && oldRect.top === newRect.top
            ) {
                return oldRect;
            }

            return newRect;
        });
    };

    const timerId = setInterval(recheck, pollIntervalMs);

    onMount(() => {
        recheck();
    });
    onCleanup(() => {
        clearInterval(timerId);
    });

    return [getTargetBounds, recheck];
}
