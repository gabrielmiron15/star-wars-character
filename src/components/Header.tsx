import { Heading } from '@chakra-ui/react'
interface IHeader {
    title: string;
}
export default function Header({ title }: IHeader) {
    return <Heading as='h1' size='xl' {...styledHeader} > {title} </Heading>
}

const styledHeader = {
    color: 'var(--chakra-colors-teal-500)',
    padding: '30px 0',
    align: 'center',
}