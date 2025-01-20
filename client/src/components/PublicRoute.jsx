import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const user = false;

    if (user) {
        return <Navigate to="/" />;
    }

    return children;
};

export default PublicRoute;