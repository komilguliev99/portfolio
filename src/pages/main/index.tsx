import React, { useEffect } from 'react';
import { About } from 'layers/about';
import { Contact } from 'layers/contact';
import { Introduction } from 'layers/introduction';
import { Portfolio } from 'layers/portfolio';
import { Resume } from 'layers/resume';
import { Services } from 'layers/services';
import { Skills } from 'layers/skills';

export const MainPage = () => {

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
        <div className="Main">
            <Introduction />
            <div className="Main__container">
                <About />
                <Skills />
                <Resume />
                <Portfolio />
                <Services />
                <Contact />
            </div>
        </div>
    );
};
