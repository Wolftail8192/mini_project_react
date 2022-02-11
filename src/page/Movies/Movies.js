import "./Movies.css";
import {useEffect, useState} from "react";
import {getMovies} from "../../services";
import MovieComponent from "../../components/movieComponent/MovieComponent";



export function Movies () {
    let [movies, setMovies] = useState([]);
    
    useEffect(()=>{
        getMovies().then(value => {
            let {data: {results}}  = value;
            setMovies(results);
        });
    }, [])
    return (
        <div className={'movie-list'}>
            {
                movies.map((movieItem) => <MovieComponent key={movieItem.id} item={movieItem}/>)
            }
        </div>
    )
}