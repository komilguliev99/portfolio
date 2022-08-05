import React, { FC } from 'react';
import { FCC } from '../../typescript/abstract';
import './index.scss';
import { IMenuProps } from './typing';
import { menuOptions } from './statics';

export const Menu: FCC<{}> = () => {

    return (
        <div className="Menu">
            { menuOptions.map(item => <MenuItem key={item.title} {...item} />)}
        </div>
    );
};

export const MenuItem: FC<IMenuProps> = ({
    title, url, icon
}) => (
    <a href={url} className="Menu__item">
        <img src={ icon } />
        <p>{ title }</p>
    </a>
);
