import { BrowserRouter } from 'react-router';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './lib/Router';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
