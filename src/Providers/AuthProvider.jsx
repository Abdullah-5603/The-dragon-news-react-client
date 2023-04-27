import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config'

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const user = null

    const authInfo = {user};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;