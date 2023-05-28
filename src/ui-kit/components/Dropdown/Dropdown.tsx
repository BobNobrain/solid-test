import {
    ParentComponent, Show, createEffect, onCleanup,
} from 'solid-js';
import { Popup, PopupProps } from '../Popup/Popup';
import { Keyboard, hasModifiers } from '../../utils/keyboard';
import { card } from '../../atoms/card/card';
import { composeStyles } from '../../utils/styles';
import { container } from '../../atoms/container/container';

export type DropdownCloseReason = 'click-inside' | 'click-outside' | 'escape-key';

export interface DropdownProps extends PopupProps {
    isOpen: boolean;
    onClose?: (reason: DropdownCloseReason) => void;

    ignoreInsideClicks?: boolean;
    ignoreOutsideClicks?: boolean;
    ignoreEscapeKey?: boolean;
}

export const Dropdown: ParentComponent<DropdownProps> = (props) => {
    const popupProps = () => {
        const {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            isOpen, onClose,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            ignoreInsideClicks, ignoreEscapeKey, ignoreOutsideClicks,
            ...popupProps
        } = props;
        return popupProps;
    };

    let wrapperRef!: HTMLDivElement;

    createEffect(() => {
        if (!props.onClose || props.ignoreOutsideClicks || !props.isOpen) {
            return;
        }

        const listener = (e: MouseEvent) => {
            if (!wrapperRef) {
                return;
            }

            if (!wrapperRef.contains(e.target as HTMLElement)) {
                props.onClose?.('click-outside');
            }
        };

        document.body.addEventListener('click', listener);
        onCleanup(() => document.body.removeEventListener('click', listener));
    });

    const onClickInside = () => {
        if (props.ignoreInsideClicks) {
            return;
        }

        props.onClose?.('click-inside');
    };

    createEffect(() => {
        if (props.ignoreEscapeKey || !props.onClose) {
            return;
        }

        const listener = (ev: KeyboardEvent) => {
            if (ev.key !== Keyboard.Escape || hasModifiers(ev)) {
                return;
            }

            ev.preventDefault();
            props.onClose?.('escape-key');
        };

        // using keydown here because native events that should be prevented
        // also use keydown for some reason
        document.addEventListener('keydown', listener);
        onCleanup(() => document.removeEventListener('keydown', listener));
    });

    return (
        <Show when={props.isOpen}>
            <Popup
                {...popupProps()}
            >
                <div
                    ref={wrapperRef}
                    onClick={onClickInside}
                    classList={composeStyles(
                        card({ elevated: true }),
                        container({ padding: 'm', gap: 'none' }),
                    )}
                >
                    {props.children}
                </div>
            </Popup>
        </Show>
    );
};
