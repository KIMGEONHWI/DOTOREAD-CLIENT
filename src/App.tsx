import { router } from './Router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<RouterProvider router={router} />
			</ThemeProvider>
		</>
	);
}

export default App;


