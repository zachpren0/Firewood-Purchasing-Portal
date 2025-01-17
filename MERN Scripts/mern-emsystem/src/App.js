import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Startpage from './pages/Startpage.js';
import Orderqty from './pages/Orderqty.js';
import Emplogin from './pages/Emplogin';
import Payment from './pages/Payment.js';
import Emp from './pages/Emp.js';
import Inventory from './pages/Inventory.js';
import Instructions from './pages/Instructions.js';
import OrderHistory from './pages/OrderHistory.js';
import About from './pages/About.js';
import CashConfirmation from './pages/CashConfirmation';
import ETransferConfirmation from './pages/ETransferConfirmation';
import SquarePay from './pages/SquarePay';
import SquareReceipt from './pages/SquareReceipt';
import SuperAdmin from './pages/SuperAdmin';
import CustOrderHist from './pages/CustOrderHist';
import ProtectedRoutes from './components/hooks/protectedRoutes';
import FrontProtectedRoutes from './components/hooks/frontProtectedRoutes';
import ResetPassword from './pages/ResetPassword.js';
import RequestPasswordReset from './pages/RequestPasswordReset.js';
import LocationProtectedRoutes from './components/hooks/locationProtectedRoutes';

//let isAuth = sessionStorage.getItem("auth");


function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Startpage/>} />
          <Route path="order" element={<Orderqty/>} />
          <Route path="login" element={<Emplogin/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/custhistory" element={<CustOrderHist/>} />
          <Route path="/login/request-password-reset" element={<RequestPasswordReset/>}/>
          <Route path="/login/reset-password" element={<ResetPassword/>} />

          {/*frontend protected routes*/}
          <Route element={<FrontProtectedRoutes />}>
            <Route path="order/payment" element={<Payment/>} />
            <Route path="order/payment/cashConfirmation" element={<CashConfirmation/>} />
            <Route path="order/payment/ETransferConfirmation" element={<ETransferConfirmation/>} />
            <Route path="order/payment/SquarePay" element={<SquarePay/>} />
            <Route path="order/payment/SquareReceipt" element={<SquareReceipt/>} />
          </Route>
          
          {/*admin protected routes*/}
          <Route element={<ProtectedRoutes />}>
            <Route path="login/emp" element={<Emp/>}/>
            <Route path="login/emp/inventory" element={<Inventory/>} />
            <Route path="emp/instructions" element={<Instructions/>} />
          </Route>

          <Route element={<LocationProtectedRoutes />}>
            <Route path="login/emp/history" element={<OrderHistory/>} />
            <Route path="login/emp/employee" element={<SuperAdmin/>} />
          </Route>
          
        </Routes>
        
      </div>
  );
}

export default App;
