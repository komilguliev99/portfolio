import classNames from 'classnames';
import React from 'react';
import { FCC } from 'typescript/abstract';
import './index.scss';

interface ICardBox {
	fullHeight?: boolean;
}

export const CardBox: FCC<ICardBox> = ({
    fullHeight, children
}) => {
    const classes = classNames('CardBox', { CardBox_full: fullHeight });
    return (
        <div className={classes}>
            { children }
        </div>
    );
};
