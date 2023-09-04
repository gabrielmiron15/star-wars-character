import { Container } from '@chakra-ui/react'
import CharactersStoreContext from '../store/charactersStoreContext';
import { useState } from 'react';
import { ICharacter, IAppStore, IObject } from '../utils/types';

export default function StoreWrapper({ children }: { children: React.ReactElement }) {
    const [appStore, setAppStore] = useState<IAppStore>({
        characterList: [],
        activePage: 1,
        totalCharacters: 0,
        searchTerm: ''
    });
    const setCharacterList = (characterList: ICharacter[], totalCharacters: number) => {
        setAppStore({
            ...appStore,
            characterList,
            totalCharacters,
        })
    }
    const setActivePage = (activePage: number) => {
        setAppStore({
            ...appStore,
            activePage
        })
    }

    const setSearchTerm = (searchTerm: string) => {
        setAppStore({
            ...appStore,
            searchTerm,
            activePage: 1
        })
    }

    return (
        <CharactersStoreContext.Provider value={{ ...appStore, setCharacterList, setActivePage, setSearchTerm } as IObject} >
            <Container maxW='var(--chakra-sizes-container-md)'>{children}</Container>
        </CharactersStoreContext.Provider>
    )
}