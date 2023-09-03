'use client'
import { CharacterList, Header, Layout } from '../components';
import styles from './page.module.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

const title: string = 'Star Wars Character Explorer';
export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Layout>
          <>
            <Header title={title} />
            <CharacterList />
          </>
        </Layout>
      </ChakraProvider>
    </>
  )
}
