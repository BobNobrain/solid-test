import { createMemo, JSX, ParentComponent } from 'solid-js';
import { Portal } from 'solid-js/web';

import { createBoundsTracker } from '../../utils/createBoundsTracker';
import { createViewportTracker } from '../../utils/createViewportTracker';

import { PopupPlacement } from './types';
import { defaultPlacements, getPopupAvailableSpace } from './utils';
import { getPlacementConfiguration } from './placement';

import styles from './Popup.css';

export interface PopupProps {
    target: HTMLElement;
    placements?: PopupPlacement[];

    minWidth?: number;
    minHeight?: number;
}

export const Popup: ParentComponent<PopupProps> = (props) => {
    let wrapperRef!: HTMLDivElement;

    const getTargetBounds = createBoundsTracker(() => props.target);
    const getContentBounds = createBoundsTracker(() => wrapperRef);
    const getViewport = createViewportTracker();

    const placement = createMemo(() => {
        const target = getTargetBounds();
        const viewport = getViewport();
        const content = getContentBounds();
        const placements = props.placements ?? defaultPlacements;

        const minWidth = props.minWidth || content.width;
        const minHeight = props.minHeight || content.height;

        for (const p of placements) {
            const placementConfig = getPlacementConfiguration(p);
            const available = getPopupAvailableSpace({
                target,
                viewport,
                placement: placementConfig,
            });

            if (available.width < minWidth || available.height < minHeight) {
                continue;
            }

            return { availableSpace: available, placement: p, placementConfig };
        }

        return {
            availableSpace: getPopupAvailableSpace({
                target,
                viewport,
                placement: getPlacementConfiguration(placements[0]),
            }),
            placement: placements[0],
            placementConfig: getPlacementConfiguration(placements[0]),
        };
    });

    const dims = createMemo<JSX.CSSProperties>(() => {
        const {
            left,
            top,
            width,
            height,
        } = placement().availableSpace;

        return {
            left: `${left}px`,
            top: `${top}px`,
            width: `${width}px`,
            height: `${height}px`,
        };
    });

    const classList = createMemo(() => {
        const { alignment, anchor } = placement().placementConfig;
        const isVertical = anchor === 'top' || anchor === 'bottom';

        return {
            [styles[`anchor-${anchor}`]]: true,
            [styles[`orientation-${isVertical ? 'vertical' : 'horizontal'}`]]: true,
            [styles[`align-${alignment}`]]: true,
        };
    });

    return (
        <Portal>
            <div class={styles.positioner} classList={classList()} style={dims()}>
                <div
                    ref={wrapperRef}
                    class={styles.wrapper}
                >
                    {props.children}
                </div>
            </div>
        </Portal>
    );
};
