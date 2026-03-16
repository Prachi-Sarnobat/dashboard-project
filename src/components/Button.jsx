import React, { useContext } from "react";
import { context } from "../Context/ContextData.jsx";

const Button = ({ children }) => {
  const data1 = useContext(context);

  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
      {data1}
      {children}
      cllick me
    </button>
  );
};

export default Button;

// import React, { createContext } from "react";
// import {AuthContext} from "../Context/AuthContext.jsx";

// export default const AuthContext = () => {
//   createContext()