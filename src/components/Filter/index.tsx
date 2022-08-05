import React, { FC, useEffect, useRef } from 'react';
import './index.scss';

interface IFilter {
	items: string[];
	value: string;
	onSelect: (val: string) => void;
}

export const Filter: FC<IFilter> = ({
    items = [], value, onSelect
}) => {
    const myRef: React.RefObject<HTMLDivElement> = useRef(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const value = target.dataset.value;
            if (!Boolean(value)) return;
            onSelect(value as string);
        };
        if (myRef.current) {
            myRef.current.addEventListener('click', handler);
        }
        return () => myRef.current?.removeEventListener('click', handler);
    });

    return (
        <div ref={myRef} className="Filter">
            { items.map(item => {
                const classes = [
                    'Filter__item',
                    (item === value && 'Filter__item--active') || ''
                ].join(' ');
                return (
                    <div key={item} data-value={item} className={classes}>{ item }</div>
                );
            })}
        </div>
    );
};
