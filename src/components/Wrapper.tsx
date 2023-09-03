import { Container } from '@chakra-ui/react'
import AppContext from '../store/context';
import { useState } from 'react';

export default function Wrapper({ children }: { children: React.ReactElement }) {
    const [appStore, setAppStore] = useState({
        characterList: [],
        activePage: 1,
        totalCharacters: 0,
    });
    const setCharacterList = (chList: any, total: number) => {
        setAppStore({
            ...appStore,
            characterList: chList,
            totalCharacters: total,
        })
    }
    const setActivePage = (page: number) => {
        setAppStore({
            ...appStore,
            activePage: page
        })
    }

    return (
        <AppContext.Provider value={{ ...appStore, setCharacterList, setActivePage }} >
            <Container maxW='var(--chakra-sizes-container-md)'>{children}</Container>
        </AppContext.Provider>
    )
}