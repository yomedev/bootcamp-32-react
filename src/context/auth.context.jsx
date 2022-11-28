import { createContext, useState } from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [username, setUsername] = useState('')

  const login = (name, password) => {
    if (password === '123') {
      setIsAuth(true)
      setUsername(name)
      return
    }

    alert('Invalid password')
  }

  return <AuthContext.Provider value={{ isAuth, login, username }}>{children}</AuthContext.Provider>
}