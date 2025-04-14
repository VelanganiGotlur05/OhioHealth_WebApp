import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from '../reducers/employeeReducer';

export default function EmployeeList() {
  const dispatch = useDispatch();
  const { employeeList, loading, error } = useSelector(state => state.employee);

  const handleRetrieve = () => {
    dispatch(getEmployees());
  };


const isArray = Array.isArray(employeeList);
const employeeItems = isArray ? employeeList : [employeeList];

return (
  <div className="container mt-5">
    {loading && <div className="alert alert-info">Loading...</div>}
    {error && <div className="alert alert-danger">{error}</div>}

    {employeeItems && employeeItems.length > 0 ? (
      <div className="row">
        <h4 className="col-12 mb-3">Data Saved Earlier</h4>
        {employeeItems.map((employee, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                <strong>First Name:</strong> {employee.firstName || 'N/A'} <br />
                  <strong>City:</strong> {employee.cityName || 'N/A'} <br />
                  <strong>Year of Joining:</strong> {employee.yearOfJoining || 'N/A'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      !loading && !error && (
        <div className="alert alert-warning">
          No employees available. Please add or retrieve them.
        </div>
      )
    )}
  </div>
);
}