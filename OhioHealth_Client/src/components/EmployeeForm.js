import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveEmployee, getEmployees } from '../reducers/employeeReducer';
import EmployeeList from './EmployeeList';

export default function EmployeeForm() {
  const [form, setForm] = useState({ FirstName: '', CityName: '', YearOfJoining: '' });
  const [showList, setShowList] = useState(false); // Control showing list
  const [notification, setNotification] = useState({ message: '', type: '' }); // Notification state
  const dispatch = useDispatch();

  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 5;

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.FirstName || !form.CityName || !form.YearOfJoining) {
      setNotification({
        message: 'All fields are required.',
        type: 'error'
      });
      setTimeout(() => setNotification({ message: '', type: '' }), 3000); // Hide after 3 seconds
      return;
    }

    // Dispatch save action
    dispatch(saveEmployee(form));

    // Show success notification
    setNotification({
      message: 'Employee saved successfully!',
      type: 'success'
    });

    // Reset form and hide list
    setForm({ FirstName: '', CityName: '', YearOfJoining: '' });
    setShowList(false);

    // Hide notification after 3 seconds
    setTimeout(() => setNotification({ message: '', type: '' }), 3000);
  };

  const handleRetrieve = () => {
    dispatch(getEmployees());
    setShowList(true); // Show EmployeeList inside the same container
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Employee Form </h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="FirstName"
                          name="FirstName"
                          className="form-control form-control-lg"
                          value={form.FirstName}
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="FirstName">First Name</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="CityName"
                          name="CityName"
                          className="form-control form-control-lg"
                          value={form.CityName}
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="CityName">City Name</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="number"
                          id="YearOfJoining"
                          name="YearOfJoining"
                          className="form-control form-control-lg"
                          value={form.YearOfJoining}
                          onChange={handleChange}
                          min={minYear}
                          max={currentYear}
                        />
                        <label className="form-label" htmlFor="YearOfJoining">Year of Joining</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 d-flex justify-content-between mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Save"
                      />
                      <button
                        type="button"
                        className="btn btn-secondary btn-lg"
                        onClick={handleRetrieve}
                      >
                        Retrieve
                      </button>
                    </div>
                  </div>
                </form>

                {/* Notification */}
                {notification.message && (
                  <div className={`alert alert-${notification.type === 'success' ? 'success' : 'danger'} mt-4`}>
                    {notification.message}
                  </div>
                )}

                {/* Inject EmployeeList here after Retrieve is clicked */}
                {showList && (
                  <div className="mt-5">
                    <EmployeeList />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
