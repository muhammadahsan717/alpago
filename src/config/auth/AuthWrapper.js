import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = ({ children }) => { // Accept children as a prop
    const [user, setUser] = useState({ name: '', isAuthenticated: false });

    const login = (userName, password) => {
        return new Promise((resolve, reject) => {
            if (password === 'password') {
                setUser({ name: userName, isAuthenticated: true });
                resolve('Success');
            } else {
                reject('Incorrect Password');
            }
        })
    }

    const logout = () => {
        setUser({ ...user, isAuthenticated: false });
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
