import React, {useState} from 'react'
import UserContext from './userContext'

export default function UserProvider({children}) {

  const [userLogin, setUserLogin] = useState(false)

  const loginUser = () => { setUserLogin(true) }

  const logoutUser = () => { setUserLogin(false) }

  return(
    <UserContext.Provider
      value={{
        userLogin,
        loginUser,
        logoutUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
} 