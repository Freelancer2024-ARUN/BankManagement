import React from 'react';

import Home from '../Modules/Home/Home'
import CustomerDetails from '../Modules/Customer/CustomerDetails'
import Customer from '../Modules/Customer/Customer'
import Deposit from '../Modules/Deposit/Deposit'
import Withdraw from '../Modules/Withdraw/Withdraw'
import Transfer from '../Modules/Transfer/Transfer'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function MainContent() {
    return (
        <div className="MainContent">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Home' element={<Home />} />
                    <Route path='/CustomerDetails' element={<CustomerDetails />} />
                    <Route path='/Customer/:CustomerId' element={<Customer />} />
                    <Route path='/Deposit' element={< Deposit/>} />
                    <Route path='/Withdraw' element={< Withdraw/>} />
                    <Route path='/Transfer' element={< Transfer/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default MainContent;
