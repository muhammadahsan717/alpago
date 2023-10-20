import { Navigate, Outlet } from 'react-router-dom';

const PrivateWrapper = () => {
    const token = localStorage.getItem('token');

    // Add token validation logic here
    const isAuthenticated = token && isTokenValid(token);

    if (isAuthenticated) {
        return <Outlet />;
    } else {
        return <Navigate to='/login' />;
    }
};

// Function to check token validity
const isTokenValid = (token) => {
    // Add your token validation logic here
    // Check expiration date, make API requests, etc.
    return true; // Replace with your validation logic
};

export default PrivateWrapper;
