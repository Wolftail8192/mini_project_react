import "./Movies.css";
import {useEffect, useState} from "react";
import {getMovies} from "../../services";
import MovieComponent from "../../components/movieComponent/MovieComponent";
import {Outlet} from "react-router-dom";


export function Movies () {
    let [movies, setMovies] = useState([]);
    
    useEffect(()=>{
        getMovies().then(value => {
            let {data: {results}}  = value;
            setMovies(results);
        });
    }, [])
    return (
        <div>
            <div className={'o_m'}>
                <div className={'o'}><Outlet/></div>
            </div>

            <br/>
            <div className={'movie-list'}>

                {
                    movies.map((movieItem) => <MovieComponent key={movieItem.id} item={movieItem}/>)
                }
            </div>
        </div>
    )
}