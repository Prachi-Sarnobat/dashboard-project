import { useEffect, useRef } from "react";

export default function LatestBlogs() {
    const blogs = [
  {
    id: 1,
    title: "Top 10 Gadgets You Must Buy in 2024",
    description: "Discover the latest must-have tech gadgets of 2024 that are trending worldwide.",
    image: "https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/368x239/uploaded_images/05.jpg",
  },
  {
    id: 2,
    title: "Best Wireless Headphones for Travel",
    description: "Noise-cancelling headphones that make your travel peaceful and enjoyable.",
    image: "https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/368x239/uploaded_images/04.jpg",
  },
  {
    id: 3,
    title: "Smart Watches That Track Your Health",
    description: "Track your fitness, heart rate, and sleep with the latest smartwatches.",
    image: "https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/368x239/uploaded_images/03.jpg",
  },
  {
    id: 4,
    title: "Gaming Setup Guide for Beginners",
    description: "Build your first gaming setup with the right gear and accessories.",
    image: "https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/368x239/uploaded_images/02.jpg",
  },
  {
    id: 5,
    title: "Best Bluetooth Speakers for Parties",
    description: "Loud, clear, and portable speakers for your next house party.",
    image: "https://cdn11.bigcommerce.com/s-gmsn9rvs48/images/stencil/368x239/uploaded_images/01.jpg",
  },
];
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!container) return;

      scrollAmount += 1;
      container.scrollLeft += 1;

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      }
    }, 30); // speed (lower = faster)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 px-4 mt-3">
  <h3 className="text-[#24364a] px-4 py-2 font-semibold text-lg rounded-lg shadow-sm border ">
     Latest Blogs
        </h3>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="min-w-[400px] max-w-[450px] bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4"
          >
            <div className="h-44 rounded-xl overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <h3 className="mt-3 font-semibold text-gray-800 line-clamp-2">
              {blog.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {blog.description}
            </p>

            <button className="mt-3 text-sm text-[#2a3b4e] font-semibold hover:underline">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}