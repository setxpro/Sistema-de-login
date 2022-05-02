import React, { createContext, useEffect, useState } from 'react'
import { IAuthProvider, IContext, IUser } from './types'
import { getUserLocalStorage, LoginRequest, setUserInLocalStorage } from './util'

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {

    const [user, setUser] = useState<IUser | null>()

    useEffect(() => {
        // Load state
        const user = getUserLocalStorage()

        if (user) setUser(user) // Load Context
    }, [])

    const authenticate = async(email: string, password: string) => {
        const response = await LoginRequest(email, password)
        const payload = {token: response.token, email}

        setUserInLocalStorage(payload) // save to localStorage
        setUser(payload)
    }

    const logout = async () => {
        setUser(null) // cleaning to value 
        setUserInLocalStorage(null) // cleaning the value
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}