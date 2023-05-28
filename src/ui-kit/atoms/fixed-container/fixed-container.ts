import type { ContainerAlignment } from '../container/container';
import { Color } from '../../types';
import {
    Size,
    smallerSize, largerSize,
    DEFAULT_OUTER_SIZE, DEFAULT_INNER_SIZE,
} from '../../utils/Size';
import { Atom } from '../types';
import styles from './fixed-container.css';

export interface FixedContainerState {
    horizontalAlignment?: ContainerAlignment;
    verticalAlignment?: ContainerAlignment;

    outerSize?: Size;
    innerSize?: Size;

    borderColor?: Color;
    backgroundColor?: Color | 'none';
}

export const fixedContainer: Atom<FixedContainerState> = ({
    horizontalAlignment = 'start',
    verticalAlignment = 'center',
    borderColor = 'default',
    backgroundColor = 'none',
    ...sizes
}) => {
    let outerSize = sizes.outerSize ?? DEFAULT_OUTER_SIZE;
    let innerSize = sizes.innerSize ?? DEFAULT_INNER_SIZE;

    if (sizes.outerSize && !sizes.innerSize) {
        innerSize = smallerSize[outerSize] ?? 'xs';
    } else if (sizes.innerSize && !sizes.outerSize) {
        outerSize = largerSize[innerSize] ?? 'xl';
    }

    return {
        [styles['fixed-container']]: true,
        [styles[`halign-${horizontalAlignment}`]]: true,
        [styles[`valign-${verticalAlignment}`]]: true,
        [styles[`border-${borderColor}`]]: true,
        [styles[`bg-${backgroundColor}`]]: true,
        [styles[`outer-size-${outerSize}`]]: true,
        [styles[`inner-size-${innerSize}`]]: true,
    };
};
