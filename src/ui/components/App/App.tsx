import { createSignal } from 'solid-js';
import { Button } from '../../../ui-kit/components/Button/Button';

export function App() {
    const [getN, setN] = createSignal(0);

    return (
        <div>
            <h1>{getN()}</h1>
            <Button onClick={() => setN(getN() + 1)}>CLICKBAIT</Button>
        </div>
    );
}
