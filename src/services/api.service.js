import axios from "axios";

export let axiosInstance = axios.create({
    baseURL:'https://api.themoviedb.org/3/discover/movie?api_key=4a7c600cc60d263ab60c8d32ea65cb23' +
        '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
    params:{
        limit:'20'
    }
})

export let axiosInstanceSprite = axios.create({
    baseURL:'image.tmdb.org/t/p/w200'
})
// export let getSprite = () => {
//
// }

export let getSprite = (url) => {
    return axiosInstanceSprite.get('{url}')

}

export let getMovies = () => {
    return axiosInstance.get('/{movie_id}')
}

export let getMovie = () => {
    return axiosInstance.get('/{movie_id}')
}

// export const apiConfig = {
//     baseUrl: 'https://api.themoviedb.org/3/',
//     apiKey: '4a7c600cc60d263ab60c8d32ea65cb23',
//     originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
//     w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
// };

