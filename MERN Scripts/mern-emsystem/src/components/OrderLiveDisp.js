import React from 'react';
import axios from 'axios';



export default class OrderLiveDisp extends React.Component {
  
  state = {
    orders: [],
    color: []
  }

  componentDidMount() {
    
    axios.get(`http://localhost:5000/order`)
      .then(res => {
        const orderData = res.data;
        this.setState({ orders:orderData });
      });
      this.setState({color: new Array(this.state.orders.length).fill("green")});
  }

  

  approve(index) {
    console.log("clicked!", index);
    const cloneColor = [...this.state.color];
    cloneColor[index] = "approved"
    this.setState({ color: cloneColor });
  }
  decline(index) {
    console.log("clicked!", index);
    const cloneColor = [...this.state.color];
    cloneColor[index] = "denied"
    this.setState({ color: cloneColor });
  }





  
  render() {
    return (
      
      <ul className="dblist">
        <h1> Order history </h1>
        {
          this.state.orders
            .map((content, index) =>
              
            <li id="list-orderList" key={content._id}>
            <div className="orderList" id = {content._id} key={`buttons-${index}`}>
              <div id="current-orderEmail" className ="orderChild">
                <span>Email: {content.Name}</span>&emsp;
              </div>
              <div id="current-orderQty" className ="orderChild">
                <span>Quantity Ordered: {content.Quantity}</span>&emsp;
              </div>
              <div id="current-orderLoc" className ="orderChild">
                <span>Location: {content.Location}</span>&emsp;
              </div>
              <div id="current-approve-deny"className ="orderChild"> 
                <p> {this.state.color[index]}</p>
                <button onClick={() => this.approve(index)}> Approve</button>
                <button onClick={() => this.decline(index)}> Deny </button>
                
              </div>
            </div>
            
          </li>
              
            )
        }
      </ul>
    )

  }

}