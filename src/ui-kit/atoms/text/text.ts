import {
    Color,
    FontStyle,
    FontWeight,
    Size,
} from '../../types';
import styles from './text.css';

interface TextState {
    color?: Color;
    size?: Size;
    weight?: FontWeight;
    style?: FontStyle;
    dim?: boolean;
}

export function text(props: TextState): Record<string, boolean | undefined> {
    return {
        [styles.text]: true,
        [styles[`color-${props.color}`]]: Boolean(props.color),
        [styles[`size-${props.size}`]]: Boolean(props.size),
        [styles[`weight-${props.weight}`]]: Boolean(props.weight),
        [styles[`style-${props.style}`]]: Boolean(props.style),
        [styles[`dim-${props.dim}`]]: props.dim !== undefined,
    };
}
