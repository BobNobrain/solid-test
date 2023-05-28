import { createSignal } from 'solid-js';
import { TextInput } from '../../../ui-kit/components/inputs/TextInput/TextInput';
import { Size } from '../../../ui-kit/utils/Size';
import { checkboxControl } from '../../components/controls/CheckboxControl';
import { sizeRadioControl } from '../../components/controls/SizeRadioControl';
import { textControl } from '../../components/controls/TextControl';
import { StoryDescription } from '../../components/Story/types';

export interface TextInputStoryControls {
    label: string;
    noLabel: boolean;
    placeholder: string;
    disabled: boolean;
    size: Size;
}

export const TextInputStory: StoryDescription<TextInputStoryControls> = {
    title: 'TextInput',
    controls: {
        label: textControl({ defaultValue: 'Label', label: 'Label' }),
        noLabel: checkboxControl({ label: 'No label' }),
        size: sizeRadioControl(),
        placeholder: textControl({ defaultValue: '', label: 'Placeholder' }),
        disabled: checkboxControl({ label: 'Disabled' }),
    },
    component: (props) => {
        const [getText, setText] = createSignal('');
        return (
            <TextInput
                value={getText()}
                onUpdate={setText}
                label={props.controls.noLabel ? undefined : props.controls.label}
                placeholder={props.controls.placeholder}
                disabled={props.controls.disabled}
                outerSize={props.controls.size}
            />
        );
    },
};
