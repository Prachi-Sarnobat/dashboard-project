import React, { useEffect, useState } from "react";
import {
  Menu,
  Search,
  DollarSign,
  Phone,
  Heart,
  User,
  ShoppingCart,
  Lightbulb,
  Monitor,
  ShowerHead,
  Trees,
  CookingPot,
  BookOpen,
  Smartphone,
  Plane,
  Tag,
  Headset,
} from "lucide-react" 
import Navbar from "./Navbar";
import Newproduct from "./Newproduct";
import Blogs from "./Blogs";
import Brand from "./Brand";
import Footer from "./Footer";


const Home = () => {
   const [adminProducts, setAdminProducts] = useState([]);
// eslint-disable-next-line no-unused-vars
const [startIndex, setStartIndex] = useState(0);
const visibleCount = 5;


useEffect(() => {
    const loadProducts = () => {
      const saved = JSON.parse(localStorage.getItem("products")) || [];
      setAdminProducts(saved);
    };

    loadProducts();
    window.addEventListener("focus", loadProducts);
    window.addEventListener("storage", loadProducts);

    return () => {
      window.removeEventListener("focus", loadProducts);
      window.removeEventListener("storage", loadProducts);
    };
  }, []);

  const mergedProducts = adminProducts.map((p, i) => ({
    id: p.id || `admin-${i}`,
    brand: p.category || "Admin",
    title: p.name,
    price: Number(p.price) || 0,
   stock: Number(p.stock) || 5,
    rating: 5,
    image: p.image,
    hoverImage: p.image,
    soldOut: Number(p.stock) === 0,
  }));

  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const loadFeatured = () => {
      const saved = JSON.parse(localStorage.getItem("featuredProducts")) || [];
      setFeaturedProducts(saved);
    };

    loadFeatured();
    window.addEventListener("focus", loadFeatured);
    window.addEventListener("storage", loadFeatured);

    return () => {
      window.removeEventListener("focus", loadFeatured);
      window.removeEventListener("storage", loadFeatured);
    };
  }, []);

  const defaultFeatured = mergedProducts.length > 0 ? mergedProducts : [
    {
      id: 101,
      brand: "Trandyzone",
      title: "Camera C430W 4k Waterproof",
      price: 249.99,
      stock: 25,
      rating: 5,
      image:
        "https://cdn11.bigcommerce.com/s-5gvr2t49jb/images/stencil/250x325/products/104/398/02-02__83134.1599711677.jpg?c=1",
      hoverImage:
        "https://cdn11.bigcommerce.com/s-5gvr2t49jb/images/stencil/640w/products/104/395/02__99681.1599711676.jpg?c=1",
      soldOut: false,
    },
    {
      id: 102,
      brand: "Panasonic",
      title: "Gaming Console 2024 Edition",
      price: 419.95,
      stock: 12,
      rating: 5,
      image:
        "https://cdn11.bigcommerce.com/s-5gvr2t49jb/images/stencil/250x325/products/103/400/06-02__18933.1599711685.jpg?c=1",
      hoverImage:
        "https://cdn11.bigcommerce.com/s-5gvr2t49jb/images/stencil/1280x1280/products/103/401/06__00729.1599711685.jpg?c=1",
      soldOut: false,
    },
  ];


  const homeFeatured =
    featuredProducts.length > 0 ? featuredProducts : defaultFeatured;
const AddToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart 🛒");
};


  return (
<>
{/* navbar */}
<Navbar/>
{/* HERO SECTION */}
<div className="relative h-130 bg-[#2c2b4b] overflow-hidden">
  <img
    src="https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/original/carousel/3/slider-01.jpg?c=1"
    className="absolute left-0 top-0 w-full h-full object-cover"
    alt="Hero"
  />

  <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6">
    <div className="text-white max-w-lg">
      <h1 className="text-5xl font-bold leading-tight mb-4">
      New Bluetooth  <br /> Airpods
      </h1>

      <p className="bg-yellow-400 text-black inline-block px-5 py-2 font-semibold rounded-full mb-4">
     Hurry up! Great offer for this week.
      </p>
<br />
      <button className="underline bg-black text-white font-semibold hover:text-yellow-400 rounded-full transition px-6 py-2">
        Shop Now
      </button>
    </div>
  </div>
</div>
 
 {/* navabar categories */}
<div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6 text-center">
          {[
            { name: "Gadgets", Icon: Lightbulb, viewAll: true },
            { name: "Shop All", Icon: Monitor },
            { name: "Bath", Icon: ShowerHead, viewAll: true },
            { name: "Garden", Icon: Trees },
            { name: "Kitchen", Icon: CookingPot },
            { name: "Publications", Icon: BookOpen },
            { name: "Utility", Icon: Smartphone },
          ].map(({ name, Icon, viewAll }) => (
            <div key={name} className="flex flex-col items-center group">
              <div className="relative w-24 h-12 bg-gray-100 rounded-t-full flex items-end justify-center">
                <div className="absolute -bottom-6 w-14 h-14 bg-white rounded-full shadow flex items-center justify-center">
                  <Icon className="w-6 h-6 group-hover:text-yellow-400 transition" />
                </div>
              </div>
              <p className="mt-10 font-semibold text-sm">{name}</p>
              {viewAll && (
                <span className="text-xs text-gray-500 group-hover:text-black">
                  View All
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* promo cards */}
      <div className="bg-white py-8 mt-4">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Card 1 */}
    <div className="relative rounded-lg overflow-hidden shadow-sm">
      <img
        src="https://cdn11.bigcommerce.com/s-gmsn9rvs48/product_images/uploaded_images/top-banner-01.jpg"
        alt=""
        className="w-full h-full object-cover"
      />

      {/* RIGHT ALIGNED TEXT */}
 <div className="absolute right-10 top-1/2 -translate-y-1/2 text-white p-6 rounded-lg">
  <p className="text-sm mb-1">New Generation</p>
  <h2 className="text-2xl font-bold leading-tight mb-2">
    Apple Smart <br /> Watches
  </h2>
  <span className="text-sm underline underline-offset-4 cursor-pointer">
    Shop Now
  </span>
</div>
</div>

    {/* Card 2 */}
    <div className="relative rounded-lg overflow-hidden shadow-sm">
      <img
        src="https://cdn11.bigcommerce.com/s-gmsn9rvs48/product_images/uploaded_images/top-banner-02.jpg"
        alt=""
        className="w-full h-full object-cover"
      />

      {/* RIGHT ALIGNED TEXT */}
<div className="absolute right-10 top-1/2 -translate-y-1/2 text-black p-6 rounded-lg">
  <p className="text-sm mb-1">New Generation</p>
  <h2 className="text-2xl font-bold leading-tight mb-2">
    Apple Smart <br /> Watches
  </h2>
  <span className="text-sm underline underline-offset-4 cursor-pointer">
    Shop Now
  </span>
</div>
    </div>
  </div>
</div>


{/* best seller */}

<div className="bg-gray-200 px-10 py-20 mt-4">
  <div className="flex items-center justify-between mb-8">
  <div className="flex items-center gap-4 w-full">
  <h2 className="text-2xl font-bold whitespace-nowrap">
    Best Seller
    </h2>
        <div className="h-0.5 bg-gray-300 flex-1" />
  </div>
  </div>
    <span className="h-0.5 w-full bg-gray-500" />
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {mergedProducts.map((product) => {
  const stock = Number(product.stock) || 0;

const stockPercent = Math.min(
  100,
  Math.max(0, (stock / 50) * 100)
);

      return (
        <div
          key={product.id}
          className="bg-white px-6 py-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col h-full"
        >
          <div className="space-y-1">
            <p className="text-gray-500 text-sm">{product.brand}</p>
            <h3 className="font-semibold text-gray-900 leading-tight line-clamp-2 min-h-11">
              {product.title}
            </h3>
            <div className="text-yellow-400 text-sm">
              {'★'.repeat(product.rating)}
            </div>
          </div>

          {/* Image */}
          <div className="relative my-4 flex-1 flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-35 object-contain transition-transform duration-300 hover:scale-130"
            />

            {product.soldOut && (
              <span className="absolute top-2 right-2 bg-[#2c2b4b] text-white text-xs px-3 py-1 rounded-full">
                Sold out
              </span>
            )}
          </div>

          {/* Price + stock */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-blue-900 font-semibold">
                ₹{product.price.toFixed(2)}
              </p>
<button
  onClick={() => AddToCart(product)}
  className="bg-[#2c2b4b] text-white px-3 py-1 rounded text-sm hover:bg-[#172330]"
>
  Add to Cart
</button>
            </div>
       
<p className="text-xs text-gray-500">
  Available: {stock}
</p>

<div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
  <div
    className={`h-full transition-all duration-300 ${
      stock < 10 ? "bg-red-500" : "bg-yellow-400"
    }`}
    style={{ width: `${stockPercent}%` }}
  />
</div>

          </div>
        </div>
      )
    })}
  </div>
</div>

{/* promo image */}
<div className="relative rounded-lg overflow-hidden shadow-sm p-10">
  {/* Background image */}
  <img
    src="https://cdn11.bigcommerce.com/s-gmsn9rvs48/product_images/uploaded_images/sub-banner-01.jpg"
    alt=""
    className="w-full h-full object-cover"
  />

  {/* Top-right text */}
  <p className="absolute top-6 left-6 z-10  px-30  py-20 text-white text-sm text-start rounded">
    Shop And Save Big Hottest Deals
  </p>

  {/* Bottom-left title */}
  <p className="absolute bottom-6 left-6 z-10 px-30 py-15 text-white text-4xl font-bold  rounded">
    New Smart Phones
  </p>

  {/* Price + CTA (bottom-right) */}
  <div className="absolute bottom-9 right-6 z-10 px-30 py-15 text-white rounded-lg flex flex-col items-end gap-1">
    <div className="flex items-center gap-2 font-bold text-lg">
      <DollarSign className="text-yellow-400 w-5 h-5 hover:rotate-180 transition-transform duration-300" />
      <span>79.00 only</span>
    </div>
    <span className="text-sm underline underline-offset-4 cursor-pointer hover:text-yellow-400 transition">
      Shop now
    </span>
  </div>
</div>
<div className="relative rounded-lg overflow-hidden shadow-sm">
  <img
    src="https://cdn11.bigcommerce.com/s-gmsn9rvs48/product_images/uploaded_images/sub-banner-02.jpg"
    alt=""
className="w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover transition-transform duration-500 hover:scale-110"  />

  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
    <p className="text-black text-sm sm:text-lg mb-1">
      NEW GENERATION
    </p>

    <h2 className="text-black text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3">
      New Electronic Gadgets Items
    </h2>

    <div className="bg-yellow-400 px-4 py-2 text-black text-sm sm:text-base font-semibold rounded mb-3">
      Hurry, Great Deals – Every Weekends
    </div>

    <p className="text-black text-sm sm:text-lg underline underline-offset-4 cursor-pointer">
      Shop now
    </p>
  </div>
</div>


{/* FEATURES SECTION */}

<div className="bg-[#2a3b4e] py-8 px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

    {/* Item */}
    <div className="flex items-center gap-3">
      <div className="bg-[#172330] p-3 rounded-lg hover:bg-yellow-400 transition">
        <Plane className="w-5 h-5 text-white hover:text-black" />
      </div>
      <div>
        <p className="text-yellow-400 font-semibold">Get Free Delivery</p>
        <p className="text-xs text-white">On Worldwide</p>
      </div>
    </div>

    {/* Item */}
    <div className="flex items-center gap-3">
      <div className="bg-[#172330] p-3 rounded-lg hover:bg-yellow-400 transition">
        <Tag className="w-5 h-5 text-white hover:text-black" />
      </div>
      <div>
        <p className="text-yellow-400 font-semibold">Save upto 50% off</p>
        <p className="text-xs text-white">Use credit card</p>
      </div>
    </div>

    {/* Item */}
    <div className="flex items-center gap-3">
      <div className="bg-[#172330] p-3 rounded-lg hover:bg-yellow-400 transition">
        <Headset className="w-5 h-5 text-white hover:text-black" />
      </div>
      <div>
        <p className="text-yellow-400 font-semibold">Best Support</p>
        <p className="text-xs text-white">24/7 Free Support</p>
      </div>
    </div>

    {/* Item */}
    <div className="flex items-center gap-3">
      <div className="bg-[#172330] p-3 rounded-lg hover:bg-yellow-400 transition">
        <DollarSign className="w-5 h-5 text-white hover:text-black" />
      </div>
      <div>
        <p className="text-yellow-400 font-semibold">Big Saving</p>
        <p className="text-xs text-white">At Lowest Price</p>
      </div>
    </div>

  </div>
</div>
{/* features Product */}
<div className="bg-white py-20 mt-4">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header + Arrows */}
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold">Featured Products</h2>

      <div className="flex items-center gap-2">
        <button
          onClick={() =>
            setStartIndex((prev) =>
              prev === 0
                ? Math.max(homeFeatured.length - visibleCount, 0)
                : prev - 1
            )
          }
          className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
        >
          ‹
        </button>

        <button
          onClick={() =>
            setStartIndex((prev) =>
              prev + visibleCount >= homeFeatured.length
                ? 0
                : prev + 1
            )
          }
          className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
        >
          ›
        </button>
      </div>
    </div>

    {/* Products Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-16">
      {homeFeatured.map((product) => (
  <div
    key={product.id}
    className="bg-white flex flex-col items-start  text-center px-4 pt-6 pb-4 rounded-lg shadow hover:shadow-sm transition-shadow-lg duration-300 scale-105"
    style={{ width: "240px", height: "460px" }}   
  >
    {/* Brand */}
    <p className="text-xs text-gray-400 uppercase tracking-wide">
      {product.brand}
    </p>

    {/* Title */}
    <h4 className="text-sm font-medium text-[#2a3b4e] text-center line-clamp-2 mt-1">
      {product.title}
    </h4>

    {/* Stars */}
    <div className="flex text-yellow-400 text-sm my-2">
      {"★".repeat(product.rating || 5)}
      <span className="text-gray-300 ml-1">
        {"★".repeat(5 - (product.rating || 3))}
      </span>
    </div>

    {/* Image box */}
    <div className="relative flex items-center justify-center h-50 w-full my-6 group">
      
      {/* Sale tag */}
      {product.sale && (
        <span className="absolute bottom-0 left-6 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
          Sale
        </span>
      )}

      {/* Sold Out circle */}
      {product.soldOut && (
        <span className="absolute bg-[#8b0f24] text-white text-xs px-5 py-5 rounded-full">
          Sold Out
        </span>
      )}

      <img
        src={product.image}
        alt={product.title}
        className="h-44 object-contain  transition group-hover:opacity-0 scale-125
         group-hover:scale-160 transition-transform duration-300" 
      />

      {product.hoverImage && (
        <img
          src={product.hoverImage}
          alt={product.title}
      className="h-44 object-contain absolute opacity-0 transition-all duration-300 transform group-hover:opacity-100 group-hover:scale-110"
        />
      )}
    </div>

    {/* Price + Add button */}
    <div className="mt-auto flex items-center justify-between w-full px-2">
      <div>
        {product.oldPrice && (
          <span className="text-xs line-through text-gray-400 mr-1">
            ₹{product.oldPrice}
          </span>
        )}
        <span className="text-black-400 font-semibold text-lg">
          ₹{product.price}
        </span>
      </div>

      <button className="w-30 h-14 rounded-full bg-[#2a3b4e] text-white text-lg flex items-center justify-center hover:bg-[#172330]"
      onClick={()=>{AddToCart(product)}}>
        Add to Card
      </button>
    </div>
  </div>
))}
  </div>
  </div>

  {/* promo cards */}
 <div className="bg-white py-8 mt-4">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Card 1 */}
    <div className="relative rounded-lg overflow-hidden shadow-sm">
      <img
        src="https://cdn11.bigcommerce.com/s-gmsn9rvs48/product_images/uploaded_images/bottom-banners-01.jpg"
        alt=""
        className="w-full h-full object-cover"
      />

      {/* RIGHT ALIGNED TEXT */}
 <div className="absolute right-10 top-1/2 -translate-y-1/2 text-black p-6 rounded-lg">
  <p className="text-sm mb-1">New Generation</p>
  <h2 className="text-2xl font-bold leading-tight mb-2">
    Apple Smart <br /> Watches
  </h2>
  <span className="text-sm underline underline-offset-4 cursor-pointer">
    Shop Now
  </span>
