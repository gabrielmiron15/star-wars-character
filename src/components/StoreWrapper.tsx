import { Container } from '@chakra-ui/react'
import AppContext from '../store/context';
import { useState } from 'react';
import { ICharacter, IAppStore } from '../utils/types';

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
    console.log(appStore, '------');

    return (
        <AppContext.Provider value={{ ...appStore, setCharacterList, setActivePage, setSearchTerm }} >
            <Container maxW='var(--chakra-sizes-container-md)'>{children}</Container>
        </AppContext.Provider>
    )
}