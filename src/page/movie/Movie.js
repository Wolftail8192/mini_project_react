import "./Movie.css"
import {useLocation} from "react-router-dom";
import './Movie.css'
import {useEffect, useState} from "react";
import {axiosInstance, getMovie} from "../../services";
import {axiosInstanceSprite, getSprite} from "../../services";


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

        // axiosInstanceSprite(id).then(response => {
        //     console.log(response.data);
        //     setMovieForm({...response.data})
        // })


    },[id])

    console.log(Movie);
    return (
        <div className={'t'}>
            <h1>{original_title}</h1>
            <p>{overview}</p>
            <img src="movieForm" alt=""/>
            
        </div>
    )
}
