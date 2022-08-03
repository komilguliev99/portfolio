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
            <h2 className="Introduction__title">Komil Guliev</h2>
            <TypingTexts texts={animationTexts} />
        </div>
    );
};
