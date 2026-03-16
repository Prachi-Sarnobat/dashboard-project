// import React from 'react'
// const Navbar = (props) => {
// const  onclick=()=>{
// props.settheme("dark")
// // props.sethome("home")
// // props.setAbout("about")
// // props.setblog("blog")
// // props.setContact("contact")
//   }
//   return (
//     <>
//     <button className='py-3 px-2 bg-black text-white rounded-xl active:scale-90'
//      onClick={onclick}>change theme</button> 

//      {/* <button className='py-3 px-2 bg-black text-white rounded-xl active:scale-90'
//      onClick={onclick}
//      >change Navbar</button> */}
//     </>
//   )
// }

// export default Navbar
// import React, { useContext } from "react";
// import Nav3 from "./Nav3";
// import { heading, context } from "../Context/ContextData.jsx";
// import Button from "./button.jsx";

// const Navbar = () => {
//   const data = useContext(heading);
//   const data1 = useContext(context);

//   return (
//     <div>
//       <nav className="bg-blue-400 text-white px-6 py-3 flex justify-start items-center gap-10">
//         <div className="font-bold text-3xl">{data}  </div>
//         <Nav3 className="text-white p-5 " />
//       </nav>
//       <div className="p-4">
//         <Button data={data1} />
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";

const Navbar = () => {
  const { user, isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-500 text-white px-6 py-3 flex justify-between">
      <h1 className="font-bold">My App</h1>

      {isLoggedIn ? (
        <div className="flex gap-4 items-center">
          <span>Hi, {user.name}</span>
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        </div>
      ) : (
        <span>Not logged in</span>
      )}
    </nav>
  );
};

export default Navbar;