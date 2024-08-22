import React, { useReducer } from 'react';

// Define the initial state
const initialState = {
  accountNumber: '',
  accountHolderName: '',
  contactNumber: '',
  depositDate: '',
  depositAmount: '',
  depositMethod: '',
};

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'SET_ACCOUNT_NUMBER':
      return { ...state, accountNumber: action.value };
    case 'SET_ACCOUNT_HOLDER_NAME':
      return { ...state, accountHolderName: action.value };
    case 'SET_CONTACT_NUMBER':
      return { ...state, contactNumber: action.value };
    case 'SET_DEPOSIT_DATE':
      return { ...state, depositDate: action.value };
    case 'SET_DEPOSIT_AMOUNT':
      return { ...state, depositAmount: action.value };
    case 'SET_DEPOSIT_METHOD':
      return { ...state, depositMethod: action.value };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

function Deposit() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = () => {
    console.log('Form data:', state);
    // Implement the logic to save the form data
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <div className="Deposit">
      <br />
      <br />
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="accountNumber" className="form-label">
                  Account Number <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="accountNumber"
                  placeholder="Enter Account Number"
                  value={state.accountNumber}
                  onChange={(e) =>
                    dispatch({ type: 'SET_ACCOUNT_NUMBER', value: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="accountHolderName" className="form-label">
                  Account Holder Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="accountHolderName"
                  placeholder="Enter Name"
                  value={state.accountHolderName}
                  onChange={(e) =>
                    dispatch({ type: 'SET_ACCOUNT_HOLDER_NAME', value: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="contactNumber" className="form-label">
                  Contact Number <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contactNumber"
                  placeholder="Enter Contact Number"
                  value={state.contactNumber}
                  onChange={(e) =>
                    dispatch({ type: 'SET_CONTACT_NUMBER', value: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="depositDate" className="form-label">
                  Deposit Date <span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="depositDate"
                  value={state.depositDate}
                  onChange={(e) =>
                    dispatch({ type: 'SET_DEPOSIT_DATE', value: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="depositAmount" className="form-label">
                  Deposit Amount <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="depositAmount"
                  placeholder="Enter Amount"
                  value={state.depositAmount}
                  onChange={(e) =>
                    dispatch({ type: 'SET_DEPOSIT_AMOUNT', value: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="depositMethod" className="form-label">
                  Deposit Method <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  id="depositMethod"
                  value={state.depositMethod}
                  onChange={(e) =>
                    dispatch({ type: 'SET_DEPOSIT_METHOD', value: e.target.value })
                  }
                >
                  <option value="" disabled>
                    Choose...
                  </option>
                  <option value="ATM">ATM</option>
                  <option value="Bank Counter">Bank Counter</option>
                  <option value="Online Transfer">Online Transfer</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mb-3 text-end">
            <button type="button" onClick={handleSubmit} className="btn btn-success">
              Deposit
            </button>
            &nbsp;
            <button type="button" onClick={handleReset} className="btn btn-danger">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
