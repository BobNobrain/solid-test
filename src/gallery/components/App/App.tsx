import { Component, createSignal } from 'solid-js';
import { container } from '../../../ui-kit/atoms/container/container';
import { Sidebar } from '../../../ui-kit/components/Sidebar/Sidebar';
import { SimpleList, SimpleListItem } from '../../../ui-kit/components/SimpleList/SimpleList';
import allStories from '../../stories';
import { Story } from '../Story/Story';

type StoryDesc = typeof allStories[number];

export const App: Component<{}> = () => {
    const sidebarItems = allStories.map((story): SimpleListItem<StoryDesc> => ({
        text: story.title,
        value: story,
    }));

    const [getActiveStory, setActiveStory] = createSignal(sidebarItems[0]);

    return (
        <div classList={container({ padding: 'none', align: 'stretch' })}>
            <Sidebar>
                <SimpleList
                    items={sidebarItems}
                    selected={getActiveStory()}
                    onPick={setActiveStory}
                />
            </Sidebar>
            <main classList={container({ align: 'stretch' })}>
                <Story
                    story={getActiveStory().value}
                />
            </main>
        </div>
    );
};
