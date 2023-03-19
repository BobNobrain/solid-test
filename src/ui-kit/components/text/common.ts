import { text } from '../../atoms/text/text';
import { Color, FontWeight, Size } from '../../types';

export interface StyleableTextProps {
    color?: Color;
    size?: Size;
    bold?: boolean;
    light?: boolean;
    dim?: boolean;
    italic?: boolean;
}

export function getTextStyles(props: StyleableTextProps) {
    let weight: FontWeight = 'normal';

    if (props.bold) {
        weight = 'bold';
    } else if (props.light) {
        weight = 'light';
    }

    return text({
        color: props.color,
        size: props.size,
        dim: props.dim,
        style: props.italic ? 'italic' : 'normal',
        weight,
    });
}
