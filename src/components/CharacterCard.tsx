'use client';
import { ICharacter, IObject } from "../utils/types";;
import { Card, CardHeader, CardBody, Stack, StackDivider, Heading, Text, Box, Avatar } from '@chakra-ui/react';

interface CharacterCard {
    character: ICharacter | IObject,
    vehicles: IObject[] | undefined,
    starships: IObject[] | undefined,
    films: IObject[] | undefined,
}
export default function CharacterCard({ character, vehicles, starships, films }: CharacterCard) {
    return (
        <Card>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Birth Year
                    </Heading>
                        <Text pt='2' fontSize='sm'>
                            {character.birth_year}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Eye Color
                    </Heading>
                        <Text pt='2' fontSize='sm'>
                            {character.eye_color}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Gender
                    </Heading>
                        <Text pt='2' fontSize='sm'>
                            {character.gender}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Height
                    </Heading>
                        <Text pt='2' fontSize='sm'>
                            {character.height}cm
                    </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Mass
                    </Heading>
                        <Text pt='2' fontSize='sm'>
                            {character.mass}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Skin Color
                    </Heading>
                        <Text pt='2' fontSize='sm'>
                            {character.skin_color}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Vehicles
                    </Heading>
                        <Text pt='2' fontSize='sm'>
                            {vehicles ? vehicles?.map(({ name }: IObject) => <span className={'db'} key={name}>{name}</span>) : 'loading...'}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Films
                    </Heading>
                        <Text pt='2' fontSize='sm'>
                            {films ? films?.map(({ name }: IObject) => <span className={'db'} key={name}>{name}</span>) : 'loading...'}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Starships
                    </Heading>
                        <Text pt='2' fontSize='sm'>
                            {starships ? starships?.map(({ name }: IObject) => <span className={'db'} key={name}>{name}</span>) : 'loading...'}
                        </Text>
                    </Box>

                </Stack>
            </CardBody>
        </Card>
    );
}