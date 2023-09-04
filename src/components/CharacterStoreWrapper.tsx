import { Container } from '@chakra-ui/react'
import CharacterStoreContext from '../store/characterStoreContext';
import { useState } from 'react';

export default function StoreWrapper({ children }: { children: React.ReactElement }) {
    const [appStore, setAppStore] = useState({
        characterUrl: ''
    });
    const setCharacterUrl = (characterUrl: string) => {
        setAppStore({
            ...appStore,
            characterUrl,
        })
    }


    return (
        <CharacterStoreContext.Provider value={{ ...appStore, setCharacterUrl }} >
            <Container maxW='var(--chakra-sizes-container-md)'>{children}</Container>
        </CharacterStoreContext.Provider>
    )
}