import { router } from './Router';
import { AiClassificationProvider } from './contexts/AiClassificationContext';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<AiClassificationProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<RouterProvider router={router} />
			</ThemeProvider>
		</AiClassificationProvider>
	);
}

export default App;
