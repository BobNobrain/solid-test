export interface SingularSelectValue<T> {
    type: 'single';
    selected: T;
    onUpdate?: (newValue: T) => void;
}

export interface MultipleSelectValue<T> {
    type: 'multiple';
    selected: T[];
    onSelect?: (newValue: T) => void;
    onUnselect?: (newValue: T) => void;
    onClear?: () => void;
}

export type SelectValue<T> = SingularSelectValue<T> | MultipleSelectValue<T>;

export interface SelectSimpleOptions<T> {
    value?: T[];
    loading: boolean;
    error?: unknown;
}
