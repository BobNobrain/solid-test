import { Picker } from '../../../ui-kit/components/Picker/Picker';
import { Size } from '../../../ui-kit/utils/Size';
import { checkboxControl } from '../../components/controls/CheckboxControl';
import { sizeRadioControl } from '../../components/controls/SizeRadioControl';
import { textControl } from '../../components/controls/TextControl';
import { StoryDescription } from '../../components/Story/types';

export interface PickerStoryControls {
    label: string;
    disabled: boolean;
    size: Size;
    hasChevron: boolean;
    autoClose: boolean;
}

export const PickerStory: StoryDescription<PickerStoryControls> = {
    title: 'Picker',
    component: (props) => {
        return (
            <Picker
                currentValue="I am current value"

                size={props.controls.size}
                disabled={props.controls.disabled}
                label={props.controls.label}

                hasArrowIcon={props.controls.hasChevron}
                autoClose={props.controls.autoClose}
            >
                ...Click here to pick a value...
            </Picker>
        );
    },
    controls: {
        size: sizeRadioControl(),
        label: textControl({
            defaultValue: 'Picker',
            label: 'Label',
        }),
        disabled: checkboxControl({ label: 'Disabled' }),
        hasChevron: checkboxControl({ label: 'Chevron', defaultValue: true }),
        autoClose: checkboxControl({ label: 'Auto close on inner click' }),
    },
};
