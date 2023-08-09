import React from "react";
import { createContext, useContext, useState } from "react";
const ContextApi = createContext();

const AppProvider = ({ children }) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword:""
  });
  const [selectedFile, setSelectedFile] = useState();
  const [isLogin, setIsLogin] = useState(null)


  return (
    <>
      <ContextApi.Provider
        value={{
          inputs,
          setInputs,
          selectedFile,
          setSelectedFile,
          isLogin,
          setIsLogin
        }}
      >
        {children}
      </ContextApi.Provider>
    </>
  );
};
const GlobalContext = () => {
  return useContext(ContextApi);
};
export { GlobalContext, AppProvider, ContextApi };
