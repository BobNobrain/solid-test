import {
    Component,
    createMemo,
    JSX,
    Show,
} from 'solid-js';
import { Size, Validity } from '../../../types';
import styles from './InputWrapper.css';

export interface InputWrapperProps {
    before?: JSX.Element;
    after?: JSX.Element;
    renderInput: (ref: {ref: HTMLInputElement}) => JSX.Element;

    size?: Size;
    validity?: Validity;
    disabled?: boolean;

    label?: string;
}

export const InputWrapper: Component<InputWrapperProps> = (props) => {
    const inputRef: { ref: HTMLInputElement } = {} as { ref: HTMLInputElement };

    const wrapperClassList = createMemo(() => {
        return {
            [styles[`size-${props.size ?? 'm'}`]]: true,
            [styles[`validity-${props.validity}`]]: Boolean(props.validity),
            [styles.disabled]: props.disabled,
            [styles['with-label']]: props.label !== undefined,
        };
    });

    const labelClassList = createMemo(() => {
        return {
            [styles[`label-size-${props.size ?? 'm'}`]]: true,
            [styles[`label-validity-${props.validity}`]]: Boolean(props.validity),
        };
    });

    return (
        <div
            class={styles.wrapper}
            classList={wrapperClassList()}
            onClick={() => inputRef.ref?.focus()}
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
            {props.before}
            {props.renderInput(inputRef)}
            {props.after}
        </div>
    );
};
