'use client';
import { useEffect, useState, useContext } from "react"
import { fetchData } from "../utils/fetchData";
import { ICharacter } from "../utils/types";
import { PEOPLE_API_URL } from '../utils/constants';
import { Box, SimpleGrid, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import CharactersStoreContext from '../store/charactersStoreContext';
import { CharacterListCard, Pagination, SearchCharacterInput } from '../components';

export default function CharacterList() {
    const { characterList, totalCharacters, activePage, searchTerm, setCharacterList, setActivePage, setSearchTerm } = useContext(CharactersStoreContext);
    const [isDataLoading, setIsDataLoding] = useState<boolean>(false);

    // fetching character list from api on first load of page, here we can use also async/await but promise chain is also a good choose just for one fetch
    useEffect(() => {
        setIsDataLoding(true);
        fetchData({
            url: PEOPLE_API_URL, queryParams: {
                page: activePage, ...(!!searchTerm?.length ? { search: searchTerm } : {})
            }
        })
            .then(data => { setCharacterList(data?.results as ICharacter[], data?.count); })
            .finally(
                () => setIsDataLoding(false)
            );
    }, [activePage, searchTerm]);

    return (
        <>
            {!isDataLoading && <SearchCharacterInput onSearchTermChange={setSearchTerm} searchTerm={searchTerm} />}
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
                {!!characterList?.length && !isDataLoading && characterList?.map((character: ICharacter) => (
                    <CharacterListCard key={character.created} character={character} />
                ))}
            </SimpleGrid>
            { isDataLoading && <Box {...styledSpinnerWrapper}>
                <Spinner
                    thickness='4px'
                    speed='1.2s'
                    emptyColor='gray.200'
                    color='var(--chakra-colors-teal-500)'
                    size='xl'
                    {...styledSpinner}
                />
            </Box>
            }
            {!characterList?.length && !isDataLoading && !!searchTerm?.length && (
                <Alert status='warning'>
                    <AlertIcon />
                    Seems like no data is maching your criteria
                </Alert>
            )}
            <Pagination {...{ totalCharacters, setActivePage, activePage, disabled: isDataLoading }} />
        </>
    );
}

const styledSpinner = {
    h: '200px',
    w: '200px',
}
const styledSpinnerWrapper = {
    display: 'flex',
    justifyContent: 'center',
    margin: '150px auto'
}