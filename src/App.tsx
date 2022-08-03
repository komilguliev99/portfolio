import { About } from 'layers/about';
import { Introduction } from 'layers/introduction';
import { Resume } from 'layers/resume';
import { Skills } from 'layers/skills';
import React from 'react';
import './App.scss';
import { Header } from './components/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="App__content">
                <Introduction />
                <div className="App__container">
                    <About />
                    <Skills />
                    <Resume />
                </div>
            </div>
        </div>
    );
}

export default App;
