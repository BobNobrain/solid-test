import { createMemo, JSX, ParentComponent } from 'solid-js';
import { Portal } from 'solid-js/web';

import { createBoundsTracker } from '../../utils/createBoundsTracker';
import { createViewportTracker } from '../../utils/createViewportTracker';

import { PopupLengthConstraint, PopupPlacement } from './types';
import { defaultPlacements, placePopup } from './utils';
import { getPlacementConfiguration } from './placement';

import styles from './Popup.css';

export interface PopupProps {
    target: DOMRect;
    placements?: PopupPlacement[];

    minWidth?: number;
    minHeight?: number;
    gap?: number;
    lengthConstraint?: PopupLengthConstraint;
}

export const Popup: ParentComponent<PopupProps> = (props) => {
    let wrapperRef!: HTMLDivElement;

    const [getContentBounds] = createBoundsTracker(() => wrapperRef);
    const getViewport = createViewportTracker();

    const placement = createMemo(() => {
        const target = props.target;
        const viewport = getViewport();
        const content = getContentBounds();
        const placements = props.placements ?? defaultPlacements;

        const minWidth = props.minWidth || content.width;
        const minHeight = props.minHeight || content.height;

        for (const p of placements) {
            const placementConfig = getPlacementConfiguration(p);
            const { bounds, container } = placePopup({
                target,
                viewport,
                placement: placementConfig,
                gap: props.gap ?? 0,
            });

            if (bounds.width < minWidth || bounds.height < minHeight) {
                continue;
            }

            return {
                bounds,
                container,
                placement: p,
                placementConfig,
            };
        }

        return {
            ...placePopup({
                target,
                viewport,
                placement: getPlacementConfiguration(placements[0]),
                gap: props.gap ?? 0,
            }),
            placement: placements[0],
            placementConfig: getPlacementConfiguration(placements[0]),
        };
    });

    const bounderCss = createMemo<JSX.CSSProperties>(() => {
        const {
            left,
            top,
            width,
            height,
        } = placement().container;

        return {
            left: `${left}px`,
            top: `${top}px`,
            width: `${width}px`,
            height: `${height}px`,
        };
    });
    const bounderClassList = createMemo(() => {
        const { alignment, anchor } = placement().placementConfig;
        const isVertical = anchor === 'top' || anchor === 'bottom';

        return {
            [styles[`anchor-${anchor}`]]: true,
            [styles[`orientation-${isVertical ? 'vertical' : 'horizontal'}`]]: true,
            [styles[`align-${alignment}`]]: true,
            [styles[`constrain-${props.lengthConstraint ?? 'none'}`]]: true,
        };
    });

    return (
        <Portal>
            <div
                class={styles.bounder}
                classList={bounderClassList()}
                style={bounderCss()}
            >
                <div
                    ref={wrapperRef}
                    class={styles['content-wrapper']}
                >
                    {props.children}
                </div>
            </div>
        </Portal>
    );
};
