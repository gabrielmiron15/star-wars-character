import { createContext } from 'react';
import { ICharacter, IObject } from '../utils/types';

const CharactersStoreContext = createContext({
    characterList: [],
    activePage: 1,
    totalCharacters: 0,
    searchTerm: '',
    setCharacterList: (characterList: ICharacter[], total: number) => { },
    setActivePage: (page: number) => { },
    setSearchTerm: (term: string) => { }
} as IObject);
export default CharactersStoreContext;