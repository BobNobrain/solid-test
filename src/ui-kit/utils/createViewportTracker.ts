import {
    Accessor,
    createEffect,
    createSignal,
    onCleanup,
} from 'solid-js';

export function createViewportTracker(): Accessor<DOMRect> {
    const [getViewport, setViewport] = createSignal<DOMRect>(DOMRect.fromRect({
        x: window.scrollX,
        y: window.scrollY,
        width: window.innerWidth,
        height: window.innerHeight,
    }));

    createEffect(() => {
        const listener = () => {
            const {
                scrollX, scrollY,
                innerWidth, innerHeight,
            } = window;
            setViewport((old) => {
                if (old.x === scrollX
                    && old.y === scrollY
                    && old.width === innerWidth
                    && old.height === innerHeight) {
                    return old;
                }

                return DOMRect.fromRect({
                    x: scrollX,
                    y: scrollY,
                    width: innerWidth,
                    height: innerHeight,
                });
            });
        };

        window.addEventListener('resize', listener);
        window.addEventListener('scroll', listener, { passive: true });

        onCleanup(() => {
            window.removeEventListener('resize', listener);
            window.removeEventListener('scroll', listener);
        });
    });

    return getViewport;
}
