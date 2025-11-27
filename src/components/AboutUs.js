import React from 'react';
import "./aboutus.css"; // Import the CSS for styling

function AboutUs() {
    return (
        <div className='aboutus'>
        <div className="aboutus-container">
            <div className="aboutus-content">
                <h2>About Us</h2>
                <p>
                    An online job application tracker is a digital tool designed to help job seekers organize and manage their job search 
                    process efficiently. It allows users to record details such as the companies they’ve applied to, job titles, dates of 
                    application, and the current status of each application—whether it’s under review, in the interview stage, or concluded.
                     Additionally, it can track important deadlines, interview dates, and documents submitted like resumes and cover letters. 
                     By providing a centralized overview of all job search activities, an online job application tracker helps users stay organized, 
                     follow up appropriately, and increase their chances of success during the job hunt.
                </p>
                <h3>Our Mission</h3>
                <p>
                    I chose your online job application tracker because it offers an intuitive and organized way to manage my job search. 
                    The ability to track applications, deadlines, and interview stages all in one place is incredibly valuable, especially 
                    when applying to multiple roles. I also appreciate the user-friendly interface and features like status updates and 
                    reminders, which help keep me accountable and reduce stress during the process. Compared to other platforms, yours 
                    stands out for its simplicity, reliability, and focus on user experience.
                </p>
                <h3>Why Choose Us?</h3>
                <ul>
                    <li>Comprehensive database of Jobs.</li>
                    <li>Personalized dashboard to track your applications and progress.</li>
                    <li>Real-time updates on new Jobs and deadlines.</li>
                    <li>Guidance on how to apply and improve your chances of success.</li>
                </ul>
                <h3>Contact Us</h3>
                <p>
                    If you have any questions or need assistance, feel free to reach out to us at 
                    <a href="mailto:support@jobplatform.com"> support@jobplatform.com</a>.
                    We’re here to help you make the most of your educational journey.
                </p>
            </div>
        </div>
        </div>
    );
}

export default AboutUs;
