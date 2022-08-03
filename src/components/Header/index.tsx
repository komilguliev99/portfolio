import { Socials } from '../Socials';
import React from 'react';
import { FCC } from '../../typescript/abstract';
import { Menu } from '../Menu';
import './index.scss';

export const Header: FCC<{}> = () => {

    return (
        <header className="Header">
            <div className="Header__image"></div>
            <div className="Header__title">Komil Guliev</div>
            <div className="Header__contacts">
                <Socials />
            </div>
            <Menu />
        </header>
    );
};
