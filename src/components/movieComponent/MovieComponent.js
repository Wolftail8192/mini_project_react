import './MovieComponent.css';
import {Link} from "react-router-dom";

export function MovieComponent ({item}) {
    return(
        <div>
            <div className={'movie-card'}>
                {item.original_title}
                <hr/>
                {item.overview}
                <hr/>


                <Link to={'movie-details'} state={item}> Movie details </Link>

            </div>


        </div>

    )
}
export default MovieComponent;