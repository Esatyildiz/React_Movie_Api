import axios from "axios";

const URL = process.env.REACT_APP_BASE_URL;
const TMBD_TOKEN = process.env.REACT_APP_TMDB_TOKEN;

export const fetchDataApi = async (url, params) => {
    try {

        const data = await axios.get(URL + url, {
            headers: {
                Authorization: "Bearer " + TMBD_TOKEN,
            },
            params: params
        })
        return data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}



//  eski api kodları değişecek

export const fetchDataFromApi = async (date) => {
    try {
        const response = await axios.get(`${URL}/trending/movie/${date}`,
            {
                headers: {
                    Authorization: "Bearer " + TMBD_TOKEN,
                }
            })
        const { results } = response.data
        return results;

    } catch (err) {
        return err;
    }
};

export const fetchUpcoming = async () => {
    try {
        const response = await axios.get(`${URL}/movie/upcoming`,
            {
                headers: {
                    Authorization: "Bearer " + TMBD_TOKEN,
                }
            })
        const { results } = response.data
        return results;
    } catch (err) {
        return err;
    }
}

export const popularFetchApi = async () => {
    try {
        const response = await axios.get(`${URL}/movie/popular`,
            {
                headers: {
                    Authorization: "Bearer " + TMBD_TOKEN,
                }
            })
        const { results } = response.data
        return results;
    } catch (err) {
        return err;
    }
}
export const topRotatedFetchApi = async () => {
    try {
        const response = await axios.get(`${URL}/movie/top_rated`,
            {
                headers: {
                    Authorization: "Bearer " + TMBD_TOKEN,
                }
            })

        const { results } = response.data
        return results;
    } catch (err) {
        return err;
    }
}