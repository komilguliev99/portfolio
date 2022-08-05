import classNames from 'classnames';
import React from 'react';
import { FCC } from 'typescript/abstract';
import './index.scss';

interface IFlexBox {
	className?: string;
	/**
	 * cols count
	 */
	cols: 2 | 3 | 4;
	/**
	 * in rems
	 */
	gap: 2 | 3 | 4;
}

export const FlexBox: FCC<IFlexBox> = ({
    cols = 3, gap = 2, children, className
}) => {
    return (
        <div className={ classNames(`FlexBox FlexBox_${cols}-${gap}`, className) }>
            { children }
        </div>
    );
};
