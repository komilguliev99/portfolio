import React, { FC, useEffect, useState } from 'react';
import './index.scss';

interface ISliderItem {
	image: string;
	title: string;
}

interface ISlider {
	items: ISliderItem[]
	onOutside: () => void;
}

export const Slider: FC<ISlider> = ({
    items = [], onOutside
}) => {

    const [active, setActive] = useState(0);

    const onControllClick = (step: number) => {
        const next = active + step;
        setActive(next);
    };

    const onOutsideClick = (e: MouseEvent) => {
        const tar = e.target as HTMLElement;
        if (tar.classList.contains('Slider__item')) {
            onOutside();
        }
    };

    useEffect(() => {
        document.addEventListener('click', onOutsideClick);
        return () => document.removeEventListener('click', onOutsideClick);
    });

    return (
        <div className="Slider">
            <div style={{ left: -active * 100 + '%' }} className="Slider__container">
                { items.map(({ image, title }) => (
                    <div key={title} className={'Slider__item'}>
                        <div style={{ backgroundImage: `url(${image})` }} className="Slider__item-img" />
                        <div className="Slider__item-title">{ title }</div>
                    </div>
                )) }
            </div>
            { active + 1 < items.length && <div onClick={() => onControllClick(1)} className="Slider__controll Slider__controll--next">&#8250;</div> }
            { active - 1 >= 0 && <div onClick={() => onControllClick(-1)} className="Slider__controll Slider__controll--prev">&#8249;</div> }
        </div>
    );
};
