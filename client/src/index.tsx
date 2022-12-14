import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import App from './components/App/App';
import './index.scss'

const root = createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>
);
