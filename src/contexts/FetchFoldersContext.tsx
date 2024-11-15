import axios from 'axios';
import React, { createContext, useCallback, useContext, useState } from 'react';

interface Folder {
	id: string;
	name: string;
}

interface FoldersContextProps {
	folders: Folder[];
	fetchFolders: () => Promise<void>;
	addFolder: (name: string) => Promise<void>;
	deleteFolder: (id: string) => Promise<void>;
}

const FoldersContext = createContext<FoldersContextProps | undefined>(undefined);

export const FoldersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [folders, setFolders] = useState<Folder[]>([]);
	const BASE_URL = import.meta.env.VITE_BASE_URL;

	const fetchFolders = useCallback(async () => {
		try {
			const accessToken = localStorage.getItem('access-token');
			if (!accessToken) throw new Error('Access token not found');

			const response = await axios.get(`${BASE_URL}/api/v1/folders`, {
				headers: { access: accessToken },
			});
			setFolders(response.data.result || []);
		} catch (error) {
			console.error('Error fetching folders:', error);
		}
	}, [BASE_URL]);

	const addFolder = useCallback(
		async (name: string) => {
			try {
				const accessToken = localStorage.getItem('access-token');
				if (!accessToken) throw new Error('Access token not found');

				const response = await axios.post(`${BASE_URL}/api/v1/folders`, { name }, { headers: { access: accessToken } });
				setFolders((prev) => [...prev, response.data.result]);
			} catch (error) {
				console.error('Error adding folder:', error);
			}
		},
		[BASE_URL],
	);

	const deleteFolder = useCallback(
		async (id: string) => {
			try {
				const accessToken = localStorage.getItem('access-token');
				if (!accessToken) throw new Error('Access token not found');

				await axios.delete(`${BASE_URL}/api/v1/folders/${id}`, {
					headers: { access: accessToken },
				});
				setFolders((prev) => prev.filter((folder) => folder.id !== id));
			} catch (error) {
				console.error('Error deleting folder:', error);
			}
		},
		[BASE_URL],
	);

	return (
		<FoldersContext.Provider value={{ folders, fetchFolders, addFolder, deleteFolder }}>
			{children}
		</FoldersContext.Provider>
	);
};

export const useFolders = () => {
	const context = useContext(FoldersContext);
	if (!context) {
		throw new Error('useFolders must be used within a FoldersProvider');
	}
	return context;
};
