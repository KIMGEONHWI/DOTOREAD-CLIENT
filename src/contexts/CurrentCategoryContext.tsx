import { ReactNode, createContext, useContext, useState } from 'react';

interface CurrentCategoryContextType {
	currentCategory: string;
	setCurrentCategory: (category: string) => void;
}

const CurrentCategoryContext = createContext<CurrentCategoryContextType | undefined>(undefined);

export const CurrentCategoryProvider = ({ children }: { children: ReactNode }) => {
	const [currentCategory, setCurrentCategory] = useState<string>('모든 북마크');

	return (
		<CurrentCategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
			{children}
		</CurrentCategoryContext.Provider>
	);
};

export const useCurrentCategory = () => {
	const context = useContext(CurrentCategoryContext);
	if (!context) {
		throw new Error('useCurrentCategory must be used within a CurrentCategoryProvider');
	}
	return context;
};
