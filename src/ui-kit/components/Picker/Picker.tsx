import {
    JSX,
    ParentProps,
    createSignal,
    Show,
} from 'solid-js';
import { IconChevron } from '../../icons/IconChevron';
import { Validity } from '../../types';
import { createBoundsTracker } from '../../utils/createBoundsTracker';
import { createRef } from '../../utils/ref';
import { DEFAULT_OUTER_SIZE, Size, smallerSize } from '../../utils/Size';
import { Dropdown } from '../Dropdown/Dropdown';
import { Icon } from '../Icon/Icon';
import { Field } from '../inputs/Field/Field';
import { PopupLengthConstraint, PopupPlacement } from '../Popup/types';
import styles from './Picker.css';

export interface PickerProps {
    currentValue: JSX.Element;

    label?: string;
    size?: Size;
    validity?: Validity;
    disabled?: boolean;

    placements?: PopupPlacement[];
    lengthConstraint?: PopupLengthConstraint;
    hasArrowIcon?: boolean;
    autoClose?: boolean;
}

export function Picker(props: ParentProps<PickerProps>): JSX.Element {
    const trigger = createRef<HTMLElement>();
    const [getTriggerBounds] = createBoundsTracker(trigger.value);

    const [isOpen, setIsOpen] = createSignal(false);

    const onActivate = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    return (
        <Field
            ref={trigger.ref}

            label={props.label}
            outerSize={props.size ?? DEFAULT_OUTER_SIZE}
            validity={props.validity}
            disabled={props.disabled}

            isActive={isOpen()}
            onActivate={onActivate}
            behavior="clickable"
        >
            <div class={styles['current-value']}>
                {props.currentValue}
            </div>
            <Show when={props.hasArrowIcon}>
                <div class={styles.arrow}>
                    <Icon rotate={isOpen() ? 180 : 0} size={smallerSize[props.size ?? DEFAULT_OUTER_SIZE] ?? 'xs'}>
                        <IconChevron/>
                    </Icon>
                </div>
            </Show>
            <Dropdown
                target={getTriggerBounds()}
                placements={props.placements}
                lengthConstraint={props.lengthConstraint ?? 'longer'}
                gap={4}

                isOpen={isOpen()}
                onClose={onClose}

                ignoreInsideClicks={!props.autoClose}
            >
                {props.children}
            </Dropdown>
        </Field>
    );
}
