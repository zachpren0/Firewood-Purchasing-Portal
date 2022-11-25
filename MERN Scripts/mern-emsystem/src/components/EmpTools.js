import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class EmpTools extends Component {
    render() {
        return(
        <div className="adminTools">
            <Link to="/login/emp/viewOrders" style={{textDecoration: 'none' }}>
            <button className="viewOrders" style={{textDecoration: 'none' , color: 'black'}}>
            Current Orders
            </button> </Link>
            
            <Link to="/login/emp/inventory" style={{textDecoration: 'none' }}>
            <button className="inventoryByLoc" style={{textDecoration: 'none' , color: 'black'}}  >
            Inventory By Location
            </button> </Link>

            <Link to="/login/emp/history" style={{textDecoration: 'none' }}>
            <button className="orderHistory" style={{textDecoration: 'none' , color: 'black'}}>
            Order History
            </button> </Link>
        </div>
        );
    }
}