import React, { FC, useEffect, useState } from 'react';
import './index.scss';

interface ITypingTexts {
	texts: string[];
	style?: 'default' | 'primary';
}

export const TypingTexts: FC<ITypingTexts> = ({
    texts, style = 'default'
}) => {

    const [curr, setCurrText] = useState(0);
    const [cursor, setCursor] = useState(0);
    const [step, setStep] = useState(1);


    const nextText = () => {
        const newCurr = curr + 1;
        setCurrText(newCurr >= texts.length ? 0 : newCurr);
    };

    const changeText = () => {
        const newCursor = cursor + step;
        if (cursor === texts[curr].length) {
            setStep(-1);
        }
        if (newCursor === -1) {
            setStep(1);
            nextText();
        }
        setCursor(newCursor);
    };

    useEffect(() => {
        let speed = 200;
        if (cursor > 7) {
            speed = 300;
        }

        setTimeout(() => {
            changeText();
        }, speed);
    }, [cursor]);

    const animText = texts[curr];

    return (
        <h4 className={`cursor TypingText TypingText_${style}`}>I'm { animText.slice(0, cursor + 1) }</h4>
    );
};
