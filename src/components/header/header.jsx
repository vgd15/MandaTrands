import React from "react";
import './header.css';
import Rectangle from "./img/Rectangle.png";
import logo from "./img/logo.png";



function Header() {

    return (
        <div className="header-global">
            <div className="header">

                <img className="img-header-1" src={Rectangle} alt="" />
                <img className="img-header-logo" src={logo} alt="" />
                
            </div>
        </div>
    )

}

export default Header;