import { createSignal } from 'solid-js';
import { checkboxControl } from '../../components/controls/CheckboxControl';
import { StoryDescription } from '../../components/Story/types';
import { Dropdown } from '../../../ui-kit/components/Dropdown/Dropdown';
import { Button } from '../../../ui-kit/components/Button/Button';
import { createRef } from '../../../ui-kit/utils/ref';
import { createBoundsTracker } from '../../../ui-kit/utils/createBoundsTracker';

export interface DropdownStoryControls {
    ignoreInsideClicks: boolean;
    ignoreOutsideClicks: boolean;
    ignoreEscapeKey: boolean;
}

export const DropdownStory: StoryDescription<DropdownStoryControls> = {
    title: 'Dropdown',
    controls: {
        ignoreEscapeKey: checkboxControl({ label: 'Ignore Esc' }),
        ignoreInsideClicks: checkboxControl({ label: 'Ignore inside clicks' }),
        ignoreOutsideClicks: checkboxControl({ label: 'Ignore outside clicks' }),
    },
    component: (props) => {
        const target = createRef<HTMLDivElement>();
        const [getTargetBounds] = createBoundsTracker(target.value);

        const [getIsOpen, setIsOpen] = createSignal(false);
        const open = () => setIsOpen(true);
        const close = (reason: string) => {
            console.log(reason);
            setIsOpen(false);
        };

        return (
            <div style="padding-top: 200px; padding-left: 300px;">
                <div ref={target.ref} style="border: 1px red dashed; width: 150px; height: 50px">
                    <Button onClick={open}>Open</Button>
                </div>
                <Dropdown
                    target={getTargetBounds()}
                    lengthConstraint="longer"

                    isOpen={getIsOpen()}
                    onClose={close}

                    ignoreEscapeKey={props.controls.ignoreEscapeKey}
                    ignoreInsideClicks={props.controls.ignoreInsideClicks}
                    ignoreOutsideClicks={props.controls.ignoreOutsideClicks}
                >
                    Hello there!
                </Dropdown>
            </div>
        );
    },
};
