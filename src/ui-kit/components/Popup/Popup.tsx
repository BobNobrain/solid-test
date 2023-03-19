// import {
//     createEffect,
//     createMemo,
//     createSignal,
//     onCleanup,
//     ParentComponent,
// } from 'solid-js';
// import { Portal } from 'solid-js/web';
// import styles from './Popup.css';
// import { PopupPlacement } from './types';
// import { defaultPlacements } from './utils';

// export interface PopupProps {
//     target: HTMLElement;
//     placements?: PopupPlacement[];
// }

// export const Popup: ParentComponent<PopupProps> = (props) => {
//     let wrapperRef!: HTMLDivElement;

//     const [getTargetBounds, setTargetBounds] = createSignal<DOMRect>(props.target.getBoundingClientRect());

//     createEffect(() => {
//         const listener = () => {
//             const target = props.target.getBoundingClientRect();
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

//     const dims = createMemo(() => {
//         const target = getTargetBounds();
//         const placements = props.placements ?? defaultPlacements;
//         let result;

//         for (const p of placements) {
//             const result = placePopup(target, contentBounds, p);
//             const { width, height } = getSize(result);
//             if (width < minWidth || height < minHeight) {
//                 continue;
//             }

//             return result;
//         }

//         return Object.fromEntries(Object.entries(dimensions).map(([key, value]) => [key, `${value}px`]));
//     });

//     return (
//         <Portal>
//             <div class={styles.positioner} style={dims()}>
//                 <div class={styles.wrapper} ref={wrapperRef}>
//                     {props.children}
//                 </div>
//             </div>
//         </Portal>
//     );
// };
