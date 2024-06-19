import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState("convidado");

  function handleLogin() {
    setUser("clepsonlacerda");
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin }} >
      {children}
    </AuthContext.Provider>
  )

}