import React, { useState, useEffect } from 'react';
import './StudentProfile.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const [profileData, setProfileData] = useState({});
    const [resumeFile, setResumeFile] = useState(null);
    const [error, setError] = useState('');
    const [uploadSuccess, setUploadSuccess] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (userId) {
                    const response = await axios.get(`http://localhost:8080/api/users/profile?userId=${userId}`);
                    setProfileData(response.data);
                } else {
                    setError("User not logged in");
                }
            } catch (error) {
                console.error("Error fetching profile data:", error);
                setError("Could not load profile data");
            }
        };
        fetchProfileData();
    }, []);

    const handleEditClick = () => {
        navigate('/editprofile');
    };

    const handleChangePasswordClick = () => {
        navigate('/changepassword');
    };

    const handleResumeChange = (e) => {
        setResumeFile(e.target.files[0]);
    };

    const handleResumeUpload = async () => {
        if (!resumeFile) {
            alert('Please choose a .docx file');
            return;
        }

        const formData = new FormData();
        formData.append('resume', resumeFile);
        formData.append('userId', localStorage.getItem('userId'));

        try {
            await axios.post('http://localhost:8080/api/users/upload-resume', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setUploadSuccess('Resume uploaded successfully!');
        } catch (error) {
            console.error('Error uploading resume:', error);
            setUploadSuccess('Failed to upload resume.');
        }
    };

    return (
        <div className='studentprofile'>
            <div className="profile-container">
                <h2>User Profile</h2>
                {error ? (
                    <p className="error">{error}</p>
                ) : (
                    <div className="profile-card">
                        <p><strong>Name:</strong> {profileData.name}</p>
                        <p><strong>Email:</strong> {profileData.email}</p>
                        <p><strong>Phone:</strong> {profileData.phone}</p>
                        <p><strong>Aadhar:</strong> {profileData.aadhar}</p>
                        <p><strong>Date of Birth:</strong> {profileData.dob}</p>
                        <p><strong>Father's Name:</strong> {profileData.fatherName}</p>
                        <p><strong>Mother's Name:</strong> {profileData.motherName}</p>
                        <p><strong>Mother's Phone:</strong> {profileData.motherPhone}</p>
                        <p><strong>College:</strong> {profileData.college}</p>
                        <p><strong>CGPA:</strong> {profileData.cgpa}</p>
                        <p><strong>User Type:</strong> {profileData.userType}</p>

                        <hr />

                        <label><strong>Edit/Upload Resume:</strong></label><br />
                        <input type="file" accept=".docx" onChange={handleResumeChange} /><br /><br />
                        <button onClick={handleResumeUpload}>Save Resume</button>
                        {uploadSuccess && <p>{uploadSuccess}</p>}

                        <br /><br />
                        <button onClick={handleEditClick} className="edit-button">Edit Profile</button>
                        <button onClick={handleChangePasswordClick} className="change-password-button">Change Password</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;
