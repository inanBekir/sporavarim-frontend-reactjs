import React from 'react';
import '../assets/style/header.scss';

export function Header(){
    return(
        <div className="col-sm-2 col-md-2 col-lg-1 col-xl-1">
            <nav className="navbar navbar-light navbar-expand-sm px-0 flex-row flex-nowrap">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarWEX" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                 <div class="navbar-collapse collapse" id="navbarWEX">
                    <div class="nav flex-sm-column flex-row">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}