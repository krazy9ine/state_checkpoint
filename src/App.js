import React, { useState } from 'react';
import './bootstrap.css'; // Import bootstrap.css
import './rotating-card.css'; // Import rotating-card.css
import './pe-icon-7-stroke.css'; // Import pe-icon-7-stroke.css
import RotatingCard from './RotatingCard';

function App() {
    const [isCardHovered, setIsCardHovered] = useState(false);

    const rotateCard = (event) => {
        const cardContainer = event.target.closest('.card-container');
        if (cardContainer.classList.contains('hover')) {
            cardContainer.classList.remove('hover');
            setIsCardHovered(false);
        } else {
            cardContainer.classList.add('hover');
            setIsCardHovered(true);
        }
    };

    return (
        <div className="App container">
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand navbar-brand-logo" href="https://www.creative-tim.com">
                            <div className="logo">
                                <img src="https://s3.amazonaws.com/creativetim_bucket/new_logo.png" alt="Creative Tim Logo" />
                            </div>
                            <div className="brand"> Creative Tim </div>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#howToUse" className="scroll-down">
                                    How to Use
                                </a>
                            </li>
                            <li>
                                <a className="btn btn-info" href="https://www.creative-tim.com/product/rotating-css-card" target="_blank">
                                    Download, it's free!
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="row">
                <h1 className="title">
                    This is our awesome team
                    <br />
                    <small>Present your team in an interesting way</small>
                </h1>
                <div className="col-sm-10 col-sm-offset-1">
                    {/* Your card components go here */}
                </div>
            </div>

            <div className="white-board">
                <div className="container">
                    {/* Instructions and code snippets */}
                </div>
            </div>
        </div>
    );
}

export default App;
