interface IObject {
    [key: string]: any;
}

interface IFetchData {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    url: string;
    body?: IObject;
    queryParams?: IObject;
}

interface ICharacter {
    birth_year: string;
    eye_color: string;
    films: string[];
    gender: string;
    hair_color: string;
    height: string | number;
    homeworld: string;
    mass: string | number;
    name: string;
    skin_color: string;
    created: string;
    edited: string;
    species: string[];
    starships: string[];
    url: string;
    vehicles: string[];
}

export type {
    IFetchData,
    ICharacter
};

