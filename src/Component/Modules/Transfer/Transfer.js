import React, { useCallback } from 'react';



function Transfer() {
  return (
    <div className="Transfer">
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="fromAccountNumber" className="form-label">
                  From Account Number <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fromAccountNumber"
                  placeholder="Enter From Account Number"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="fromAccountHolderName" className="form-label">
                  Account Holder Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fromAccountHolderName"
                  placeholder="Enter Name"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="toAccountNumber" className="form-label">
                  To Account Number <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="toAccountNumber"
                  placeholder="Enter To Account Number"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="toAccountHolderName" className="form-label">
                  Account Holder Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="toAccountHolderName"
                  placeholder="Enter Name"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="transferDate" className="form-label">
                  Transfer Date <span className="text-danger">*</span>
                </label>
                <input type="date" className="form-control" id="transferDate" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="transferAmount" className="form-label">
                  Transfer Amount <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="transferAmount"
                  placeholder="Enter Amount"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="mb-3 text-end">
              <button
                onClick={HandleSaveClick}
                className="btn btn-success">
                Transfer
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger">Cancel</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
}

export default Transfer;
