import { Container } from '@chakra-ui/react'

export default function Layout({ children }: { children: React.ReactElement }) {
    return (
        <Container maxW='var(--chakra-sizes-container-md)'>{children}</Container>
    )
}