import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from './Logo.js';
import Logo2 from './Logo2.js';
import Drop from './Dropdown.js';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

//main banner

export default class Banner extends Component {
    render(){
        return(
            <Container fluid style={{paddingRight: 0}}>
                    <div className="bHeader">
                    <Col xl={{span:1,offset:0}} lg={1} className="d-none d-lg-block d-md-block"><Logo2 fluid /></Col>
                    <Col xl={{span: 6, offset:0}} lg={{span: 7, offset:1}} md={{span: 7, offset:1}} ><Link to="/" className="Link" style={{textDecoration: 'none', padding: 20 }}><h1 className="bearHug">rotary club of kelowna ogopogo x camp oac</h1></Link> </Col>
                    <Col lg={{span:1, offset: 0}} md={{span:1, offset: 0}} sm={{span:1, offset: 3}} xs={{span:1, offset: 2}} className="d-xl-none d-block"><Drop/></Col>
                    <Col xl={{span:4,offset:0}} lg={{span: 4, offset:4}} className="d-none d-xl-block" id="headerButton" align="center">
                        <Button variant="outline-light" size="sm" href="/about" style={{marginRight: 0, border: 0}}>About</Button>{' '}
                        <Button variant="outline-light" size="sm" href="https://portal.clubrunner.ca/824" target="_blank" style={{marginRight: 0,border: 0}}>Kelowna Rotary</Button>{' '}
                        <Button variant="outline-light" size="sm" href="https://www.campoac.com" target="_blank" style={{marginRight: 0,border: 0}}>Camp OAC</Button>{' '}
                        <Button variant="outline-light" size="sm" href="/custhistory" style={{marginRight: 0,border: 0}}>View Orders</Button>{' '}
                        <Button variant="outline-light" size="sm" href="/login" style={{border: 0}}>Admin Portal</Button>{' '}
                    </Col>
                    <Col xl={{span:1, offset:0}} lg={{span:1,offset:0}}  md={{span:1,offset:0}} className="d-none d-lg-block d-md-block">
                        <div className="bHeadicons">
                            <Logo fluid/>
                         </div>
                    </Col>
                </div>  
            </Container>
        );            
    }
}