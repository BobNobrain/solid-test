import { Component, createMemo, JSX } from 'solid-js';
import { Size, Validity } from '../../../types';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import styles from './TextInput.css';

export interface TextInputProps {
    value: string;
    onUpdate?: (value: string) => void;

    placeholder?: string;
    isPassword?: boolean;
    name?: string;
    size?: Size;
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

    const classList = createMemo(() => {
        return {
            [styles[`size-${props.size ?? 'm'}`]]: true,
        };
    });

    return (
        <InputWrapper
            renderInput={(ref) => (
                <input
                    ref={ref.ref}

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
            )}
            size={props.size}
            validity={props.validity}
            disabled={props.disabled}
            before={props.before}
            after={props.after}
            label={props.label}
        />
    );
};
