import { Carusel } from '../../components/Carusel';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { CardBox } from '../../components/CardBox';

interface IRowFact {
	title: string;
	text: string;
}

const RowFact: FC<IRowFact> = ({
    title, text
}) => {
    return (
        <div className="RowFact">
            <span>{ title }:</span>
            <span>{ text }</span>
        </div>
    );
};

export const PortfolioDetailsPage = () => {
    const images = [
        'https://images.template.net/wp-content/uploads/2017/07/coolin2.jpg',
        'https://assets.hongkiat.com/uploads/cool-website-experiments/17-panic.jpg',
        'https://thesalonbusiness.com/wp-content/uploads/square-online-store-example-salon-website-1024x732.png',
        'https://thesalonbusiness.com/wp-content/uploads/brand-square-online-store-example-1024x806.png',
        'https://images.ctfassets.net/2d5q1td6cyxq/4rMw9pvPWS3sRa6zcN77Aa/1cf4269e7291aea44c35283fd64a575b/online-store-templates-page_restaurants-demo_desktop-2.jpg',
        'https://images.ctfassets.net/2d5q1td6cyxq/5AAADixFhiHa7i4Ts0HFpX/330853c16f8cc9c19e455cb6169d20ba/online-store-templates-page_services-demo_desktop-1.jpg'
    ];
    return (
        <div className="Details">
            <div className="Details__header">
                <h4>Portfolio Details</h4>
                <div className="Details__pager">
                    <Link to="/">Home</Link> / Portfolio Details
                </div>
            </div>
            <div className="row">
                <div className="col-lg-7">
                    <Carusel time={4000} items={images} />
                </div>
                <div className="col-lg-5">
                    <div className="Details__info">
                        <CardBox>
                            <h4 className="Details__title">Project information</h4>
                            <RowFact title="Category" text="Frontend" />
                            <RowFact title="Client" text="ASU Company" />
                            <RowFact title="Project date" text="12 June, 2022" />
                            <RowFact title="Project URL" text="komilguliev99.com" />
                        </CardBox>
                        <h4>Some title</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio qui necessitatibus facere debitis, repudiandae atque at vel quis. Ullam cupiditate est numquam quaerat totam! Eum neque odit laborum unde dolore perspiciatis, tempore illo error voluptatem quo officiis earum architecto tenetur natus inventore doloribus expedita. Quo eius consequatur officia accusamus nobis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
