import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

const AuthLinks = ({ showModal, setShowModal, isShowLogin = true }) => {
    
    const [showLogin, setShowLogin] = useState(isShowLogin);
    return (
        // <div className="logo-auth-container">
        // <div className="authlinks-container">
        <div className={`modal-container ${showModal ? "active" : ""}`}>
       
            <button onClick={() => setShowModal(true)}><h3>Sign In</h3></button>
        

            {showModal && (
                <div className='modal'>
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
                            <input type="submit" value="Login" className="auth-btn" />
                            <p>Don't have an account? <button onClick={() => setShowLogin(false)}>Sign Up</button></p>
                        </div>
                    ) : (
                        <div className="signup-form">
                            <h1 className="auth-title">Sign Up</h1>
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
                     <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>

                </div>
            )}

        </div>
        // </div>
        // </div>

    );

}
export default AuthLinks;