import { router } from './Router';
import { AiClassificationProvider } from './contexts/AiClassificationContext';
import { FoldersProvider } from './contexts/FetchFoldersContext';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { CurrentCategoryProvider } from '@/contexts/CurrentCategoryContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<CurrentCategoryProvider>
			<DndProvider backend={HTML5Backend}>
				<FoldersProvider>
					<AiClassificationProvider>
						<ThemeProvider theme={theme}>
							<GlobalStyle />
							<RouterProvider router={router} />
						</ThemeProvider>
					</AiClassificationProvider>
				</FoldersProvider>
			</DndProvider>
		</CurrentCategoryProvider>
	);
}

export default App;
