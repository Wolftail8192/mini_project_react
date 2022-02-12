import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    Outlet
} from "react-router-dom";
import {Home} from "./page/home/Home";
import {Movies} from "./page/Movies/Movies";
import {Movie} from "./page/movie/Movie";


function App  ()  {
    return (
        <div>
            <div className={'ul'}>
                <ul>
                    <li>
                        <Link to={'/'} >home</Link>
                    </li>
                    <li>
                        <Link to={'/movies'}>movies</Link>
                    </li>
                </ul>
            </div>

            <Routes>
                <Route path={'/'} element={<Home/>} />
                <Route path={'/movies'} element={<Movies/>}>
                    <Route path={'movie-details'} element={<Movie/>} />
                </Route>

            </Routes>
        </div>
    );
};

export default App;