import React from 'react';
import { Loader } from './components/Loader';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from 'pages/main';
import { PortfolioDetailsPage } from 'pages/portfolio-details';
import './App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="App__content">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path='/projects' element={<PortfolioDetailsPage />} />
                </Routes>
            </div>
            <Loader time={3} />
        </div>
    );
}

export default App;
