import React from "react";
import './header.css';
import rectangle from "./img/Rectangle.png";
import logo from "./img/logo.png";
import bolinhas from "./img/bolinhas.png";
import seta from "./img/seta.png";
import mulher from "./img/mulher.png";
import bolona from "./img/bolona.png";
import triangle from "./img/triangle.png";
import zigzag from "./img/zigzag.png";

function Header() {

    return (
        <div className="header-global">
            <div className="header">

                <img className="img-header-1" src={rectangle} alt="" />
                <img className="img-header-logo" src={logo} alt="" />
                <img className="img-header-bolinhas" src={bolinhas} alt=""/>
                <img className="img-header-seta" src ={seta} alt=""/>
                <img className="img-header-bolona" src ={bolona} alt=""/>
                <img className="img-header-zigzag" src ={zigzag} alt=""/>
                <img className="img-header-triangle" src ={triangle} alt=""/>
                
                <p className="paragrafo-header"> NRF 2023 <br/> Kobe Bryant e <br/> WhatsApp Payment</p>

                <p className="paragrafo-header-2"> Edição 06 08 </p>

            </div>

               <img className="img-header-mulher" src ={mulher} alt=""/>

        </div>
    )

}

export default Header;