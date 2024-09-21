import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authProvider } from './authProvider'; // Import your authProvider

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            await authProvider.signup({ username: email, password });
            navigate('/'); // Redirect to homepage or login page after signup
        } catch (err) {
            setError(err.message || 'Signup failed');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit} style={{ width: '300px' }}>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        style={{ width: '100%' }}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        style={{ width: '100%' }}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" style={{ marginTop: '20px', width: '100%' }}>Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
