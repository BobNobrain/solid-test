import { Component, createMemo, Show } from 'solid-js';
import { IconCheckmark } from '../../../../icons/IconCheckmark';
import { IconIndeterminate } from '../../../../icons/IconIndeterminate';
import { Color } from '../../../../types';
import { DEFAULT_OUTER_SIZE, InnerSize } from '../../../../utils/Size';
import { Icon } from '../../../Icon/Icon';
import styles from './Check.css';

export interface CheckProps {
    checked: boolean | undefined;

    color?: Color;
    size?: InnerSize;

    disabled?: boolean;
}

export const Check: Component<CheckProps> = (props) => {
    const iconSize = () => props.size ?? DEFAULT_OUTER_SIZE;

    const boxClassList = createMemo(() => ({
        [styles[`color-${props.color ?? 'default'}`]]: true,
        [styles[`size-${iconSize()}`]]: true,
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
                <Icon color="inherit" size={iconSize()}>
                    <IconCheckmark/>
                </Icon>
            </Show>
            <Show when={props.checked === undefined}>
                <Icon color="inherit" size={iconSize()}>
                    <IconIndeterminate/>
                </Icon>
            </Show>
        </div>
    );
};
