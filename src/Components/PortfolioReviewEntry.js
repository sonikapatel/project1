import React from 'react';
import Criteria from './Criteria';


const PortfolioReviewEntry = () => {
    return (
        <div class= "portfolio-entry">
        <div class="portfolio-preview">
        <script>

        </script>
     </div>
        <div class= "portfolio-details">
        <h5> October 1st, 2018</h5>
        <h6> Portfolio 1 </h6>
        <h4 style={{marginTop:'-5px'}}>Notes: finished changing some of the portfolio requirements </h4>
        </div>
        <div class ="portfolio-criteria">
        <Criteria></Criteria>
        </div>
        <div class ="portfolio-reviewers">
        <img src ="/comments.png" style={{width:"30px"}}/>  3 &nbsp; &nbsp;
Critiqued by   Sonika Patel and 2 others  
</div>
        </div>
    );
}
export default PortfolioReviewEntry;