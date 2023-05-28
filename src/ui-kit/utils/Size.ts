/**
 * This module defines the size grid for design system.
 */

/** */
export type Size = 'xs' | 's' | 'm' | 'l' | 'xl';

export const DEFAULT_OUTER_SIZE: Size = 'm';
export const DEFAULT_INNER_SIZE: Size = 's';

export const largerSize: Record<Size, Size | undefined> = {
    xs: 's',
    s: 'm',
    m: 'l',
    l: 'xl',
    xl: undefined,
};

export const smallerSize: Record<Size, Size | undefined> = {
    xs: undefined,
    s: 'xs',
    m: 's',
    l: 'm',
    xl: 'l',
};

export const pixelSize: Record<Size, number> = {
    xs: 24,
    s: 28,
    m: 36,
    l: 48,
    xl: 64,
};
