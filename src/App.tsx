import { router } from './Router';
import { AiClassificationProvider } from './contexts/AiClassificationContext';
import { FoldersProvider } from './contexts/FetchFoldersContext';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<FoldersProvider>
			<AiClassificationProvider>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<RouterProvider router={router} />
				</ThemeProvider>
			</AiClassificationProvider>
		</FoldersProvider>
	);
}

export default App;
