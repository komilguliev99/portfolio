import React, { FC } from 'react';
import './index.scss';

interface IButton {
	title: string;
	type?: 'primary';
	size: 'sm' | 'md' | 'lg';
}

export const Button: FC<IButton> = ({
    title, size, type = 'primary'
}) => {
    return (
        <button className={`Button Button_${size} Button_${type}`}>
            { title }
        </button>
    );
};
