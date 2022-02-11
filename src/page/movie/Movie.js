import "./Movie.css"
import {useLocation} from "react-router-dom";
export function Movie () {
    let {state: {id, original_title, backdrop_path}} = useLocation();

    return (
        <div>
            {original_title}
        </div>
    )
}