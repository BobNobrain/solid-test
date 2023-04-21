// import { checkboxControl } from '../../components/controls/CheckboxControl';
import { textControl } from '../../components/controls/TextControl';
import { StoryDescription } from '../../components/Story/types';
import { Popup } from '../../../ui-kit/components/Popup/Popup';
import { PopupPlacement } from '../../../ui-kit/components/Popup/types';

export interface PopupStoryControls {
    minWidth: string;
    minHeight: string;
}

export const PopupStory: StoryDescription<PopupStoryControls> = {
    title: 'Popup',
    controls: {
        minWidth: textControl({ label: 'Min Width' }),
        minHeight: textControl({ label: 'Min Height' }),
    },
    component: (props) => {
        let target!: HTMLDivElement;

        const placements: PopupPlacement[] = ['top-center'];

        return (
            <div style="padding-top: 200px; padding-left: 300px;">
                <div ref={target} style="border: 1px red dashed; width: 150px; height: 50px">I am target</div>
                <Popup
                    target={target}
                    placements={placements}
                    lengthConstraint="longer"
                >
                    <div style="border: 1px green solid">
                        :)
                    </div>
                </Popup>
            </div>
        );
    },
};
