
//DEPENDE DEL LOCALHOST DE LOS DE DATA
const BASE_URL = 'https://rickandmortyapi.com/api';

async function fetchData(route, searchParams = {}) {
    try {
        const url = new URL(BASE_URL + route);

        for (const key of Object.keys(searchParams)) {
            url.searchParams.append(key, searchParams[key]);
        }

        const response = await fetch(url);

        const responseData = await response.json();
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA: ", responseData)
        return responseData;

    } catch (error) {
        console.error(error);
        return { error: error }
    }
}
export default fetchData;

