import React, { FC } from 'react';
import './index.scss';

interface IProjectCard {
	title: string;
	img: string;
	url: string;
}

export const ProjectCard: FC<IProjectCard> = ({
    img, url
}) => {
    const style = {
        backgroundImage: `url(${img})`
    };
    return (
        <div style={style} className="ProjectCard">
            <div className="ProjectCard__box">
                <div><span className="ProjectCard__icon ProjectCard__icon--plus"></span></div>
                <div><span data-url={url} className="ProjectCard__icon ProjectCard__icon--link"></span></div>
            </div>
        </div>
    );
};
