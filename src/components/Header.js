import React from 'react';

const Header = () => (
    <header>
        <nav className="navbar purple darken-3 text-success sticky-top">
            <ul className="container text-center">
                <li className="nav-link">Musician Memory Game</li>
                <li className="nav-link">Click an Image to begin</li>
                <li className="nav-link">Score: 0 | Top Score: 0</li>
            </ul>
        </nav>
        
        <div className="jumbotron-fluid text-center p-2 clearfix">
            <h1 className="display-3">Memory Game</h1>
            <p className="lead">
                Click on each different musician. Don't click the same musician twice!
            </p>
        </div>
    </header>
);

export default Header;