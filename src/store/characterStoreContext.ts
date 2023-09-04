import { createContext } from 'react';

const CharacterStoreContext = createContext({
    characterUrl: '',
    setCharacterUrl: (url: string) => { }
});
export default CharacterStoreContext;