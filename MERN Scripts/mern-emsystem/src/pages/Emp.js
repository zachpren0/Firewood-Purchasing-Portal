import React from 'react'
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import EmpTools from '../components/EmpTools.js';

function Emp(){
    return(
        <div className="main">
            <Banner />
            <div className="container">
                <EmpTools />
                
            </div>
            
            <div className="footer">
                <footer className="App-footer">
                    <Navbar />
                </footer>
            </div>
        </div>
    );
}
export default Emp;