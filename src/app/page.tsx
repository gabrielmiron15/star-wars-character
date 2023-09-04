'use client'
import { Header, StoreWrapper } from '../components';
import { CharacterList } from '../views';
import styles from './page.module.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

const title: string = 'Star Wars Character Explorer';
export default function Home() {
  return (
    <>
      <ChakraProvider>
        <StoreWrapper>
          <>
            <Header title={title} />
            <CharacterList />
          </>
        </StoreWrapper>
      </ChakraProvider>
    </>
  )
}
