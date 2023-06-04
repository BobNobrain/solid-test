import { FiniteList, ListItem } from '../../../ui-kit/components/List';
import { Color } from '../../../ui-kit/types';
import { Size } from '../../../ui-kit/utils/Size';
import { colorRadioControl } from '../../components/controls/ColorRadioControl';
import { sizeRadioControl } from '../../components/controls/SizeRadioControl';
import { StoryDescription } from '../../components/Story/types';

export interface ListStoryControls {
    color: Color;
    size: Size;
}

export const FiniteListStory: StoryDescription<ListStoryControls> = {
    title: 'FiniteList',
    component: (props) => {
        const items = ['a', 'b', 'c'];

        return (
            <FiniteList
                items={items}
                renderItem={(item) => <ListItem value={item}>{item}</ListItem>}
                emptyState={<div>Nothing</div>}
            />
        );
    },
    controls: {
        color: colorRadioControl(),
        size: sizeRadioControl(),
    },
};
