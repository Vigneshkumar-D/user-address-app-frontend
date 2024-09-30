import logo from './logo.svg';
import './App.css';

import RegistrationForm from './component/registration';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import UserList from './component/UserList';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<UserList />} />
          <Route path="/register" element={<RegistrationForm />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
