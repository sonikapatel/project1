

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const HeaderComponent = () => {
    return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">YouX</a>
          </div>
          <ul className="nav navbar-nav">
          </ul>
        </div>
        </nav>
    );
}
export default HeaderComponent;