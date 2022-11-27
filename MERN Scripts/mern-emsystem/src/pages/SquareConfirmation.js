import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import PaymentSummary from '../components/PaymentSummary.js';
import Progressbar from '../components/Progressbar.js';


//import PlaceOrder from '..components/hooks/placeOrder.js';

function SquareConfirmation(){
const navigate = useNavigate();
    return(
    <div className="appMain">
        <div className="appHeader">
        <Banner />
        </div>
        <body className="appContainer">
            <div className="leftDiv">
                <Logo />
            </div>
            <div className="middleDiv">
                <p> Your order has successfully been processed!
                    Check your email for the pickup location of your firewood, it should be ready for you when you get there!
                    (WIP, email confirmation not functioning yet)
                    </p>
                    <div className="buttonBox">
                            <button className="buttonStyle" onClick={() => {navigate("/")}}>homepage</button>
                    </div>
            </div>
            <div className="rightDiv">
                <Link onClick={() => navigate(-1)}>Click here to go back</Link><br></br>
            </div>
        </body>
        <div className="footer">
            <footer className="App-footer">
                <Navbar />
            </footer>
        </div>
    </div>
    );
}

export default SquareConfirmation;