import { Component, createMemo, JSX } from 'solid-js';
import { Validity } from '../../../types';
import { Field } from '../Field/Field';
import styles from './TextInput.css';
import { Size } from '../../../utils/Size';
import { createRef } from '../../../utils/ref';
import { composeStyles } from '../../../utils/styles';
import { text } from '../../../atoms/text/text';

export interface TextInputProps {
    value: string;
    onUpdate?: (value: string) => void;

    placeholder?: string;
    isPassword?: boolean;
    name?: string;
    outerSize?: Size;
    validity?: Validity;
    disabled?: boolean;
    readonly?: boolean;

    inputMode?: JSX.HTMLAttributes<HTMLInputElement>['inputmode'];

    before?: JSX.Element;
    after?: JSX.Element;
    label?: string;
}

export const TextInput: Component<TextInputProps> = (props) => {
    const inputType = () => props.isPassword ? 'password' : 'text';
    const inputRef = createRef<HTMLInputElement>();

    const classList = createMemo(() => {
        return composeStyles(
            text({ size: props.outerSize ?? 'm' }),
            {
                [styles[`size-${props.outerSize ?? 'm'}`]]: true,
            },
        );
    });

    const focusInput = () => inputRef.value()?.focus();

    return (
        <Field
            outerSize={props.outerSize}
            innerSize={props.outerSize}
            validity={props.validity}
            disabled={props.disabled}
            label={props.label}
            onActivate={focusInput}
            behavior="text"
        >
            {props.before}
            <input
                ref={inputRef.ref}

                value={props.value}
                onInput={(ev) => props.onUpdate?.(ev.currentTarget.value)}

                class={styles.input}
                classList={classList()}
                type={inputType()}
                placeholder={props.placeholder}

                readonly={props.readonly}
                disabled={props.disabled}

                inputmode={props.inputMode}
                name={props.name}
            />
            {props.after}
        </Field>
    );
};
