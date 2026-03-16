import React from 'react'
import{
  Phone,
  Heart,
  User,
  ShoppingCart,
    Menu,
  Search,
  DollarSign,
}from "lucide-react"
const Navbar = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = cart.reduce((total, item) => {
  return total + item.quantity;
}, 0);
  return (
 
      <div className="w-full">
<img src="https://theme-echomart.mybigcommerce.com/product_images/uploaded_images/top-offer-banner.jpg"
 alt="" />
  {/* TOP INFO BAR */}
<div className="bg-[#012a4a] text-white text-xs text-center py-1 border-b">
  30 Days Free Return | Free Shipping on All Orders Over $40 | Best World Wide Delivery
</div>

{/* MAIN HEADER */}
<div className="bg-[#22354a] text-white">
  <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

    {/* Logo */}
    <div className="flex items-center gap-2">
      <ShoppingCart className="text-yellow-400" />
      <span className="text-2xl font-bold">
        <span className="text-yellow-400">Echo</span>Mart
      </span>
    </div>

    {/* Info blocks */}
    <div className="hidden md:flex items-center gap-8 text-sm">
      <div className="flex items-center gap-2">
        <DollarSign className="text-yellow-400 hover:rotate-y-180 transition-transform duration-300"  />
        <div>
          <p className="font-semibold ">Safe Payment</p>
          <p className="text-yellow-400 text-xs ">100% Secure Payment</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Phone className="text-yellow-400 hover:rotate-y-180 transition-transform duration-300" />
        <div>
          <p className="font-semibold">Free Call:</p>
          <p className="text-yellow-400 text-xs">+91 0123 45678</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ShoppingCart className="text-yellow-400 hover:rotate-y-180 transition-transform duration-300" />
        <div>
  <button
  onClick={() => window.location.href="/cart"}
  className="flex flex-col items-start gap-1"
>
<div className="relative">
  <p className="font-semibold">Shopping</p>
  <p className="text-yellow-400 text-xs">Cart 
      ({cartCount})
  </p>

  {cartCount > 0 && (
    <span className="absolute -top-2 -right-3 text-amber-300 text-xs px-2 rounded-full">
   
    </span>
  )}
</div>
</button>
      
        </div>
      </div>
    </div>
  </div>

  {/* SEARCH BAR ROW */}
  <div className="max-w-7xl mx-auto px-6 pb-4 flex items-center gap-4">

    {/* Categories */}
    <button className="bg-yellow-400 text-black px-6 py-2 rounded flex items-center gap-2 font-semibold">
      <Menu size={18} />
      Shop By Categories
    </button>

    {/* Search */}
    <div className="flex-1 flex items-center bg-white rounded overflow-hidden">
      <input
        className="flex-1 px-4 py-2 text-sm text-black outline-none"
        placeholder="Search the store"
      />
      <button className="bg-black text-white px-6 py-2 flex items-center gap-2">
        <Search size={16} />
        Search
      </button>
    </div>

    {/* Right icons */}
    <div className="flex items-center gap-4 text-white">
      <Heart className="cursor-pointer hover:text-yellow-400 hover:rotate-y-180 transition-transform duration-300" />
      <User className="cursor-pointer hover:text-yellow-400 hover:rotate-y-180 transition-transform duration-300" />
    </div>
  </div>
</div>

{/* NAV LINKS BAR */}
<div className="bg-yellow-400">
  <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-evenly flex-wrap gap-8 text-sm font-semibold">
    <span className="cursor-pointer">About Us</span>
    <span className="cursor-pointer">Affiliate</span>
    <span className="cursor-pointer">Return Policy</span>
    <span className="cursor-pointer">Shipping & Returns</span>
    <span className="cursor-pointer">Contact Us</span>
    <span className="cursor-pointer">Blog</span>
  </div>
</div>
 </div>
  )
}

export default Navbar
