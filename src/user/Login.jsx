import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
if (email === "user@test.com" && password === "1234") {
  localStorage.setItem("isUser", "true");
  navigate("/");    
}
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-800">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-2">User Login</h1>
        <p className="text-gray-500 text-center mb-6">
          Login to continue shopping
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded text-sm text-center mb-4">
            {setError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="user@test.com"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="1234"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            Login
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          Demo: user@test.com / 1234
        </p>
      </div>
    </div>
  );
}
