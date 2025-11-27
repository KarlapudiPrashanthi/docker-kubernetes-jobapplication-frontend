import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "./navbar.css";

function AdminNavbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/');
    window.location.reload()
  };
    return (
        <nav className="navbar">
            <h2>Job Application Tracker</h2>
            <ul>
            <li><Link to="/adminhome">Home</Link></li>
                <li><Link to="/addscholarship">AddJobs</Link></li>
                <li><Link to="/addstudent">AddUser</Link></li>
                <li><Link to="/viewstudent">ViewUsers</Link></li>
                <li><Link to="/applications">Applications</Link></li>
                <li><Link to="/viewscholarship">ViewJobs</Link></li>
                <li><Link onClick={handleLogout}>LogOut</Link></li>
            </ul>
        </nav>
    );
}

export default AdminNavbar;
