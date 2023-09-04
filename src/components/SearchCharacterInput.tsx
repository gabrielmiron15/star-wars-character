
import { InputLeftElement, InputGroup, Input } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { useDebouncedCallback } from 'use-debounce';
import { ChangeEvent } from 'react';

interface SearchCharacterInput {
    onSearchTermChange: (term: string) => void;
    searchTerm: string;
}
export default function SearchCharacterInput({ onSearchTermChange, searchTerm }: SearchCharacterInput) {
    const handleInputChange = useDebouncedCallback((value: string) => {
        onSearchTermChange(value as string);

    }, 1000)
    return <InputGroup size='md' {...styledInputGroup}>
        <Input
            pl='4.5rem'
            type='text'
            placeholder='Search for character'
            defaultValue={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.value)}
        />
        <InputLeftElement width='4.5rem'>
            <Search2Icon color="teal.500" />
        </InputLeftElement>
    </InputGroup>

}

const styledInputGroup = {
    margin: '40px 0',
}