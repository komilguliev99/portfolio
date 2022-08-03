import React from 'react';
import { FCC } from 'typescript/abstract';
import './index.scss';

interface IAccordionFixed {
	title: string;
	label?: string;
	subtitle: string;
}

export const AccordionFixed: FCC<IAccordionFixed> = ({
    title, label, subtitle, children
}) => {
    return (
        <div className="AccordionFixed">
            <h4 className="AccordionFixed__title">{ title }</h4>
            { Boolean(label) && <p className="AccordionFixed__label">{ label }</p> }
            <p className="AccordionFixed__subtitle">{ subtitle }</p>
            <div className="AccordionFixed__content">{ children }</div>
        </div>
    );
};
