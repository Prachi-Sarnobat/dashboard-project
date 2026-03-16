// import React from 'react'
// import ContextData from '../Context/ContextData'
// const Nav3 = () => {
    
//   return (
//     <div>
        
//      <div className='h-12 w-full bg-blue-300 flex justify-evenly items-center'>
//           <h1>logo</h1>
//       <ul className=' flex justify-between items-center text-white gap-16'>
    
//         <li >Home</li>
//         <li>About</li>
//         <li>blog</li>
//         <li>Contact</li>
//       </ul>

//      </div>
//      <ContextData />
//     </div>
//   )
// }

// export default Nav3
import React from 'react'
import ContextData from '../Context/ContextData'
const Nav3 = () => {
  return (
    <div>
      <ul className="flex justify-between items-center text-white gap-16">
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      
    </div>
  )
}

export default Nav3