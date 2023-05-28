import { Component, createMemo, Show } from 'solid-js';
import { IconCheckmark } from '../../../../icons/IconCheckmark';
import { IconIndeterminate } from '../../../../icons/IconIndeterminate';
import { Color } from '../../../../types';
import { Size } from '../../../../utils/Size';
import styles from './Check.css';

export interface CheckProps {
    checked: boolean | undefined;

    color?: Color;
    size?: Size;

    disabled?: boolean;
}

export const Check: Component<CheckProps> = (props) => {
    const boxClassList = createMemo(() => ({
        [styles[`color-${props.color ?? 'default'}`]]: true,
        [styles[`size-${props.size ?? 'm'}`]]: true,
        [styles.on]: props.checked === true,
        [styles.off]: props.checked === false,
        [styles.indeterminate]: props.checked === undefined,
        [styles.disabled]: props.disabled,
    }));

    return (
        <div
            class={styles.box}
            classList={boxClassList()}
        >
            <Show when={props.checked === true}>
                <IconCheckmark/>
            </Show>
            <Show when={props.checked === undefined}>
                <IconIndeterminate/>
            </Show>
        </div>
    );
};
