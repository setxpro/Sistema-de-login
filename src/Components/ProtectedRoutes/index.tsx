import React from 'react';
import { IAuthProvider } from '../../Context/AuthProvider/types';
import { useAuth } from '../../Context/AuthProvider/useAuth';

// import { Container } from './styles';

const ProtectedRoutes = ({children}: IAuthProvider) => {

    const auth = useAuth();
    
    if (!auth.email) 
        return <h1>You don't have Access</h1>
    return children
}

export default ProtectedRoutes;