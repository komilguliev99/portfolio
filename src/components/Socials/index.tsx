import React, { FC } from 'react';
import { FCC } from '../../typescript/abstract';
import './index.scss';
import { socialNets } from './statics';
import { ISocialNet } from './typing';

export const Socials: FCC<{}> = () => {

    return (
        <div className="Socials">
            { socialNets.map(item => <SocialsItem {...item} />)}
        </div>
    );
};

export const SocialsItem: FC<ISocialNet> = ({
    name, icon, url
}) => (
    <div className="Socials__item" data-name={name} data-url={url}>
        <img src={icon} alt="" />
    </div>
);
