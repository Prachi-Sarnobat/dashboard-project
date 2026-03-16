// import React from 'react'
// import Nav3 from '../components/Nav3'
// const ContextData = (props) => {
//   return (
//     <div>hello everyone{props.ContextData}</div>
//   )
// }

import {  createContext } from "react";

// export default ContextData
export const AuthContext=createContext()
export const heading = createContext()
export const context = createContext()

import React from 'react'

const ContextData = ({children}) => {
  return (
    <heading.Provider value={"udemy"} >
 {children}
    </heading.Provider>
  )
}

export default ContextData