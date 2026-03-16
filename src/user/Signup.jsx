// export default function UserSignup() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-100">
//       <div className="bg-white p-8 rounded-xl shadow max-w-md w-full">
//         <h1 className="text-2xl font-bold mb-2">User Signup</h1>
//         <p className="text-slate-500">Signup UI coming soon 😄</p>
//       </div>
//     </div>
//   );
// }
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/ContextData.jsx";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Signup</h2>

      <input
        type="text"
        placeholder="Name"
        className="border w-full p-2 mb-3"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className="border w-full p-2 mb-3"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border w-full p-2 mb-3"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="bg-green-500 text-white w-full py-2 rounded">
        Signup
      </button>
    </form>
  );
};

export default Signup;