export default function UserProfile() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-2">User Profile</h1>
        <p className="text-slate-600">Name: Demo User</p>
        <p className="text-slate-600">Email: user@test.com</p>
      </div>
    </div>
  );
}
