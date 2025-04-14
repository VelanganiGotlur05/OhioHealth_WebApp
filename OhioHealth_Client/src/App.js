// import React from 'react';
// import EmployeeForm from './components/EmployeeForm';
// import EmployeeList from './components/EmployeeList';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   return (
//     <div className="p-4">
//       <EmployeeForm />
//       <EmployeeList />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // This should include your gradient-custom and card-registration styles

function App() {
  return (
    <>
      <EmployeeForm />
      {/* <EmployeeList/> */}
    </>
  );
}

export default App;
