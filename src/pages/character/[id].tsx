import { CharacterStoreWrapper } from '../../components';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Character } from '../../views';
import '../../app/globals.css'



export default function CharacterId() {

    const router = useRouter();
    const { query: { id } } = router;


    return (
        <ChakraProvider>
            <CharacterStoreWrapper>
                <Character id={id} />
            </CharacterStoreWrapper>
        </ChakraProvider>
    )
}
