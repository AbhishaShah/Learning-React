import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
           <h1>Sorry</h1>
           <p>This page was not found</p>
           <div>Go back to <Link to="/"><b>HomePage</b></Link></div> 
        </div>
    );
}

export default NotFound;