</div>
</div>

    {/* Card 2 */}
    <div className="relative rounded-lg overflow-hidden shadow-sm">
      <img
        src="https://cdn11.bigcommerce.com/s-gmsn9rvs48/product_images/uploaded_images/bottom-banners-02.jpg"
        alt=""
        className="w-full h-full object-cover"
      />

      {/* RIGHT ALIGNED TEXT */}
<div className="absolute right-10 top-1/2 -translate-y-1/2 text-white p-6 rounded-lg">
  <p className="text-sm mb-1">New Generation</p>
  <h2 className="text-2xl font-bold leading-tight mb-2">
    Apple Smart <br /> Watches
  </h2>
  <span className="text-sm underline underline-offset-4 cursor-pointer">
    Shop Now
  </span>
</div>
    </div>
  </div>
</div>

  <div className="max-w-7xl mx-auto px-6 my-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="bg-[#24364a] text-white px-4 py-2 font-semibold text-lg rounded-lg shadow-sm border ">
         New Products
        </h3>
        <div className="flex gap-2">
          <button className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100">
            ←
          </button>
          <button className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-100">
            →
          </button>
        </div>
      </div>
{/* new products */}
<Newproduct/>
<Blogs />
{/* Brands */}
<Brand />
</div>
</div>
<Footer />
</>

  );
};


export default Home;

