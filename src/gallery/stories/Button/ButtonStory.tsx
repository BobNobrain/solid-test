import { Button } from '../../../ui-kit/components/Button/Button';
import { Color } from '../../../ui-kit/types';
import { Size } from '../../../ui-kit/utils/Size';
import { checkboxControl } from '../../components/controls/CheckboxControl';
import { colorRadioControl } from '../../components/controls/ColorRadioControl';
import { sizeRadioControl } from '../../components/controls/SizeRadioControl';
import { textControl } from '../../components/controls/TextControl';
import { StoryDescription } from '../../components/Story/types';

export interface ButtonStoryControls {
    label: string;
    loading: boolean;
    disabled: boolean;
    square: boolean;
    color: Color;
    size: Size;
}

export const ButtonStory: StoryDescription<ButtonStoryControls> = {
    title: 'Button',
    component: (props) => {
        return (
            <Button
                color={props.controls.color}
                outerSize={props.controls.size}
                loading={props.controls.loading}
                disabled={props.controls.disabled}
                square={props.controls.square}
            >
                {props.controls.label}
            </Button>
        );
    },
    controls: {
        color: colorRadioControl(),
        size: sizeRadioControl(),
        label: textControl({
            defaultValue: 'Button',
            label: 'Label',
        }),
        loading: checkboxControl({ label: 'Loading' }),
        disabled: checkboxControl({ label: 'Disabled' }),
        square: checkboxControl({ label: 'Square' }),
    },
};
