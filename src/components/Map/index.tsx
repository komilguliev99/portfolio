import React, { FC } from 'react';
import './index.scss';

interface IList {
	texts: string[];
}

export const List: FC<IList> = ({
    texts = [],
}) => {
    return (
        <ul className="List">
            { texts.map((text, idx) => <li key={idx}>{ text }</li>) }
        </ul>
    );
};
