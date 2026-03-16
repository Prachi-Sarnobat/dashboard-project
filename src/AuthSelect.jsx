import { useNavigate } from "react-router-dom";
import { User, Shield } from "lucide-react";

export default function AuthSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-800">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Welcome Lexron</h1>
        <p className="text-gray-500 mb-8">Continue as Admin or User</p>

        <div className="space-y-4 scale-90
        ">
          <button
            onClick={() => navigate("/admin-login")}
            className="w-full flex items-center justify-center gap-3 border rounded-xl p-4 hover:bg-slate-50 transition"
          >
            <Shield className="w-5 h-5 text-black" />
            <span className="font-medium">Continue as Admin</span>
          </button>

          <button
            onClick={() => navigate("/user/login")}
            className="w-full flex items-center justify-center gap-3 border rounded-xl p-4 hover:bg-slate-50 transition"
          >
            <User className="w-5 h-5 text-black" />
            <span className="font-medium">Continue as User</span>
          </button>
        </div>
      </div>
    </div>
  );
}
