import { StoryDescription } from '../components/Story/types';
import { ButtonStory } from './Button/ButtonStory';
import { CheckboxStory } from './Checkbox/CheckboxStory';
import { TextInputStory } from './TextInput/TextInputStory';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const allStories: StoryDescription<any>[] = [
    ButtonStory,
    TextInputStory,
    CheckboxStory,
];

export default allStories;
