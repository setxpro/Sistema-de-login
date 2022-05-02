import React, { createContext, useState } from 'react'
import { IAuthProvider, IContext, IUser } from './types'
import { LoginRequest } from './util'

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {

    const [user, setUser] = useState<IUser | null>()

    const authenticate = async(email: string, password: string) => {
        const response = await LoginRequest(email, password)
        const payload = {token: response.token, email}
        setUser(payload)
    }

    const logout = async () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}