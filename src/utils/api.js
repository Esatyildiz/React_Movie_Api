import axios from "axios";

const URL = process.env.REACT_APP_BASE_URL;
const TMBD_TOKEN = process.env.REACT_APP_TMDB_TOKEN;

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
        console.log(err);
        return err;
    }
};
