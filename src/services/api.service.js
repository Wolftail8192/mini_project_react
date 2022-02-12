import axios from "axios";

export let axiosInstance = axios.create({
    baseURL:'https://api.themoviedb.org/3/discover/movie?api_key=4a7c600cc60d263ab60c8d32ea65cb23' +
        '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
    params:{
        limit:'20'
    }
})

export let axiosInstanceSprite = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/'
})
export let getSprite = () => {
    return axiosInstanceSprite.get('{movie_id}/images?api_key=4a7c600cc60d263ab60c8d32ea65cb23')
}

export let getMovies = () => {
    return axiosInstance.get('/{movie_id}')
}

export let getMovie = () => {
    return axiosInstance.get('/{movie_id}')
}

