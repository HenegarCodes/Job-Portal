import React from 'react';
import { useState } from 'react';
import axios from 'axios'; // Make sure axios is installed

function Signup() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/signup', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default Signup;
