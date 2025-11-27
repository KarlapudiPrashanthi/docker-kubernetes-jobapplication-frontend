import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./navbar.css";

function StudentNavbar() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem('isStudentLoggedIn');
        localStorage.removeItem('student');
        navigate('/');
        window.location.reload();
    };

    return (
        <nav className="navbar">
            <h2>Job Application Tracker</h2>
            <ul>
                <li><Link to="/studenthome">Home</Link></li>
                <li><Link to="/studentscholarship">Jobs</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/myapplications">My Applications</Link></li> {/* New Link for MyApplications */}
                <li><Link onClick={handleLogout}>LogOut</Link></li>
            </ul>
        </nav>
    );
}

export default StudentNavbar;
