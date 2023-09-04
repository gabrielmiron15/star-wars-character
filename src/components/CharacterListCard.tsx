'use client';
import { ICharacter } from "../utils/types";;
import { format } from 'date-fns';
import { Card, CardHeader, CardBody, Stack, StackDivider, Heading, Text, Box, GridItem, Avatar } from '@chakra-ui/react';

interface CharacterListCard {
    character: ICharacter,
}

export default function CharacterListCard({ character }: CharacterListCard) {

    return (

        <GridItem w='100%'>

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
    );
}

const styledHeading = {
    display: 'flex',
    alignItems: 'center',
}
