import { IFetchData } from './types';
async function fetchData({ method = 'GET', url, body, queryParams }: IFetchData) {
    try {
        const response = await fetch(url, { method });
        return response.json();
    }
    catch (e) {
        console.log(e);
    }
}

export { fetchData };