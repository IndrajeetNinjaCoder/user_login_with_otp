
import Common from './pages/Dashboard/Sidebar';
import Login from './pages/Login';
import Register from './pages/Register';
import Otp from './pages/Otp';
import Error from './pages/Error';
import Headers from './components/Headers';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './styles/mix.css';

// import './pages/Dashboard/style/vendors/ti-icons/css/themify-icons.css';
// import './pages/Dashboard/style/vendors/base/vendor.bundle.base.css';
// import './pages/Dashboard/style/css/style.css';

// import './pages/Dashboard/style/vendors/ti-icons/css/them'


import Dashboard from './pages/Dashboard/Dashboard';
import Charts from './pages/Dashboard/Charts';
import Documentation from './pages/Dashboard/Documentation';
import FormElements from './pages/Dashboard/FormElements';
import Icons from './pages/Dashboard/Icons';
import Tables from './pages/Dashboard/Tables';


function App() {
  return (
    <>
      {/* <Headers /> */}
      
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user/otp' element={<Otp />} />
        

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/formelements" activeLink='formelements' element={<FormElements />} />
        <Route path="/dashboard/charts" element={<Charts />} />
        <Route path="/dashboard/tables" element={<Tables />} />
        <Route path="/dashboard/icons" element={<Icons />} />
        <Route path="/dashboard/documentation" element={<Documentation />} />


        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
    </>
  );
}

export default App;
