import React, { FC } from 'react';
import './index.scss';

interface IFact {
	title: string;
	value: string;
}

export const Fact: FC<IFact> = ({
    title, value
}) => {
    return (
        <div className="Fact">
            <span className="Fact__title">{ title }:</span>
            <span className="Fact__value">{ value }</span>
        </div>
    );
};
