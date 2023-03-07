import React from 'react';
import Banner from '../components/Banner.js';
import EmpSignup from '../components/Signup/EmpSignup.js';
import EmpLogin from '../components/Login/EmpLogin.jsx';
import Row from 'react-bootstrap/esm/Row.js';
import Container from 'react-bootstrap/esm/Container.js';
import SMSForm from '../components/smsForm/SMSForm.js';

function Emplogin(){
    return( 
    <div className="bContainer">
       <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Row>
            <Banner /> 
            </Row>
            <Row>
                
            <EmpLogin />
            
            </Row>
        </Container>
    </div>
    );
}

        

export default Emplogin;