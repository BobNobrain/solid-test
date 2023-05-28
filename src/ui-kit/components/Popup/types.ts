export interface PopupPosition {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    width?: number;
    height?: number;
}

export type HorizontalAlignment = 'left' | 'right' | 'center';
export type VerticalAlignment = 'top' | 'bottom' | 'center';
export type PlacementSide = 'bottom' | 'top' | 'left' | 'right';

export type PopupLengthConstraint = 'shorter' | 'longer' | 'exact' | 'none';

export type PopupPlacement =
    | `bottom-${HorizontalAlignment}`
    | `top-${HorizontalAlignment}`
    | `left-${VerticalAlignment}`
    | `right-${VerticalAlignment}`;
