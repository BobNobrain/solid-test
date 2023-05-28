import { createSignal } from 'solid-js';
import { Checkbox } from '../../../ui-kit/components/inputs/Checkbox/Checkbox';
import { Color } from '../../../ui-kit/types';
import { Size } from '../../../ui-kit/utils/Size';
import { checkboxControl } from '../../components/controls/CheckboxControl';
import { colorRadioControl } from '../../components/controls/ColorRadioControl';
import { sizeRadioControl } from '../../components/controls/SizeRadioControl';
import { textControl } from '../../components/controls/TextControl';
import { StoryDescription } from '../../components/Story/types';

export interface CheckboxStoryControls {
    label: string;
    loading: boolean;
    disabled: boolean;
    color: Color;
    size: Size;
    indeterminate: boolean;
}

export const CheckboxStory: StoryDescription<CheckboxStoryControls> = {
    title: 'Checkbox',
    component: (props) => {
        const [getValue, setValue] = createSignal(false);

        return (
            <Checkbox
                value={props.controls.indeterminate ? undefined : getValue()}
                onUpdate={setValue}

                color={props.controls.color}
                size={props.controls.size}
                // loading={props.controls.loading}
                disabled={props.controls.disabled}
                label={props.controls.label}
            />
        );
    },
    controls: {
        color: colorRadioControl(),
        size: sizeRadioControl(),
        label: textControl({
            defaultValue: 'Checkbox',
            label: 'Label',
        }),
        loading: checkboxControl({ label: 'Loading' }),
        disabled: checkboxControl({ label: 'Disabled' }),
        indeterminate: checkboxControl({ label: 'Indeterminate' }),
    },
};
