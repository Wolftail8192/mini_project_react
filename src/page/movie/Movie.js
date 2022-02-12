import "./Movie.css"
import {useLocation} from "react-router-dom";
import './Movie.css'
import {useEffect, useState} from "react";
import {axiosInstance, getMovie} from "../../services";



export function Movie () {
    let {state: {id, original_title, backdrop_path}} = useLocation();
    let [movie, setMovie] = useState({})
    let [movieForm, setmovieForm]=useState({})
    useEffect(()=>{
        getMovie(id).then(value =>
            setMovie({...value.data.results}))



    },[id])
    return (
        <div className={'t'}>
            {original_title}
        </div>
    )
}
