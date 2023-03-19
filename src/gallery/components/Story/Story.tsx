import { createEffect, For } from 'solid-js';
import { createStore } from 'solid-js/store';
import { Dynamic } from 'solid-js/web';
import { StoryDescription } from './types';
import styles from './Story.css';
import { StoryControlDescription } from '../controls/types';
import { container } from '../../../ui-kit/atoms/container/container';

interface StoryProps<T> {
    story: StoryDescription<T>;
}

export function Story<T extends Record<string, unknown>>(props: StoryProps<T>) {
    const [state, setState] = createStore({} as T);

    createEffect(() => {
        const initialState = {} as T;
        for (const [key, value] of Object.entries(props.story.controls) as [
            keyof T,
            StoryControlDescription<T[keyof T]>
        ][]) {
            initialState[key] = value.defaultValue;
        }

        setState(initialState);
    });

    return (
        <div classList={container({ direction: 'column', align: 'stretch' })}>
            <div class={styles.canvas}>
                <Dynamic
                    component={props.story.component}
                    controls={state}
                />
            </div>
            <div class={styles.controls}>
                <For
                    each={Object.entries(props.story.controls) as [keyof T, StoryControlDescription<T[keyof T]>][]}
                >
                    {([key, value]) => (
                        <Dynamic
                            component={value.component}
                            value={state[key]}
                            onUpdate={(v: T[keyof T]) => {
                                setState({ [key]: v } as never);
                            }}
                        />
                    )}
                </For>
            </div>
        </div>
    );
}
