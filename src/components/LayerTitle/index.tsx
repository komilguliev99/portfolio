import React, { FC } from 'react';
import './index.scss';

interface ILayerTitle {
	title: string;
	underlined?: boolean;
	size?: 'lg' | 'xl' | 'xxl'
}

export const LayerTitle: FC<ILayerTitle> = ({
    title,
    underlined = false,
    size = 'xxl'
}) => {

    const classes = [
        'LayerTitle',
        'LayerTitle_' + size,
        (underlined && 'LayerTitle_underlined') || ''
    ].join(' ');

    return (
        <h2
            className={classes}
        >{ title }</h2>
    );
};
