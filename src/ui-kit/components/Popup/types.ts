export interface PopupPosition {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    width?: number;
    height?: number;
}

export type PositionResolver = (contentBounds: DOMRect) => PopupPosition;

export type HorizontalAlignment = 'left' | 'right' | 'center' | 'stretch';
export type VerticalAlignment = 'top' | 'bottom' | 'center' | 'stretch';
export type PlacementSide = 'bottom' | 'top' | 'left' | 'right';

export type PopupPlacement =
    | `bottom-${HorizontalAlignment}`
    | `top-${HorizontalAlignment}`
    | `left-${VerticalAlignment}`
    | `right-${VerticalAlignment}`;
