import { Accessor, createSignal, onCleanup } from 'solid-js';

interface ResizeTrackerOptions {
    pollIntervalMs?: number;
}

export function createBoundsTracker(
    nodeGetter: () => HTMLElement,
    { pollIntervalMs = 100 }: ResizeTrackerOptions = {},
): Accessor<DOMRect> {
    const [getTargetBounds, setTargetBounds] = createSignal<DOMRect>(
        nodeGetter()?.getBoundingClientRect() ?? new DOMRect(),
    );

    const recheck = () => {
        const newRect = nodeGetter().getBoundingClientRect();
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

    onCleanup(() => {
        clearInterval(timerId);
    });

    return getTargetBounds;
}
