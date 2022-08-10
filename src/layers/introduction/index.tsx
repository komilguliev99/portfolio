import { TypingTexts } from '../../components/TypingTexts';
import React, { FC } from 'react';
import './index.scss';

export const Introduction: FC<{}> = () => {
    const animationTexts = [
        'Frontend engineer',
        'Web developer'
    ];

    return (
        <div className="Introduction">
            <div className="Introduction__content">
                <h2 className="Introduction__title">Komil <span>Guliev</span></h2>
                <TypingTexts texts={animationTexts} />
            </div>
        </div>
    );
};
