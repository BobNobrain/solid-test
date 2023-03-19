type ClassListOrClassName = Record<string, boolean | undefined> | string | undefined

export function composeStyles(
    ...args: ClassListOrClassName[]
): Record<string, boolean | undefined> {
    const result: Record<string, boolean | undefined> = {};

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
