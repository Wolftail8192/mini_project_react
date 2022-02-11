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


function App  ()  {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/'} >home</Link>
                </li>
                <li>
                    <Link to={'/movies'}>movies</Link>
                </li>
            </ul>
            <Routes>
                <Route path={'/'} element={<Home/>} />
                <Route path={'/movies'} element={<Movies/>}/>
            </Routes>
        </div>
    );
};

export default App;