import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1>Job Portal</h1>
                <p>Jump in the portal to your new career today</p>
            </header>
            <nav className="homepage-nav">
                <ul>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Signup">Sign Up</Link></li>
                </ul>
            </nav>
            <section className="homepage-content">
                <h2>Welcome to Our Job Portal</h2>
                <p>This is where employers can post open jobs and job seekers can apply.</p>
            </section>
            <footer className="homepage-footer">
                <p>&copy; 2024 Job Portal. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
