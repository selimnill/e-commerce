import { useContext } from 'react';
import { UserConext } from '../ContextApi/ContextApi';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

    const location = useLocation();

    const { user , loading} = useContext(UserConext);

    if(loading){
        return <div>Loading...</div>
    }

    if (user && user.uid) {
        return children;
    }



    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;