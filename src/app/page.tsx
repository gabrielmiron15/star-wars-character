'use client'
import { Header, CharactersStoreWrapper } from '../components';
import { CharacterList } from '../views';
import styles from './page.module.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

const title: string = 'Star Wars Character Explorer';
export default function Home() {
  return (
    <>
      <ChakraProvider>
        <CharactersStoreWrapper>
          <>
            <Header title={title} />
            <CharacterList />
          </>
        </CharactersStoreWrapper>
      </ChakraProvider>
    </>
  )
}
