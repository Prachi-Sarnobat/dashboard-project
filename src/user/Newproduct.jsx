import React from 'react'

const Newproduct = () => {
    const newProducts = [
  {
    id: 101,
    title: "Wireless Noise-Cancelling Headphones",
    description: "Premium Bluetooth headphones with deep bass, active noise cancellation, and long battery life.",
    price: 2499,
    image: "https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/250x325/products/107/384/19-03__96850.1613821283.jpg?c=1",
    hoverImage: "https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/640w/products/107/385/19-03__22257.1613821283.jpg?c=1",
    brand: "SoundMax",
    stock: 12,
  },
  {
    id: 102,
    title: "Fitness Smart Watch Pro",
    description: "Smartwatch with heart-rate monitor, sleep tracking, step counter, and multiple sports modes.",
    price: 1999,
    image: "https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/250x325/products/97/398/09-02__48595.1613821286.jpg?c=1",
    hoverImage: "https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/1280x1280/products/97/397/09__16602.1613821286.jpg?c=1",
    brand: "FitPulse",
    stock: 0,
  },
  {
    id: 103,
    title: "4K Waterproof Action Camera",
    description: "Capture stunning 4K footage with this waterproof action camera, perfect for travel and adventure sports.",
    price: 4599,
    image: "https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/1280x1280/products/103/393/06-02__54509.1613821285.jpg?c=1",
    hoverImage: "https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/640w/products/103/389/06-03__48291.1613821284.jpg?c=1",
    brand: "EchoMart",
    stock: 18,
  },
  {
    id: 104,
    title: "Professional DSLR Camera Lens",
    description: "High-precision camera lens for sharp images, smooth focus, and professional photography results.",
    price: 8999,
    image: "https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/1280x1280/products/98/396/07-02__78746.1613821383.jpg?c=1",
    hoverImage: "https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/1280x1280/products/98/392/07__31146.1613821383.jpg?c=1",
    brand: "EchoMart",
    stock: 8,
  },
  {
    id: 105,
    title: "Portable Bluetooth Speaker",
    description: "Compact wireless speaker with powerful sound, deep bass, and all-day battery backup.",
    price: 1499,
    image: "https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/1280x1280/products/94/401/10__91376.1613821397.jpg?c=1",
    hoverImage: "https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/1280x1280/products/94/407/10-02__39208.1613821397.jpg?c=1",
    brand: "EchoMart",
    stock: 3453,
  },
 {
    id: 106,
    title: "Premium Gaming Headset",
    description: "Surround sound gaming headset with noise-isolating mic and comfortable over-ear cushions.",
    price: 2999,
    image: "https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/250x325/products/111/379/01-02__87936.1613821282.jpg?c=1",
    hoverImage: "https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/1280x1280/products/111/377/01__80695.1613821282.jpg?c=1",
    brand: "GamePro",
    stock: 24,
  },
 
];
  return (
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        
  {newProducts.map((newproduct) => (
    <div
      key={newproduct.id}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col gap-6 h-100"
      style={{width:"200px"}}
    >
      {/* Image Wrapper */}
      <div className="relative group h-60 flex items-center justify-center overflow-hidden">
        <img
          src={newproduct.image}
          alt={newproduct.title}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://via.placeholder.com/300x300?text=No+Image";
          }}
          className="h-57 object-contain transition-all duration-300 group-hover:opacity-0 group-hover:scale-[1.15]"
        />

        {newproduct.hoverImage && (
          <img
            src={newproduct.hoverImage}
            alt={newproduct.title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                newproduct.image || "https://via.placeholder.com/300x300?text=No+Image";
            }}
            className="h-52 object-contain absolute inset-0 mx-auto opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
          />
        )}

        {newproduct.stock === 0 && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
            Sold Out
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 mt-2">
        <span className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-10">
          {newproduct.title}
        </span>

        <span className="text-xs text-gray-500 line-clamp-2 mt-1 min-h-8">
          {newproduct.description}
        </span>

        <div className="mt-auto flex items-center justify-between pt-2 gap-3">
          <span className="text-[#2a3b4e] font-bold text-lg">
            ₹{Number(newproduct.price).toFixed(2)}
          </span>

          <button className="px-4 py-1 rounded-full bg-[#2a3b4e] text-white text-xs hover:bg-[#1e2a3a] transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
  )
}

export default Newproduct
