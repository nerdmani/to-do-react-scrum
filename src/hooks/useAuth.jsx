import React, { useContext } from 'react'
import { AuthContext } from '../auth/auth'

const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
}

export default useAuth
