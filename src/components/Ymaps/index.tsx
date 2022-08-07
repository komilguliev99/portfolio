/// <reference path="../../typescript/ymaps.d.ts" />
import React, { FC, useEffect, useRef, useState } from 'react';
import './index.scss';

export const YMaps: FC<{}> = () => {

    const [map, setMap] = useState<unknown>(null);
    const myRef: React.RefObject<HTMLDivElement> = useRef(null);
    useEffect(() => {
        ymaps.ready()
            .then(() => {
                if (myRef.current && !Boolean(map)) {
                    myRef.current.innerHTML = '';
                    const newMap = new ymaps.Map(myRef.current, {
                        center: [38.569001, 68.782614],
                        zoom: 12,
                        controls: []
                    });

                    const myPlacemark = new ymaps.Placemark([38.569001, 68.782614], {}, {});
                    newMap.geoObjects.add(myPlacemark);
                    setMap(newMap);
                }
            });
    });

    return (
        <div className="YMaps">
            <div ref={myRef}></div>
        </div>
    );
};
