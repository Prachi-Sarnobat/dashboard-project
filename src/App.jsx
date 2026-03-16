import { Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./admin/Login";
import Dashboard from "./admin/DashBoard";
import AdminRoute from "./components/AdminRoute";
import Home from "./user/Home";
import Cart from "./user/Cart";
import UserLogin from "./user/Login";
import UserSignup from './user/Signup'
import UserProfile from "./user/Profile";
import AuthSelect from "./AuthSelect";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/cart" element={<Cart />} />

      {/* Role Select */}
      <Route path="/auth" element={<AuthSelect />} />

      {/* User Auth */}
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/user/signup" element={<UserSignup />} />

      {/* Admin */}
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        }
      />

      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
}

export default App;
// import React, { } from 'react'
// import Navbar from './components/Navabar'
// import Navbar2 from './components/Nav3'
// import Nav3 from './components/Nav3'
// import Home from './components/Home'
// const App = () => {
//   // const [theme, settheme] = useState("light")
//   // const [home, sethome] = useState("HOME")
//   //  const [About, setAbout] = useState("ABOUT")  
//   //  const [blog, setblog] = useState("BLOG")
//   //  const [Contact, setContact] = useState("Contact")
  
//   return (
//     <div className='m-10'>
//     {/* //   <h1 className='text-2xl font-bold p-4'> page theme {theme}</h1>
//     //  < Navbar theme={theme} settheme={settheme}/>
// <> */}
// {/*  
//      <div className='h-12 w-full bg-blue-300 flex justify-evenly items-center'>
//           <h1>logo</h1>
//       <ul className=' flex justify-between items-center text-white gap-16'>
    
//         <li >{home}</li>
//         <li>{About}</li>
//         <li>{blog}</li>
//         <li>{Contact}</li>
//       </ul>


//      </div>  */}
//        {/* <Navbar home={home} sethome={sethome} 
//       About={About} setAbout={setAbout}
//       blog={blog} setblog={setblog} 
//       Contact={Contact} setContact={setContact}/> 
//       <Navbar2 /> */}
//       {/* </> */}
// <Home/>
// </div>
//   )
// }

// export default App
// import React from 'react'
// import Home from './components/Home.jsx'
// import ContextData from './Context/ContextData.jsx'


// import React from "react";
// import Navbar from "./components/Navbar";
// import { AuthProvider } from "./Context/AuthContext.jsx";

// const App = () => {
//   return (
//     <AuthProvider>
//       <Navbar />
//     </AuthProvider>
//   );
// };

// export default App;