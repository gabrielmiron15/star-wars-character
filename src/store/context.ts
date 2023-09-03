import { createContext } from 'react';

const AppContext = createContext({
    characterList: [],
    activePage: 1,
    totalCharacters: 0,
    setCharacterList: (chList: any, total: number) => { },
    setActivePage: (page: number) => { }
});
export default AppContext;