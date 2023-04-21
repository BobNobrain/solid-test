import { PopupPlacementConfiguration, PopupPlacement } from './placement';

export const defaultPlacements: PopupPlacement[] = [
    'bottom-left', 'bottom-center', 'bottom-right',
    'top-left', 'top-center', 'top-right',
    'left-top', 'left-bottom', 'left-center',
    'right-top', 'right-bottom', 'right-center',
];

interface PlacePopupOptions {
    target: DOMRect;
    viewport: DOMRect;
    placement: PopupPlacementConfiguration;
    gap: number;
}

interface PlacePopupResult {
    bounds: DOMRect; // all available space
    container: DOMRect; // all available space but constrained by length of target's anchor side
}

export function placePopup({
    target,
    viewport,
    placement,
    gap,
}: PlacePopupOptions): PlacePopupResult {
    const distances = {
        toTop: target.top - viewport.top,
        toBottom: viewport.bottom - target.bottom,
        toLeft: target.left - viewport.left,
        toRight: viewport.right - target.right,
    };

    const spaceForPopup = {
        left: viewport.left,
        top: viewport.top,
        width: viewport.width,
        height: viewport.height,
    };

    switch (placement.anchor) {
        case 'top':
            spaceForPopup.height = distances.toTop;
            spaceForPopup.top = viewport.top;
            break;

        case 'bottom':
            spaceForPopup.height = distances.toBottom;
            spaceForPopup.top = target.bottom;
            break;

        case 'left':
            spaceForPopup.width = distances.toLeft;
            spaceForPopup.left = viewport.left;
            break;

        case 'right':
            spaceForPopup.width = distances.toRight;
            spaceForPopup.left = target.right;
            break;
    }

    const isVertical = placement.anchor === 'top' || placement.anchor === 'bottom';

    switch (placement.alignment) {
        case 'top':
            spaceForPopup.top = target.top;
            spaceForPopup.height = target.height + distances.toBottom;
            break;

        case 'bottom':
            spaceForPopup.top = viewport.top;
            spaceForPopup.height = target.height + distances.toTop;
            break;

        case 'left':
            spaceForPopup.left = target.left;
            spaceForPopup.width = target.width + distances.toRight;
            break;

        case 'right':
            spaceForPopup.left = viewport.left;
            spaceForPopup.width = target.width + distances.toLeft;
            break;

        case 'center':
            if (isVertical) {
                spaceForPopup.left = viewport.left;
                spaceForPopup.width = viewport.width;
            } else {
                spaceForPopup.top = viewport.top;
                spaceForPopup.height = viewport.height;
            }
    }

    const constrainedByAnchorSide = { ...spaceForPopup };
    if (isVertical) {
        constrainedByAnchorSide.left = target.left;
        constrainedByAnchorSide.width = target.width;
    } else {
        constrainedByAnchorSide.top = target.top;
        constrainedByAnchorSide.height = target.height;
    }

    const bounds = DOMRect.fromRect({
        x: spaceForPopup.left,
        y: spaceForPopup.top,
        width: spaceForPopup.width,
        height: spaceForPopup.height,
    });
    const container = DOMRect.fromRect({
        x: constrainedByAnchorSide.left,
        y: constrainedByAnchorSide.top,
        width: constrainedByAnchorSide.width,
        height: constrainedByAnchorSide.height,
    });

    return { bounds, container };
}
