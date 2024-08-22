import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function CustomerDetails() {

    /* Handle the Response Objvalue & Set */
    const [Customers, SetCustomers] = useState([]);
    const navigate = useNavigate();

    /* Get the the Data From API Service */
    useEffect(() => {

        // Send the customer data to the server
        fetch('https://localhost:7220/api/customer', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(function (response) {
                if (response.ok) {
                    return response.json(); // Assuming the server returns JSON data
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .then(function (Response) {
                if (Response.status == "Success") {
                    /* Set the Response Value Json Array */
                    SetCustomers(Response.result);
                }

            })
            .catch(function (error) {
                console.error('There was a problem with the fetch operation:', error);
            });

    });

    /* Delete Event */
    function HandleDelete(CustomerId) {
        if (window.confirm("Are you sure want to delete this Customer?")) {
            // Send the customer data to the server
            fetch('https://localhost:7220/api/Customer/' + CustomerId, {
                method: 'Delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
                .then(function (response) {
                    if (response.ok) {
                        return response.json(); // Assuming the server returns JSON data
                    } else {
                        throw new Error('Network response was not ok');
                    }
                })
                .then(function (Response) {
                    debugger;
                    if (Response.status == "Success") {
                        /* Set the Response Value Json Array */
                        SetCustomers(Customers.filter(Customer => Customer.CustomerId != CustomerId));
                    }

                })
                .catch(function (error) {
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
    }

    function HandleCustomerPageLoad(CustomerId) {
        navigate("/Customer/" + CustomerId);
        //window.location.href = "/Customer/";
    }

    return (
        <div className="CustomerDetails">
            <br></br>
            <br></br>
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-8">
                    <div class="col-lg-12 text-end">
                        <button type='button' onClick={() => HandleCustomerPageLoad(0)} class="btn btn-success">+&nbsp;Add New</button>
                    </div>
                    <div class="col-lg-12 text-end">
                        <br />
                    </div>
                    <div class="col-lg-12">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Customer Name</th>
                                    <th>Contact No</th>
                                    <th>Father Name</th>
                                    <th>Mother Name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Customers.map((Customer, Index) => (
                                        <tr Key={Customer.customerId}>
                                            <td>{Index + 1}</td>
                                            <td>{Customer.customerName}</td>
                                            <td>{Customer.contactNo}</td>
                                            <td>{Customer.fatherName}</td>
                                            <td>{Customer.motherName}</td>
                                            <td class="text-center">
                                                <button type='button' onClick={() => HandleCustomerPageLoad(Customer.customerId)} class="btn btn-primary">&nbsp;Edit&nbsp;</button>&nbsp;&nbsp;
                                                <button type='button' onClick={() => HandleDelete(Customer.customerId)} class="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-lg-2"></div>
            </div>
        </div>
    );
}
export default CustomerDetails;
