import './MovieComponent.css';
import {Link} from "react-router-dom";

export function MovieComponent ({item}) {
    return(
        <div className={'movie-card'}>
            {item.id} -- {item.original_title}


            <Link to={'movie-details'} state={item}> Movie details </Link>

        </div>
    )
}
export default MovieComponent;