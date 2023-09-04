import { createContext } from 'react';
import { ICharacter } from '../utils/types';

const AppContext = createContext({
    characterList: [],
    activePage: 1,
    totalCharacters: 0,
    searchTerm: '',
    setCharacterList: (chList: ICharacter[], total: number) => { },
    setActivePage: (page: number) => { },
    setSearchTerm: (term: string) => { }
});
export default AppContext;