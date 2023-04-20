export type HorizontalAlignment = 'left' | 'right' | 'center';
export type VerticalAlignment = 'top' | 'bottom' | 'center';
export type AnchorSide = 'bottom' | 'top' | 'left' | 'right';

export type PopupPlacement =
    | `bottom-${HorizontalAlignment}`
    | `top-${HorizontalAlignment}`
    | `left-${VerticalAlignment}`
    | `right-${VerticalAlignment}`;

export const defaultPlacements: PopupPlacement[] = [
    'bottom-left', 'bottom-center', 'bottom-right',
    'top-left', 'top-center', 'top-right',
    'left-top', 'left-bottom', 'left-center',
    'right-top', 'right-bottom', 'right-center',
];

export type PopupPlacementConfiguration =
    | { alignment: VerticalAlignment; anchor: 'bottom' | 'top' }
    | { alignment: HorizontalAlignment; anchor: 'left' | 'right' }

export function getPlacementConfiguration(placement: PopupPlacement): PopupPlacementConfiguration {
    const [side, alignment] = placement.split('-');
    return { alignment, anchor: side } as PopupPlacementConfiguration;
}
