import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

export default  function AuthProvider({ children}){
    const demoAuthUser = localStorage.getItem("UserDetails")
    const [authUser, setAuthUser] = useState(
        demoAuthUser ? JSON.parse(demoAuthUser) : undefined
    )
    return(
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )

}
export const useAuth=() => useContext(AuthContext) 
