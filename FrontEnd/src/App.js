import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/Login';
import HospitalPage from './Components/HospitalPage';
import StudentPage from './Components/StudentPage';
import University from './Components/University';
const App = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Hospital" element={<HospitalPage />} />
                <Route path="/Student" element={<StudentPage />} />
                <Route path="/University" element={<University />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </Router>
    );
};

export default App;
