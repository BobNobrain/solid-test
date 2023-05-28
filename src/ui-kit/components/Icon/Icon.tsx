import { createMemo, JSX, ParentComponent } from 'solid-js';
import { Color } from '../../types';
import { Size, pixelSize } from '../../utils/Size';
import styles from './Icon.css';

export interface IconProps {
    size?: Size;
    color?: Color | 'icon';
    rotate?: number;
    flipHorizontally?: boolean;
    flipVertically?: boolean;
    viewBox?: string;
}

export const Icon: ParentComponent<IconProps> = (props) => {
    const css = createMemo<JSX.CSSProperties | undefined>(() => {
        const transforms: string[] = [];

        if (props.rotate) {
            transforms.push(`rotate(${props.rotate}deg)`);
        }
        if (props.flipHorizontally || props.flipVertically) {
            transforms.push(`scale(${props.flipHorizontally ? '-1' : '1'}, ${props.flipVertically ? '-1' : 1})`);
        }

        if (!transforms.length) {
            return undefined;
        }

        return {
            transform: transforms.join(' '),
        };
    });

    const sizePx = createMemo(() => `${pixelSize[props.size ?? 'm']}px`);

    return (
        <svg
            width={sizePx()}
            height={sizePx()}
            viewBox={props.viewBox ?? '0 0 100 100'}
            class={styles.icon}
            classList={{
                // [styles[`size-${props.size ?? 'm'}`]]: true,
                [styles[`color-${props.color ?? 'icon'}`]]: true,
            }}
            style={css()}
        >
            {props.children}
        </svg>
    );
};
