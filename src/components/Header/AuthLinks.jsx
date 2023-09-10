import React, { useState } from 'react';

function AuthLinks() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    if (isLoggedIn) {
    return (
      <div className="auth-links">
        <a href="/profile">Profile</a>
        <a href="#" onClick={() => setIsLoggedIn(false)}>Logout</a>
      </div>
    );
  } else {
    return (
      <div className="auth-links">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    );
  }
}

export default AuthLinks;