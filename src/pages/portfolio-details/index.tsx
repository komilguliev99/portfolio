import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export const PortfolioDetailsPage = () => {
    return (
        <div className="PortfolioDetails">
			Here is my project <br />
            <Link to={'/'}>Home</Link>
        </div>
    );
};
