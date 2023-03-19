import { render } from 'solid-js/web';
import { App } from './components/App/App';
import '../ui-kit/index.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(() => <App/>, document.getElementById('app')!);
