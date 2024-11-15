import { ReactNode, createContext, useContext, useState } from 'react';

interface Folder {
	id: number;
	name: string;
}

interface Bookmark {
	bookmarkId: number;
	title: string;
	url: string;
	img: string | null;
	createdAt: string;
	folder: Folder;
}

interface AiClassificationContextProps {
	classifiedData: Bookmark[];
	setClassifiedData: (data: Bookmark[]) => void;
}

const AiClassificationContext = createContext<AiClassificationContextProps | undefined>(undefined);

export const AiClassificationProvider = ({ children }: { children: ReactNode }) => {
	const [classifiedData, setClassifiedData] = useState<Bookmark[]>([]);

	return (
		<AiClassificationContext.Provider value={{ classifiedData, setClassifiedData }}>
			{children}
		</AiClassificationContext.Provider>
	);
};

export const useAiClassificationContext = () => {
	const context = useContext(AiClassificationContext);
	if (!context) {
		throw new Error('useAiClassificationContext must be used within a AiClassificationProvider');
	}
	return context;
};
