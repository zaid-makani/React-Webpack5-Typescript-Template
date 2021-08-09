import React, { useState } from "react";
import LocalStorageStore from "../utils/helperstorage";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {
    console.log(token);
  },
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const localStorage = new LocalStorageStore();
  const tokenKey = localStorage.prepareKey(
    "token",
    process.env.REACT_APP_PREFIX
  );

  const initialToken = localStorage.getLocalData(tokenKey);
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (loginToken) => {
    setToken(loginToken);
    localStorage.create(tokenKey, loginToken);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.delete(tokenKey);
  };

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
