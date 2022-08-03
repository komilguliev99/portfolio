import React, { FC } from 'react';
import './index.scss';

interface ISkillItem {
	name: string;
	progress: number;
}

export const SkillItem: FC<ISkillItem> = ({
    name, progress
}) => {
    return (
        <div className="SkillItem">
            <h4>
                { name }
                <span>{ progress }%</span>
            </h4>
            <div className="SkillItem__box">
                <p style={{ width: `${progress}%` }}></p>
            </div>
        </div>
    );
};
