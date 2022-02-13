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
import pictures from './pictures/footer-bg.jpg'


function App  ()  {

    return (
        // <BrowserRouter>
            <div style={{backgroundImage:'./pictures/footer-bg.jpg'}}>
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
                <hr/>
                <div className={'footer'}>
                    <button>preview</button>
                    <button>next</button>
                </div>

            </div>
        /*</BrowserRouter>*/

    );
}

export default App;