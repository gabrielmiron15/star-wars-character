'use client';
import { useEffect, useState, useContext } from "react"
import { fetchData } from "../utils/fetchData";
import { ICharacter } from "../utils/types";
import { PEOPLE_API_URL } from '../utils/constants';
import { format } from 'date-fns';
import { Card, CardHeader, CardBody, Stack, StackDivider, Heading, Text, Box, SimpleGrid, GridItem, Spinner, Avatar } from '@chakra-ui/react';
import AppContext from '../store/context';
import Pagination from './Pagination';

export default function CharacterList() {
    const { characterList, setCharacterList, activePage } = useContext(AppContext);
    const [isDataLoading, setIsDataLoding] = useState<boolean>(false);

    // fetching character list from api on first load of page, here we can use also async/await but promise chain is also a good choose just for one fetch
    useEffect(() => {
        setIsDataLoding(true);
        fetchData({ url: PEOPLE_API_URL, queryParams: { page: activePage } })
            .then(data => { setCharacterList(data?.results, data?.count); })
            .finally(
                () => setIsDataLoding(false)
            );
    }, [activePage]);


    console.log(characterList);
    return (
        <>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
                {!!characterList?.length && !isDataLoading && characterList?.map((character: ICharacter) => (
                    <GridItem w='100%' key={character.created}>

                        <Card margin='20px 0'>
                            <CardHeader>
                                <Heading size='md' {...styledHeading}><Avatar bg='teal.500' margin='0 20px 0 0' />{character.name}</Heading>
                            </CardHeader>

                            <CardBody>
                                <Stack divider={<StackDivider />} spacing='4'>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Birth year
                                </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            {character.birth_year}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Height
                                </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            {character.height}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Date Created
                                </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            {format(new Date(character.created), 'dd/MM/yyyy HH:MM')}
                                        </Text>
                                    </Box>
                                </Stack>
                            </CardBody>
                        </Card>
                    </GridItem>
                ))}
            </SimpleGrid>
            { isDataLoading && <Box {...styledSpinnerWrapper}>
                <Spinner
                    thickness='4px'
                    speed='1.2s'
                    emptyColor='gray.200'
                    color='var(--chakra-colors-teal-500)'
                    size='2xl'
                    {...styledSpinner}
                />
            </Box>
            }
            <Pagination disabled={isDataLoading} />
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
    margin: '40px'
}

const styledHeading = {
    display: 'flex',
    alignItems: 'center',
}
