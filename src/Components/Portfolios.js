import React from 'react';
import './Portfolios.css';
import Filter from './Filter';
import PortfolioReviewEntry from './PortfolioReviewEntry';

const PortfoliosComponent = () => {
    return (
        <body>
       <div>
        <Filter/>
        <PortfolioReviewEntry/>
        <PortfolioReviewEntry/>
        </div>
        </body>
    );
}
export default PortfoliosComponent;