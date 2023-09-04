import { IFetchData } from './types';
async function fetchData({ method = 'GET', url, body, queryParams = {} }: IFetchData) {
    try {
        const response = await fetch(`${url}?${!!Object.keys(queryParams)?.length ? new URLSearchParams(queryParams) : ''}`, { method });
        return response.json();
    }
    catch (e) {
        console.log(e);
    }
}

async function fetchMultipleUrls(urls: string[]) {
    return await Promise.all(urls.map(url => fetchData({ url })));
}

export { fetchData, fetchMultipleUrls };

