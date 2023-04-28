import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Pages/Shared/Loader/Loader';

const PrivateRoute = ({children}) => {
    const {user, loading, setLoading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
       return <Loader/>
    }
    
    if(user){
        return children;
    } else{
        return <Navigate to='/login' state={{from : location}} replace></Navigate>
    }

};

export default PrivateRoute;