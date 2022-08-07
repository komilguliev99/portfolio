import { Loader } from './components/Loader';
import { About } from 'layers/about';
import { Contact } from 'layers/contact';
import { Introduction } from 'layers/introduction';
import { Portfolio } from 'layers/portfolio';
import { Resume } from 'layers/resume';
import { Services } from 'layers/services';
import { Skills } from 'layers/skills';
import React, { useEffect } from 'react';
import './App.scss';
import { Header } from './components/Header';

function App() {

    useEffect(() => {
        let fadeArr: HTMLElement[] = [];
        ['.fadeIn', '.fadeRight', '.fadeLeft', '.transparency'].forEach(className => {
            fadeArr = fadeArr.concat(Array.from(document.querySelectorAll(className)));
        });

        const handler = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 100;
            fadeArr.forEach(item => {
                const elementTop = item.getBoundingClientRect().top;

                if (elementTop < windowHeight - elementVisible) {
                    item.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    });



    return (
        <div className="App">
            <Header />
            <div className="App__content">
                <Introduction />
                <div className="App__container">
                    <About />
                    <Skills />
                    <Resume />
                    <Portfolio />
                    <Services />
                    <Contact />
                </div>
            </div>
            <Loader time={3} />
        </div>
    );
}

export default App;
