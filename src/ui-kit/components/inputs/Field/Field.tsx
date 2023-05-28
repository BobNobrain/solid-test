import {
    createMemo,
    ParentComponent,
    Ref,
    Show,
} from 'solid-js';
import { Validity } from '../../../types';
import { Size } from '../../../utils/Size';
import { composeStyles } from '../../../utils/styles';
import { fixedContainer } from '../../../atoms/fixed-container/fixed-container';

import styles from './Field.css';

export interface FieldProps {
    outerSize?: Size;
    innerSize?: Size;
    validity?: Validity;
    disabled?: boolean;

    label?: string;

    isActive?: boolean;
    onActivate?: (_?: never) => void;

    ref?: Ref<HTMLDivElement>;

    behavior?: 'default' | 'clickable' | 'text';
}

export const Field: ParentComponent<FieldProps> = (props) => {
    const wrapperClassList = createMemo(() => {
        return composeStyles(
            fixedContainer({
                outerSize: props.outerSize,
                innerSize: props.innerSize,
                borderColor: props.validity ?? 'default',
                backgroundColor: props.validity ?? 'default',
            }),
            {
                [styles[`size-${props.outerSize ?? 'm'}`]]: true,
                [styles.disabled]: props.disabled,
                [styles.active]: props.isActive,
                [styles['with-label']]: props.label !== undefined,
                [styles[`behavior-${props.behavior ?? 'default'}`]]: true,
            },
        );
    });

    const labelClassList = createMemo(() => {
        return {
            [styles[`label-size-${props.outerSize ?? 'm'}`]]: true,
            [styles[`label-validity-${props.validity}`]]: Boolean(props.validity),
        };
    });

    const handleClick = () => props.onActivate?.();

    return (
        <div
            ref={props.ref}
            class={styles.field}
            classList={wrapperClassList()}
            onClick={handleClick}
        >
            <Show when={props.label}>
                <div
                    title={props.label}
                    class={styles.label}
                    classList={labelClassList()}
                >
                    {props.label}
                </div>
            </Show>
            {props.children}
        </div>
    );
};
