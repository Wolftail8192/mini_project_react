import './MovieComponent.css';

export function MovieComponent ({item}) {
    return(
        <div className={'movie-card'}>
            {item.id} -- {item.original_title}

        </div>
    )
}
export default MovieComponent;