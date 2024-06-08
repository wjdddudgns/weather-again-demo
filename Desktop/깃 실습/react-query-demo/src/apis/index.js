import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "74147b562609d3ae79323a8b5eb6f384";

const getNowPlayingMovies = async (page) => {
    try {
        const {data} = await axios ({
            method: "GET",
            url: BASE_URL + "/movie/now_playing",
            params: {
                api_key: API_KEY,
                language: "ko",
                region: "KR",
                page: page,
            },
        });
        return data;
    } catch (e){
        throw Error(e);
    }
}

export { getNowPlayingMovies }