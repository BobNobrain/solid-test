import type { Component } from 'solid-js';

export function partial<P1 extends {}, P2 extends {}>(C: Component<P1 & P2>, props1: P1): Component<P2> {
    return function PartiallyApplied(props2: P2) {
        return (
            <C {...props1} {...props2}/>
        );
    };
}
