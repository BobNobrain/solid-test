import { Component, createMemo, Show } from 'solid-js';
import { IconCheckmark } from '../../../icons/IconCheckmark';
import { IconIndeterminate } from '../../../icons/IconIndeterminate';
import { Color, Size } from '../../../types';
import styles from './Checkbox.css';

export interface CheckboxProps {
    value: boolean | undefined;
    onUpdate: (newValue: boolean | undefined) => void;

    color?: Color;
    size?: Size;

    disabled?: boolean;
    name?: string;
}

export const Checkbox: Component<CheckboxProps> = (props) => {
    const boxClassList = createMemo(() => ({
        [styles[`color-${props.color ?? 'default'}`]]: true,
        [styles[`size-${props.size ?? 'm'}`]]: true,
        [styles.on]: props.value === true,
        [styles.off]: props.value === false,
        [styles.indeterminate]: props.value === undefined,
    }));

    const wrapperClassList = createMemo(() => ({
        [styles.disabled]: props.disabled,
    }));

    const checked = () => props.value ?? false;
    const indeterminate = () => props.value === undefined;

    let ref!: HTMLInputElement;

    return (
        <div
            class={styles.wrapper}
            classList={wrapperClassList()}
            onClick={() => {
                if (props.disabled) {
                    return;
                }
                ref.focus(); // this will also enable keyboard interactions
                props.onUpdate(!props.value);
            }}
        >
            <input
                ref={ref}
                type="checkbox"
                class={styles.checkbox}
                checked={checked()}
                // @ts-ignore
                indeterminate={indeterminate()}
                disabled={props.disabled}
                name={props.name}
            />
            <div
                class={styles.box}
                classList={boxClassList()}
            >
                <Show when={checked()}>
                    <IconCheckmark/>
                </Show>
                <Show when={indeterminate()}>
                    <IconIndeterminate/>
                </Show>
            </div>
        </div>
    );
};
