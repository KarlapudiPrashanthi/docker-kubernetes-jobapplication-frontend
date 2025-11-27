import React, { useState } from 'react';
import './addscholarship.css'; // Ensure you have this CSS file for styling
import axios from 'axios'; // For making HTTP requests

function AddScholarship() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        type: '',
        eligibility: '',
        deadline: '',
        amount: '',
        institution: '',
        applicationUrl: '',
        contactEmail: '',
        status: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/scholarships/add", formData);
            alert("Job role added successfully!");

            // Reset form fields
            setFormData({
                name: '',
                description: '',
                type: '',
                eligibility: '',
                deadline: '',
                amount: '',
                institution: '',
                applicationUrl: '',
                contactEmail: '',
                status: '',
            });
        } catch (error) {
            console.error("Error adding Job role:", error);
            alert("Failed to add job role. Please try again.");
        }
    };

    return (
        <div className="add-scholarship">
            <div className="addscholarshipcontainer">
                <h2>Add New Job</h2>
                <form onSubmit={handleSubmit}>
                    <label>Job Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />

                    <label>Job Type:</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                    >
                        <option value="">-----------</option>
                        <option value="Merit-Based">HR</option>
                        <option value="Need-Based">fresher</option>
                        <option value="Athletic">senior</option>
                        <option value="Other">Other</option>
                    </select>

                    <label>Eligibility Criteria:</label>
                    <input
                        type="text"
                        name="eligibility"
                        value={formData.eligibility}
                        onChange={handleChange}
                        required
                    />

                    <label>Deadline:</label>
                    <input
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        required
                    />

                    <label>Amount:</label>
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                    />

                    <label>Company:</label>
                    <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        required
                    />

                    <label>Application URL:</label>
                    <input
                        type="url"
                        name="applicationUrl"
                        value={formData.applicationUrl}
                        onChange={handleChange}
                    />

                    <label>Contact Email:</label>
                    <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleChange}
                    />

                    <label>Status:</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="">-----------</option>
                        <option value="Open">Open</option>
                        <option value="Closed">Closed</option>
                    </select>

                    <button className="button" type="submit">Add Job</button>
                </form>
            </div>
        </div>
    );
}

export default AddScholarship;