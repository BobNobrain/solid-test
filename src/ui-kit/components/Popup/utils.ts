// import { createEffect, createSignal, onCleanup } from 'solid-js';
// import {
//     HorizontalAlignment, PlacementSide, PopupPlacement, PopupPosition, PositionResolver, VerticalAlignment,
// } from './types';

// export interface TargetResolverOptions {
//     placements?: PopupPlacement[];
//     minWidth?: number;
//     minHeight?: number;
// }

// export const defaultPlacements: PopupPlacement[] = [
//     'bottom-left', 'bottom-center', 'bottom-right',
//     'top-left', 'top-center', 'top-right',
//     'left-top', 'left-bottom', 'left-center',
//     'right-top', 'right-bottom', 'right-center',
// ];

// function calculateHorizontalAlignment(
//     target: DOMRect,
//     alignment: HorizontalAlignment,
// ): PopupPosition {
//     switch (alignment) {
//         case 'left':
//             return { left: target.left };

//         case 'right':
//             return { right: target.right };

//         case 'center':
//             return { left: target.left + target.width / 2 };

//         case 'stretch':
//             return { left: target.left, right: target.right };
//     }
// }
// function calculateVerticalAlignment(
//     target: DOMRect,
//     alignment: VerticalAlignment,
// ): PopupPosition {
//     switch (alignment) {
//         case 'top':
//             return { top: target.top };

//         case 'bottom':
//             return { bottom: target.bottom };

//         case 'center':
//             return { top: target.top + target.height / 2 };

//         case 'stretch':
//             return { top: target.top, bottom: target.bottom };
//     }
// }

// function calculatePlacement(target: DOMRect, side: PlacementSide, gap: number): PopupPosition {
//     switch (side) {
//         case 'top':
//             return { bottom: target.bottom + target.height + gap };

//         case 'bottom':
//             return { top: target.top + target.height + gap };

//         case 'left':
//             return { right: target.right + target.width + gap };

//         case 'right':
//             return { left: target.left + target.width + gap };
//     }
// }

// export function placePopup(target: DOMRect, placement: PopupPlacement, gap: number): PopupPosition {
//     const [main, alignment] = placement.split('-') as [PlacementSide, HorizontalAlignment | VerticalAlignment];

//     const result: PopupPosition = {};

//     Object.assign(calculatePlacement(target, main, gap));
//     if (main === 'top' || main === 'bottom') {
//         Object.assign(calculateHorizontalAlignment(target, alignment as HorizontalAlignment));
//     } else {
//         Object.assign(calculateVerticalAlignment(target, alignment as VerticalAlignment));
//     }

//     return result;
// }

// export function createTargetResolver(el: HTMLElement, options: TargetResolverOptions): PositionResolver {
//     const [getTargetBounds, setTargetBounds] = createSignal<DOMRect>(el.getBoundingClientRect());

//     createEffect(() => {
//         const listener = () => {
//             const target = el.getBoundingClientRect();
//             setTargetBounds((old) => {
//                 if (old.left === target.left
//                     && old.right === target.right
//                     && old.bottom === target.bottom
//                     && old.top === target.top
//                 ) {
//                     return old;
//                 }

//                 return target;
//             });
//         };

//         window.addEventListener('resize', listener);
//         window.addEventListener('scroll', listener, { passive: true });

//         onCleanup(() => {
//             window.removeEventListener('resize', listener);
//             window.removeEventListener('scroll', listener);
//         });
//     });

//     const {
//         placements = defaultPlacements,
//         minHeight = 0,
//         minWidth = 0,
//     } = options;

//     return (contentBounds) => {
//         const target = getTargetBounds();

//         for (const p of placements) {
//             const result = placePopup(target, contentBounds, p);
//             const { width, height } = getSize(result);
//             if (width < minWidth || height < minHeight) {
//                 continue;
//             }

//             return result;
//         }

//         return placePopup(target, contentBounds, placements[0] ?? defaultPlacements[0]);
//     };
// }
