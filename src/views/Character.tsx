'use client';
import { useEffect, useState } from "react"
import { fetchData, fetchMultipleUrls } from "../utils/fetchData";
import { ICharacter, IObject } from "../utils/types";
import { PEOPLE_API_URL } from '../utils/constants';
import { Box, Spinner, Alert, AlertIcon, Button } from '@chakra-ui/react';
import { Header, CharacterCard } from '../components';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation'


export default function Character({ id }: { id: string | string[] | undefined }) {
    const router = useRouter();

    const [isDataLoading, setIsDataLoding] = useState<boolean>(false);
    const [err, setErr] = useState<string | undefined>();
    const [characterData, setCharacterData] = useState<ICharacter | IObject>({ name: '' });
    const [films, setFilms] = useState<IObject[] | undefined>(undefined);
    const [starships, setStarships] = useState<IObject[] | undefined>(undefined);
    const [vehicles, setVehicles] = useState<IObject[] | undefined>(undefined);

    // fetching character list from api on first load of page, here we can use also async/await but promise chain is also a good choose just for one fetch
    useEffect(() => {
        setIsDataLoding(true);
        if (id) {
            fetchData({
                url: `${PEOPLE_API_URL}/${id}`
            })
                .then(data => { setCharacterData(data); })
                .catch((e) => setErr(e))
                .finally(
                    () => setIsDataLoding(false)
                );
        }
    }, [id]);

    useEffect(() => {
        if (characterData?.films) {
            fetchMultipleUrls(characterData?.starships).then(data => setFilms(data))
        }
    }, [
        characterData?.films
    ]);
    useEffect(() => {
        if (characterData?.starships) {
            fetchMultipleUrls(characterData?.starships).then(data => setStarships(data))
        }
    }, [
        characterData?.starships
    ]);
    useEffect(() => {
        if (characterData?.vehicles) {
            fetchMultipleUrls(characterData?.vehicles).then(data => setVehicles(data))
        }
    }, [
        characterData?.vehicles
    ]);


    return (
        <>
            <Header title={characterData.name} />
            { isDataLoading && <Box {...styledSpinnerWrapper}>
                <Spinner
                    thickness='4px'
                    speed='1.2s'
                    emptyColor='gray.200'
                    color='teal.500'
                    size='xl'
                    {...styledSpinner}
                />
            </Box>
            }
            {!isDataLoading && !!characterData.name && <CharacterCard character={characterData} {...{ films, vehicles, starships }} />}
            {err && !isDataLoading && (
                <Alert status='warning'>
                    <AlertIcon />
                    Woops, something went wrong, please try again latere!
                </Alert>
            )}


            <Box mt="10" mb="20">
                <Button leftIcon={<ArrowBackIcon />} colorScheme='teal' variant='outline' onClick={() => router.push('/')}>
                    Back
            </Button>
            </Box>
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