import React, { FC } from 'react';
import './index.scss';

interface IServiceCard {
	title: string;
	icon: string;
	description: string;
}

export const ServiceCard: FC<IServiceCard> = ({
    title, icon, description
}) => {
    return (
        <div className="ServiceCard fadeIn">
            <div className={`ServiceCard__icon ServiceCard__icon--${icon}`}></div>
            <div className="ServiceCard__info-box">
                <h4 className="ServiceCard__title">{ title }</h4>
                <p className="ServiceCard__desc">{ description.slice(0, 100) }</p>
            </div>
        </div>
    );
};
