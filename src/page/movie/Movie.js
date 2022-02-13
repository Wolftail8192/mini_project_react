import "./Movie.css"
import {useLocation} from "react-router-dom";

import {useEffect, useState} from "react";
import {apiConfig, axiosInstance, getMovie} from "../../services";
import {axiosInstanceSprite, getSprite} from "../../services";

import MovieDetails from "../MovieDetails/MovieDetails";




export function Movie () {
    let {state: {id, original_title, backdrop_path, overview, poster_path}} = useLocation();
    let [movie, setMovie] = useState({})
    let [movieForm, setMovieForm]=useState({})



    useEffect(()=>{
        getMovie(id).then(value =>
            setMovie({...value.data.results}))
    },[id])

    useEffect(()=>{
        getSprite(id).then(value =>

        setMovieForm({...value.id}))

        console.log(movieForm);

    },[id])

    console.log(Movie);

    let Picture = backdrop_path;
    console.log(Picture);

    console.log(getSprite);


    return (
        <div className={'t'}>
            <h1>{original_title}</h1>
            <p>{backdrop_path}</p>
            <img src='https://image.tmdb.org/t/p/w200/{Picture}' alt=""/>


            <hr/>
            <div>
                <button onClick={MovieDetails}>MovieDetails</button>
            </div>
        </div>
    )
}
