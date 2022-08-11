import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FCC } from 'typescript/abstract';
import './index.scss';

const modalRoot = document.querySelector('#modal');
interface IModal {
	background?: string
}

export const Modal: FCC<IModal> = ({
    background,
    children
}) => {
    console.log(background);
    const el = document.createElement('div');

    useEffect(() => {
        modalRoot?.appendChild(el);
        return () => {
            modalRoot?.removeChild(el);
        };
    });

    return ReactDOM.createPortal(
        <div className="Modal">
            { children }
        </div>,
        el
    );
};
