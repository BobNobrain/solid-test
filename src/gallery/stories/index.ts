import { StoryDescription } from '../components/Story/types';
import { ButtonStory } from './Button/ButtonStory';
import { CheckboxStory } from './Checkbox/CheckboxStory';
import { PopupStory } from './Popup/PopupStory';
import { TextInputStory } from './TextInput/TextInputStory';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const allStories: StoryDescription<any>[] = [
    ButtonStory,
    TextInputStory,
    CheckboxStory,
    PopupStory,
];

export default allStories;
