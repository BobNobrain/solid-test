export type Atom<State> = (atomState: State) => Record<string, boolean | undefined>;
