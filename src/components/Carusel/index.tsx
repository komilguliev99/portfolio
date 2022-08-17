import React, { FC, useEffect, useRef, useState } from 'react';
import './index.scss';

interface ICarusel {
	items?: string[];
	time?: number;
}

export const Carusel: FC<ICarusel> = ({
    items = [], time = 1000
}) => {

    const myRef: React.RefObject<HTMLDivElement> = useRef(null);
    const [move, setMove] = useState(0);
    const [step, setStep] = useState(1);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

    const increment = () => {
        if (move === items.length - 1) {
            setMove(move - 1);
            setStep(-1);
        } else if (move === 0) {
            setMove(move + 1);
            setStep(1);
        } else {
            setMove(move + step);
        }
    };

    const handleDotClick = (e: MouseEvent) => {
        const tar = e.target as HTMLElement;
        const idx = tar.dataset.idx;
        if (idx !== undefined || idx !== null) {
            clearTimeout(timerId as NodeJS.Timeout);
            setMove(parseInt(idx as string));
        }
    };

    useEffect(() => {
        const id = setTimeout(increment, time);
        setTimerId(id);
        if (myRef.current) {
            myRef.current.addEventListener('click', handleDotClick);
        }
        return () => {
            clearTimeout(id);
            if (myRef.current) {
                myRef.current.removeEventListener('click', handleDotClick);
            }
        };
    }, [move]);

    return (
        <div className="Carusel">
            <div className="Carusel__container">
                <div
                    style={{ transform: `translateX(${move * (-100)}%)`}}
                    className="Carusel__list">
                    { items.map(item => (
                        <div
                            key={item}
                            style={{ backgroundImage: `url(${item})` }}
                            className="Carusel__item"></div>
                    ))}
                </div>
            </div>
            <div ref={myRef} className="Carusel__dots">
                { items.map((_, idx) => <span key={idx} className={move === idx ? 'active' : ''} data-idx={idx}></span>) }
            </div>
        </div>
    );
};
