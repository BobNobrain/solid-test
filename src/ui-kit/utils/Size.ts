/**
 * This module defines the size grid for design system.
 */

/** */
type MidSize = 'xs' | 's' | 'm' | 'l';
export type Size = 'xs' | 's' | 'm' | 'l' | 'xl';
export type InnerSize = MidSize | 'xxs';

export const DEFAULT_OUTER_SIZE: Size = 'm';
export const DEFAULT_INNER_SIZE: InnerSize = 's';

export const largerSize: Record<InnerSize | Size, Size | undefined> = {
    xxs: 'xs',
    xs: 's',
    s: 'm',
    m: 'l',
    l: 'xl',
    xl: undefined,
};

export const smallerSize: Record<Size, InnerSize> = {
    xs: 'xxs',
    s: 'xs',
    m: 's',
    l: 'm',
    xl: 'l',
};

export const pixelSize: Record<InnerSize | Size, number> = {
    xxs: 20,
    xs: 24,
    s: 28,
    m: 36,
    l: 48,
    xl: 64,
};
