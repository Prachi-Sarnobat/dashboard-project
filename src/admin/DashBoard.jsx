import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  PackagePlus,
  User,
  LogOut,
  Search,
  GitBranch,
  Calendar,
  Cloud,
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  // const [branches, setBranches] = useState([]); // (kept but unused now)

  const [search, setSearch] = useState("");

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  // Featured (Branches → Featured Products)
  const [featuredForm, setFeaturedForm] = useState({
    title: "",
    brand: "",
    price: "",
    image: "",
    hoverImage: "",
  });

  //  Load on refresh
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const savedFeatured = JSON.parse(localStorage.getItem("featuredProducts")) || [];

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProducts(savedProducts);
    setFeatured(savedFeatured);
  }, []);

  //  Products
  const handleAddProduct = (e) => {
    e.preventDefault();
    const updated = [...products, { ...product, id: Date.now() }];
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
    setProduct({ name: "", price: "", category: "", image: "" });
  };

  const handleDeleteProduct = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  //  Featured Products (Branches tab)
  const handleAddFeatured = (e) => {
    e.preventDefault();
    const updated = [...featured, { ...featuredForm, id: Date.now() }];
    setFeatured(updated);
    localStorage.setItem("featuredProducts", JSON.stringify(updated));
    setFeaturedForm({
      title: "",
      brand: "",
      price: "",
      image: "",
      hoverImage: "",
    });
  };

  const handleDeleteFeatured = (index) => {
    const updated = featured.filter((_, i) => i !== index);
    setFeatured(updated);
    localStorage.setItem("featuredProducts", JSON.stringify(updated));
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="min-h-screen flex bg-[#f4f5fb]">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-indigo-800 to-purple-600 text-white p-6 hidden md:flex flex-col rounded-r-3xl shadow-xl">
        <h2 className="text-2xl font-bold mb-10 tracking-wide">EchoMart</h2>

        <nav className="space-y-2 text-white/80">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-xl transition ${
              activeTab === "dashboard" ? "bg-white/20 text-white" : "hover:bg-white/10"
            }`}
          >
            <LayoutDashboard size={18} /> Dashboard
          </button>

          <button
            onClick={() => setActiveTab("products")}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-xl transition ${
              activeTab === "products" ? "bg-white/20 text-white" : "hover:bg-white/10"
            }`}
          >
            <PackagePlus size={18} /> Products
          </button>

          <button
            onClick={() => setActiveTab("branches")}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-xl transition ${
              activeTab === "branches" ? "bg-white/20 text-white" : "hover:bg-white/10"
            }`}
          >
            <GitBranch size={18} /> features 
          </button>


    <button
      onClick={() => setActiveTab("profile")}
      className={`w-full flex items-center gap-3 px-4 py-2 rounded-xl transition ${
        activeTab === "profile"
          ? "bg-white/20 text-white"
          : "hover:bg-white/10"
      }`}
    >
      <User size={18} />
      Profile
    </button>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto flex items-center gap-2 text-white hover:bg-red-500/30 px-4 py-2 rounded-xl transition"
        >
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h1 className="text-3xl font-bold capitalize">{activeTab}</h1>

          {activeTab === "products" && (
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-md w-full md:w-80 border">
              <Search size={18} className="text-indigo-500" />
              <input
                className="w-full outline-none"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          )}
        </div>
{activeTab === "dashboard" && (
  <>
    {/* Top Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

      {/* Total Products */}
      <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
        <p className="text-slate-500 text-sm">Total Products</p>
        <h2 className="text-3xl font-bold">{products.length}</h2>
      </div>

      {/* Status */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl shadow p-6 hover:shadow-lg transition">
        <p className="text-white/80 text-sm">Status</p>
        <h2 className="text-2xl font-bold">Online</h2>
      </div>

      {/* Date */}
      <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between hover:shadow-lg transition">
        <div>
          <p className="text-slate-500 text-sm">Today</p>
          <h2 className="text-xl font-bold">{today}</h2>
        </div>
        <Calendar className="text-indigo-500" />
      </div>

      {/* Weather */}
      <div className="bg-gradient-to-b from-indigo-800 to-purple-600 text-white  rounded-2xl shadow p-6 flex items-center justify-between hover:shadow-lg transition">
        <div>
          <p className="text-white/80 text-sm">Weather</p>
          <h2 className="text-xl font-bold">28°C</h2>
          <p className="text-xs">Sunny</p>
        </div>
        <Cloud />
      </div>
    </div>

    {/* Charts */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Analytics Overview */}
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-slate-600 text-sm font-medium">Analytics Overview</p>
          <span className="text-xs text-slate-400">Last 7 days</span>
        </div>

   <div className="w-full h-56 rounded-xl bg-slate-50 p-3">
  <img
    src="data:image/svg+xml;utf8,
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 260'>
      <!-- Line -->
      <polyline points='0,220 120,140 240,170 360,90 480,150 600,60 720,110 800,80'
        fill='none' stroke='%236366f1' stroke-width='6' />

      <!-- Points -->
      <circle cx='0' cy='220' r='6' fill='%236366f1'/>
      <circle cx='120' cy='140' r='6' fill='%236366f1'/>
      <circle cx='240' cy='170' r='6' fill='%236366f1'/>
      <circle cx='360' cy='90' r='6' fill='%236366f1'/>
      <circle cx='480' cy='150' r='6' fill='%236366f1'/>
      <circle cx='600' cy='60' r='6' fill='%236366f1'/>
      <circle cx='720' cy='110' r='6' fill='%236366f1'/>
      <circle cx='800' cy='80' r='6' fill='%236366f1'/>

      <!-- Values -->
      <text x='0' y='205' font-size='16' fill='%230f172a'>120</text>
      <text x='120' y='125' text-anchor='middle' font-size='16' fill='%230f172a'>320</text>
      <text x='240' y='155' text-anchor='middle' font-size='16' fill='%230f172a'>260</text>
      <text x='360' y='75' text-anchor='middle' font-size='16' fill='%230f172a'>480</text>
      <text x='480' y='135' text-anchor='middle' font-size='16' fill='%230f172a'>300</text>
      <text x='600' y='45' text-anchor='middle' font-size='16' fill='%230f172a'>620</text>
      <text x='720' y='95' text-anchor='middle' font-size='16' fill='%230f172a'>410</text>
      <text x='800' y='65' text-anchor='end' font-size='16' fill='%230f172a'>540</text>
    </svg>"
    className="w-full h-full object-contain"
    alt="analytics"
  />
</div>
      </div>

      {/* Revenue */}
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-slate-600 text-sm font-medium">Revenue</p>
          <span className="text-xs text-slate-400">Last 7 days</span>
        </div>

        <div className="w-full h-56 rounded-xl bg-slate-50 p-3">
          <img
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 260'>
              <rect x='20' y='160' width='80' height='80' fill='%236366f1'/>
              <text x='60' y='150' text-anchor='middle' font-size='18' fill='%230f172a'>$200</text>
              <rect x='140' y='120' width='80' height='120' fill='%238b5cf6'/>
              <text x='180' y='110' text-anchor='middle' font-size='18' fill='%230f172a'>$500</text>
              <rect x='260' y='180' width='80' height='60' fill='%236366f1'/>
              <text x='300' y='170' text-anchor='middle' font-size='18' fill='%230f172a'>$300</text>
              <rect x='380' y='80' width='80' height='160' fill='%238b5cf6'/>
              <text x='420' y='70' text-anchor='middle' font-size='18' fill='%230f172a'>$600</text>
              <rect x='500' y='140' width='80' height='100' fill='%236366f1'/>
              <text x='540' y='130' text-anchor='middle' font-size='18' fill='%230f172a'>$400</text>
              <rect x='620' y='100' width='80' height='140' fill='%238b5cf6'/>
              <text x='660' y='90' text-anchor='middle' font-size='18' fill='%230f172a'>$550</text>
            </svg>"
            className="w-full h-full object-contain"
            alt="revenue"
          />
        </div>
      </div>
    </div>
  </>
)}
        {/* PRODUCTS TAB (UNCHANGED UI) */}
        {activeTab === "products" && (
          <>
            <div className="bg-white rounded-2xl shadow p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <PackagePlus size={20} /> Add Product
              </h2>

              <form
                onSubmit={handleAddProduct}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <input
                  className="border p-3 rounded-xl"
                  placeholder="Product Name"
                  value={product.name}
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                  required
                />
                <input
                  type="number"
                  className="border p-3 rounded-xl"
                  placeholder="Price"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  }
                  required
                />
                <input
                  className="border p-3 rounded-xl"
                  placeholder="Brand/Category"
                  value={product.category}
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                  required
                />
                <input
                  className="border p-3 rounded-xl"
                  placeholder="Image URL"
                  value={product.image}
                  onChange={(e) =>
                    setProduct({ ...product, image: e.target.value })
                  }
                />

                <button className="col-span-2 bg-indigo-700 text-white py-3 rounded-xl hover:bg-indigo-800 transition font-semibold">
                  Add Product
                </button>
              </form>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              {filteredProducts.length === 0 ? (
                <p className="text-slate-500">No products found</p>
              ) : (
                <table className="w-full">
                   <thead>
                  <tr className="text-left border-b">
                  <th className="p-3">Image</th>
                  <th className="p-3">Title</th>
                  <th className="p-3">Brand</th>
                  <th className="p-3">Price</th>
                  <th className="p-3 text-right">Action</th>
                  </tr>
                   </thead>
                  <tbody>
                    {filteredProducts.map((p, i) => (
                      <tr key={p.id} className="border-b">
                         <td className="p-3">
                          <img
                          src={p.image}
                          alt={p.name}
                          className="w-16 h-16 object-cover"
                          />
                          </td>
                        <td className="p-3">{p.name}</td>
                         <td className="p-3">{p.category}</td>
                        
                        <td className="p-3">₹ {p.price}</td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => handleDeleteProduct(i)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </>
        )}

        {/* BRANCHES TAB → FEATURED PRODUCTS (SAME LAYOUT STYLE) */}
        {activeTab === "branches" && (
          <>
            <div className="bg-white rounded-2xl shadow p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Add Featured Product</h2>

              <form onSubmit={handleAddFeatured} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="border p-3 rounded-xl" placeholder="Title" value={featuredForm.title} onChange={(e) => setFeaturedForm({ ...featuredForm, title: e.target.value })} required />
                <input className="border p-3 rounded-xl" placeholder="Brand" value={featuredForm.brand} onChange={(e) => setFeaturedForm({ ...featuredForm, brand: e.target.value })} required />
                <input type="number" className="border p-3 rounded-xl" placeholder="Price" value={featuredForm.price} onChange={(e) => setFeaturedForm({ ...featuredForm, price: e.target.value })} required />
                <input className="border p-3 rounded-xl" placeholder="Image URL" value={featuredForm.image} onChange={(e) => setFeaturedForm({ ...featuredForm, image: e.target.value })} required />
                <input className="border p-3 rounded-xl" placeholder="Hover Image URL" value={featuredForm.hoverImage} onChange={(e) => setFeaturedForm({ ...featuredForm, hoverImage: e.target.value })} />
                <button className="col-span-2 bg-indigo-700 text-white py-3 rounded-xl hover:bg-indigo-800 transition font-semibold">
                  Add Featured Product
                </button>
              </form>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              {featured.length === 0 ? (
                <p className="text-slate-500">No featured products</p>
              ) : (
                <table className="w-full">
                   <thead>
                  <tr className="text-left border-b">
                  <th className="p-3">Image</th>
                  <th className="p-3">Brand</th>
                  <th className="p-3">Title</th>
                  <th className="p-3">Price</th>
                  <th className="p-3 text-right">Action</th>
                  </tr>
                   </thead>
                  <tbody> 
                    {featured.map((f, i) => (
                      <tr key={f.id} className="border-b">
                        
                        <td className="p-3">
                          <img src={f.image} alt={f.title} className="w-16 h-16 object-cover rounded" />
                        </td>
                     
                        <td className="p-3 font-semibold">{f.brand}</td>
                        <td className="p-3 font-semibold">{f.title}</td>
                        <td className="p-3">₹ {f.price}</td>
                        <td className="p-3 text-right">
                          <button onClick={() => handleDeleteFeatured(i)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            </>
        )}
         {/* PROFILE */}
         
  {activeTab === "profile" && (
<div className="flex items-center justify-center h-full">
    <div className="backdrop-blur-lg bg-white/60 border border-white/40 shadow-2xl rounded-3xl p-8 max-w-md w-full transition hover:scale-[1.02] duration-300">

      {/* Profile Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
          A
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-800">Admin</h3>
        <p className="text-sm text-slate-500">admin@test.com</p>
      </div>

      {/* Info Section */}
      <div className="space-y-2 text-slate-700">
        <div className="flex justify-start gap-4">
          <span className="font-medium">Role:</span>
          <span>Super Admin</span>
        </div>

        <div className="flex justify-start gap-4">
          <span className="font-medium">Phone:</span>
          <span>+91 12345 67891</span>
        </div>

        <div className="flex justify-start gap-4">
          <span className="font-medium">Joined:</span>
          <span>Jan 2025</span>
        </div>

        <div className="flex justify-start gap-4">
          <span className="font-medium">Status:</span>
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
            Active
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 space-y-3">
        <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-xl hover:opacity-90 transition font-medium shadow-md">
          Edit Profile
        </button>

        <button className="w-full border border-red-300 text-red-500 py-2 rounded-xl hover:bg-red-50 transition font-medium">
          Delete Account
        </button>
      </div>

   </div>
  </div>
)}    
        
      </main>
    </div>
  );
}

