import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FCC } from 'typescript/abstract';
import './index.scss';

const modalRoot = document.querySelector('#modal') as HTMLElement;
interface IModal {
	background?: string
	onOutsideClick: () => void;
}

export const Modal: FCC<IModal> = ({
    background,
    children,
    onOutsideClick
}) => {
    console.log(background);
    const el = document.createElement('div');

    const onClickHandler = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target === modalRoot) {
            onOutsideClick();
        }
    };

    useEffect(() => {
        modalRoot?.appendChild(el);
        el?.addEventListener('click', onClickHandler);
        return () => {
            modalRoot?.removeChild(el);
            el.removeEventListener('click', onClickHandler);
        };
    });

    return ReactDOM.createPortal(
        <div className="Modal">
            { children }
        </div>,
        el
    );
};
