export type Styles = Record<string, boolean | undefined>;

type ClassListOrClassName = Styles | string | undefined

export function composeStyles(
    ...args: ClassListOrClassName[]
): Styles {
    const result: Styles = {};

    for (const classes of args) {
        if (!classes) {
            continue;
        }

        if (typeof classes === 'string') {
            result[classes] = true;
            continue;
        }

        Object.assign(result, classes);
    }

    return result;
}
