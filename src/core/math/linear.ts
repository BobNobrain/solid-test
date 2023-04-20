export interface Limits {
    min?: number;
    max?: number;
}

export function clamp(value: number, { min = -Infinity, max = Infinity }: Limits): number {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}
