import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Resume = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please upload a .docx file');
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);

    try {
      await axios.post('http://localhost:8080/api/resume/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Redirect to admin page after upload
      navigate('/admin'); // Adjust this route to your actual admin path
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Upload Resume</h2>
      <input type="file" accept=".docx" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginLeft: '1rem' }}>
        Upload
      </button>
    </div>
  );
};

export default Resume;
