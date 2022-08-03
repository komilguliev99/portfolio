import { SkillItem } from '../../components/SkillItem';
import React, { FC } from 'react';
import { LayerTitle } from '../../components/LayerTitle';
import './index.scss';

export const Skills: FC<{}> = () => {
    return (
        <div className="Skills">
            <LayerTitle title="Skills" underlined />
            <p className="About__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione molestias est unde voluptatibus nemo doloribus eaque! Iure, doloremque dicta culpa ad, vel ipsum explicabo voluptatum maiores eius amet adipisci quibusdam quae accusantium sed provident laboriosam odit ut tempore aut. Accusamus in adipisci aperiam ea aliquid quas possimus quidem saepe.</p>
            <div className="Skills__box">
                <SkillItem name="HTML" progress={100} />
                <SkillItem name="CSS" progress={80} />
                <SkillItem name="Javascript" progress={90} />
                <SkillItem name="Typescript" progress={70} />
                <SkillItem name="React/Redux" progress={80} />
            </div>
        </div>
    );
};

