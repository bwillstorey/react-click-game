import React from 'react';

const Header = (props) => (
    <header>
        <nav className="navbar navbar-dark bg-dark sticky-top">
            <ul className="container text-center">
                <li className="nav-link"><h3>Musician Memory Game</h3></li>
                <li className="nav-link"><h4> { props.message } </h4></li>
                <li className="nav-link"><h3>Score: { props.score } | Top Score: { props.topScore }</h3></li>
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