import { ProjectCard } from '../../components/ProjectCard';
import React, { FC, useState } from 'react';
import { LayerTitle } from '../../components/LayerTitle';
import { FlexBox } from '../../components/FlexBox';
import './index.scss';
import { Filter } from '../../components/Filter';

export const Portfolio: FC<{}> = () => {
    const [filterValue, setFilterValue] = useState('App');

    const onSelect = (value: string) => {
        setFilterValue(value);
    };

    return (
        <div className="Portfolio" id="portfolio">
            <LayerTitle title="Portfolio" underlined />
            <p className="Portfolio__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta sequi similique. Labore, eos? Soluta suscipit totam corrupti a beatae eos, molestiae laudantium temporibus praesentium!</p>
            <div className="Portfolio__filter-box">
                <Filter items={['App', 'Web', 'Mobile']} value={filterValue} onSelect={onSelect} />
            </div>
            <FlexBox cols={3} gap={2} className="fadeIn">
                <ProjectCard title="Aion (Zypl.ai)" img="https://images.template.net/wp-content/uploads/2017/07/coolin2.jpg" url="#nothing" />
                <ProjectCard title="Aion (Zypl.ai)" img="https://assets.hongkiat.com/uploads/cool-website-experiments/17-panic.jpg" url="#nothing" />
                <ProjectCard title="Aion (Zypl.ai)" img="https://images.template.net/wp-content/uploads/2017/07/coolin2.jpg" url="#nothing" />
                <ProjectCard title="Aion (Zypl.ai)" img="https://assets.hongkiat.com/uploads/cool-website-experiments/17-panic.jpg" url="#nothing" />
                <ProjectCard title="Aion (Zypl.ai)" img="https://images.template.net/wp-content/uploads/2017/07/coolin2.jpg" url="#nothing" />
                <ProjectCard title="Aion (Zypl.ai)" img="https://assets.hongkiat.com/uploads/cool-website-experiments/17-panic.jpg" url="#nothing" />
                <ProjectCard title="Aion (Zypl.ai)" img="https://images.template.net/wp-content/uploads/2017/07/coolin2.jpg" url="#nothing" />
                <ProjectCard title="Aion (Zypl.ai)" img="https://assets.hongkiat.com/uploads/cool-website-experiments/17-panic.jpg" url="#nothing" />
            </FlexBox>
        </div>
    );
};

