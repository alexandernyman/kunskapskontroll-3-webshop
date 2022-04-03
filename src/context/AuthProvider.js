import { createContext } from "react";
import { useRecoilState } from "recoil";
import { AuthProviderState } from "../atoms";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useRecoilState(AuthProviderState);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
