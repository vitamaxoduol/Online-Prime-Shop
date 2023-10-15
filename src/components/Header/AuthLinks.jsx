import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useAuth } from './../Contexts/AuthContext';

const AuthLinks = ({ showModal, setShowModal, isShowLogin = true }) => {
    
    const [showLogin, setShowLogin] = useState(isShowLogin);
    const { user, isAuthenticated, setUser, login } = useAuth(); // Destructure the login function
    // eslint-disable-next-line
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const  username = user?.users?.[0]?.username;

    const handleLogin = async () => {
        const { username, password } = loginData; // Use loginData for login
        await login(username, password); // Use the login function from useAuth
        setShowModal(false); // Close the modal after successful login
    };
    
    const handleLogout = () => {
        // Implement logout logic here
        setUser({});
        setShowModal(false);
    };

    return (
        <div className={`modal-container ${showModal ? "active" : ""}`}>
            {isAuthenticated ? (
                <>
                    <h3>Welcome, {username}! </h3>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <button onClick={() => setShowModal(true)}>
                    <h3>Sign In</h3>
                </button>
            )}

            {showModal && (
                <div className='modal'>
                    <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>
                    {showLogin ? (
                        <div className="login-form">
                            <h1 className="auth-title">Sign In</h1>
                            <div className="input-group">
                                <FaUser className="icon" />
                                <input type="text" name="username" placeholder="Username" />
                            </div>
                            <div className="input-group">
                                <FaLock className="icon" />
                                <input type="password" name="password" placeholder="Password" />
                            </div>
                            <button onClick={handleLogin}>Login</button> {/* Use handleLogin for login button */}
                            <p>Don't have an account? <button onClick={() => setShowLogin(false)}>Sign Up</button></p>
                        </div>
                    ) : (
                        <div className="signup-form">
                            <h1 className="auth-title">Sign Up</h1>
                            <div className="input-group">
                                <FaUser className="icon" />
                                <input type="text" name="firstname" placeholder="Firstname" />
                            </div>
                            <div className="input-group">
                                <FaUser className="icon" />
                                <input type="text" name="lastname" placeholder="Lastname" />
                            </div>
                            <div className="input-group">
                                <FaUser className="icon" />
                                <input type="text" name="username" placeholder="Username" />
                            </div>
                            <div className="input-group">
                                <FaEnvelope className="icon" />
                                <input type="email" name="email" placeholder="Email" />
                            </div>
                            <div className="input-group">
                                <FaLock className="icon" />
                                <input type="password" name="password" placeholder="Password" />
                            </div>
                            <input type="submit" value="Sign Up" className="auth-btn" />
                            <p>Already have an account? <button onClick={() => setShowLogin(true)}>Sign In</button></p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AuthLinks;