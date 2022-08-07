import React, { FC, useEffect, useState } from 'react';
import './index.scss';

interface ILoader {
	time: number
}

export const Loader: FC<ILoader> = ({
    time
}) => {
    const [timer, setTimer] = useState(time);
    useEffect(() => {
        setTimeout(() => setTimer(0), timer * 1000);
    });

    if (timer <= 0) return <div></div>;
    return (
        <div className={`Loader Loader_${time}s`}>
            <div className="Loader__content">
                <h4 className="Loader__title">Loading...</h4>
            </div>
        </div>
    );
};
