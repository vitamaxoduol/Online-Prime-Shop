import React, { createContext, useState, useContext } from 'react';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const isAuthenticated = Object.keys(user).length > 0;
    const [isLoading, setIsLoading] = useState(false);

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, isLoading, setIsLoading }}>
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