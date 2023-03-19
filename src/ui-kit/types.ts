export type Color = 'default' | 'primary' | 'info' | 'success' | 'error' | 'warn';
export type Size = 'xs' | 's' | 'm' | 'l' | 'xl';
export type Validity = undefined | 'error' | 'success';
export type FontWeight = 'normal' | 'light' | 'bold';
export type FontStyle = 'normal' | 'italic';

export interface CssProps {
    class?: string;
    classList?: Record<string, boolean | undefined>;
}
