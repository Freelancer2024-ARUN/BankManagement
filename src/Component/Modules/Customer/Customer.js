import {React, useRef } from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
function Customer() {

  const CustomerInput = useRef();

  /* Create New State Managable Object */
  const [CustomerData, SetInputs] = useState({
    customerId: 0,
    customerName: '',
    gender: 'Male',
    dob: new Date(),
    contactNo: '',
    fatherName: '',
    motherName: '',
    address: ''
  });

  /* Receive the CustomerId & Pass to API Service */
  const navigate = useNavigate();
  const { CustomerId } = useParams();


  /* Handle Change Event */
  const HandleChange = (event) => {
    var ElementName = event.target.name;
    var ElementValue = event.target.value;
    SetInputs({ ...CustomerData, [ElementName]: ElementValue });
  };

  function BackToCustomerPage(){
    navigate("/CustomerDetails");
  }

  /* Save Event */
  function SaveEvent() {
    debugger;

    // Send the customer data to the server
    fetch('https://localhost:7220/api/customer', {
      method: CustomerData.customerId == 0 ? 'POST' : 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(CustomerData) // Convert the customer data to a JSON string
    })
      .then(function (response) {
        if (response.ok) {
          return response.json(); // Assuming the server returns JSON data
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(function (Response) {
        /* Response Message */
        alert(Response.message);
        if (Response.status == "Success") {
          BackToCustomerPage();
        }

      })
      .catch(function (error) {
        console.error('There was a problem with the fetch operation:', error);
      });
  }


  

  /* Get the the Data From API Service */
  useEffect(() => {
    if (CustomerId != 0) {

      // Send the customer data to the server
      fetch('https://localhost:7220/api/Customer/' + CustomerId, {
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
            debugger;
            /* Set the Response Value Json Array */
            SetInputs(Response.result);
          }

        })
        .catch(function (error) {
          console.error('There was a problem with the fetch operation:', error);
        });

    }
    
  CustomerInput.current.focus();
  }, [CustomerId]);


  return (
    <div className="Customer">
      <br></br>
      <br></br>
      <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-6">
          <input type='hidden' value={CustomerData.customerId || "0"} />
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name<span class="text-danger">*</span></label>
                <input type="text" class="form-control" name='customerName' ref={CustomerInput} value={CustomerData.customerName || ""} onChange={HandleChange}
                  placeholder="Ex : Ram" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Gender</label>
                <div class="input-group">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="gender"
                      checked={CustomerData.gender == "Male"} value="Male" onChange={HandleChange} />
                    <label class="form-check-label" for="rdoMale">
                      Male
                    </label>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="gender"
                      checked={CustomerData.gender == "FeMale"} value="FeMale" onChange={HandleChange} />
                    <label class="form-check-label" for="rdoFemale">
                      Fe-Male
                    </label>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="gender"
                      checked={CustomerData.gender == "Others"} value="Others" onChange={HandleChange} />
                    <label class="form-check-label" for="rdoOthers">
                      Others
                    </label>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Date Of Birth<span class="text-danger">*</span></label>
                <input type="date" class="form-control" name='dob' value={CustomerData.dob || ""} onChange={HandleChange}
                  placeholder="Ex: 01-jan-1991" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Contact No<span class="text-danger">*</span></label>
                <input type="number" class="form-control" name='contactNo' value={CustomerData.contactNo || ""} onChange={HandleChange}
                  placeholder="Ex : 123456789" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Father Name<span class="text-danger">*</span></label>
                <input type="text" class="form-control"
                  placeholder="ex : Subramaniam" name='fatherName' value={CustomerData.fatherName || ""} onChange={HandleChange} />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Mother Name<span class="text-danger">*</span></label>
                <input type="text" class="form-control"
                  placeholder="Ex : Shanthi" name='motherName' value={CustomerData.motherName || ""} onChange={HandleChange} />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Address<span class="text-danger">*</span></label>
                <textarea type="text" class="form-control"
                  placeholder="ex : Subramaniam" name='address' rows={4} value={CustomerData.address || ""} onChange={HandleChange} />
              </div>
            </div>
          </div>
          <div class="mb-3 text-end">
            <button type="button" onClick={SaveEvent} class="btn btn-success">Save</button>&nbsp;
            <button type="button" onClick={BackToCustomerPage} class="btn btn-danger">Cancel</button>
          </div>

        </div>
        <div class="col-lg-3"></div>
      </div>
    </div>
  );
}
export default Customer;
