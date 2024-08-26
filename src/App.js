import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Header from "./Header";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header/>
                        <Home/>
                    </>
                }/>
            </Routes>
        </Router>
    );
}

export default App;
