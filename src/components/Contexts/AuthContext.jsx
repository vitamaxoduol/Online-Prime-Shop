import React, { createContext, useState, useContext } from 'react';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const isAuthenticated = Object.keys(user).length > 0;
    const [isLoading, setIsLoading] = useState(false);

    const login = async (username, password) => {
        try {
          setIsLoading(true);
    
          // Send a POST request to the API to authenticate the user
          const response = await fetch('https://dummyjson.com/users/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
    
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
            console.log('User data:', userData);
          } else {
            // Handle authentication failure (e.g., show an error message)
            console.error('Authentication failed');
          }
        } catch (error) {
          // Handle network errors or other exceptions
          console.error('Error during login:', error);
        } finally {
          setIsLoading(false);
        }
      };

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, isLoading, setIsLoading, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};