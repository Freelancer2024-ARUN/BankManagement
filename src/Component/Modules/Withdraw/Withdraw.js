import React from 'react';
function Withdraw() {
  return (
    <div className="Withdraw">
        <br></br>
        <br></br>
        <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label for="accountNumber" class="form-label">Account Number <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="accountNumber" placeholder="Enter Account Number" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="accountHolderName" class="form-label">Account Holder Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="accountHolderName" placeholder="Enter Name" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="contactNumber" class="form-label">Contact Number <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="contactNumber" placeholder="Enter Contact Number" />
              </div>
            </div>
          </div>
          <div class="row">

            <div class="col-lg-4">
              <div class="mb-3">
                <label for="WithdrawalDate" class="form-label">Withdrawal Date <span class="text-danger">*</span></label>
                <input type="date" class="form-control" id="WithdrawalDate" />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mb-3">
                <label for="WithdrawalAmount" class="form-label">Withdrawal Amount <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="WithdrawalAmount" placeholder="Enter Amount" />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mb-3">
                <label for="depositMethod" class="form-label">Withdrawal Method <span class="text-danger">*</span></label>
                <select class="form-select" id="depositMethod">
                  <option selected>Choose...</option>
                  <option value="ATM">ATM</option>
                  <option value="Bank Counter">Bank Counter</option>
                  <option value="Online Transfer">Online Transfer</option>
                </select>
              </div>
            </div>
          </div>
          <div class="mb-3 text-end">
            <button type="button" onclick="Save()" class="btn btn-success">Withdraw</button>&nbsp;
            <button type="button" class="btn btn-danger">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Withdraw;
