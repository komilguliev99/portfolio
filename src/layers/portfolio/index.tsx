import { ProjectCard } from '../../components/ProjectCard';
import React, { FC, useEffect, useState } from 'react';
import { LayerTitle } from '../../components/LayerTitle';
import { FlexBox } from '../../components/FlexBox';
import { Filter } from '../../components/Filter';
import { Slider } from '../../components/Slider';
import './index.scss';

export const Portfolio: FC<{}> = () => {
    const [filterValue, setFilterValue] = useState('App');
    const [previewOn, setPreview] = useState(false);

    const projects = [
        {
            image: 'https://images.template.net/wp-content/uploads/2017/07/coolin2.jpg',
            title: 'App 1'
        },
        {
            image: 'https://assets.hongkiat.com/uploads/cool-website-experiments/17-panic.jpg',
            title: 'App 2'
        },
        {
            image: 'https://thesalonbusiness.com/wp-content/uploads/square-online-store-example-salon-website-1024x732.png',
            title: 'App 3'
        },
        {
            image: 'https://thesalonbusiness.com/wp-content/uploads/brand-square-online-store-example-1024x806.png',
            title: 'App 4'
        },
        {
            image: 'https://images.ctfassets.net/2d5q1td6cyxq/4rMw9pvPWS3sRa6zcN77Aa/1cf4269e7291aea44c35283fd64a575b/online-store-templates-page_restaurants-demo_desktop-2.jpg',
            title: 'App 5'
        },
        {
            image: 'https://images.ctfassets.net/2d5q1td6cyxq/5AAADixFhiHa7i4Ts0HFpX/330853c16f8cc9c19e455cb6169d20ba/online-store-templates-page_services-demo_desktop-1.jpg',
            title: 'App6'
        }
    ];

    const onSelect = (value: string) => {
        setFilterValue(value);
    };

    const hasClass = (node: HTMLElement, cls: string) => {
        return (node.classList.contains(cls) ||
				node.firstElementChild?.classList.contains(cls) || false);
    };

    const onProjectClick = (e: MouseEvent) => {
        const tar = e.target as HTMLElement;

        if (hasClass(tar, 'ProjectCard__icon--plus')) {
            setPreview(true);
        }
    };

    useEffect(() => {
        document.addEventListener('click', onProjectClick);
        return () =>  document.removeEventListener('click', onProjectClick);
    });

    return (
        <div className="Portfolio" id="portfolio">
            <LayerTitle title="Portfolio" underlined />
            <p className="Portfolio__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta sequi similique. Labore, eos? Soluta suscipit totam corrupti a beatae eos, molestiae laudantium temporibus praesentium!</p>
            <div className="Portfolio__filter-box">
                <Filter items={['App', 'Web', 'Mobile']} value={filterValue} onSelect={onSelect} />
            </div>
            <FlexBox cols={3} gap={2} className="fadeIn">
                {
                    projects.map(({ image, title }, idx) => (
                        <div key={idx} className="FlexBox__item">
                            <ProjectCard
                                title={title}
                                img={image}
                                url="#nothing" />
                        </div>
                    ))
                }
            </FlexBox>
            { previewOn && (
                <Slider
                    onOutside={() => setPreview(false)}
                    items={projects} />
            )}
        </div>
    );
};

