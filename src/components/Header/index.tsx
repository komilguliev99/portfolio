import { Socials } from '../Socials';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { FCC } from '../../typescript/abstract';
import { Menu } from '../Menu';
import './index.scss';

const getOnResizeCallback = (setActive: (val: boolean) => void) => {
    let prevWidth = window.innerWidth;
    return () => {
        if (window.innerWidth <= 1300 && prevWidth > 1300) {
            setTimeout(() => setActive(false), 300);
        }
    };
};

export const Header: FCC<{}> = () => {
    const [active, setActive] = useState(false);

    const toggle = () => {
        if (!active) {
            document.body.style.position = 'fixed';
        } else {
            document.body.style.position = 'static';
        }
        setActive(!active);
    };

    const onResize = useCallback(getOnResizeCallback(setActive), [setActive]);
    const onMenuClick = useCallback((e: MouseEvent) => {
        const el = e.target as HTMLAnchorElement;
        const cls = 'Menu__item';
        if (el.classList.contains(cls) || (el.closest('.' + cls))) {
            setActive(false);
        }
    }, [setActive]);

    useLayoutEffect(() => {
        window.addEventListener('resize', onResize);
        document.addEventListener('click', onMenuClick);
        return () => {
            window.removeEventListener('resize', onResize);
            document.removeEventListener('click', onMenuClick);
        };
    });

    return (
        <>
            <header className={`Header ${active ? 'Header_active' : ''}`}>
                <div className="Header__image"></div>
                <div className="Header__title">Komil Guliev</div>
                <div className="Header__contacts">
                    <Socials />
                </div>
                <Menu />
            </header>
            <div className={`Toggler ${active ? 'Toggler_active' : ''}`} onClick={toggle}>
                <span></span><span></span><span></span>
            </div>
        </>
    );
};
