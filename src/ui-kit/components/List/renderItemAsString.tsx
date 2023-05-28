import { ListItem } from './ListItem';
import { FiniteListItemRenderer } from './types';

export const renderItemAsString: FiniteListItemRenderer<unknown> = (item) => {
    const asString = String(item);
    return <ListItem value={item}>{asString}</ListItem>;
};
