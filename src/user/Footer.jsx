import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Children } from "react";

const Footer = ({ className = {Children} }) => {
  return (
    <footer className={`bg-[#24364a] text-gray-300 mt-3 text-sm overflow-hidden ${className}`}>
      {/* Newsletter */}
      <div className="bg-yellow-400 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-black flex items-center gap-2">
            📦 Sign Up For Newsletter
          </p>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-l-md outline-none w-full md:w-64"
            />
            <button className="bg-[#1f2f44] text-white px-6 py-2 rounded-r-md hover:bg-black transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Info</h4>
          <p className="flex items-start gap-2">
            <MapPin size={16} /> Acme Widgets, 123 Widget Street, Acmeville, USA
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Mail size={16} /> support@yourstore.com
          </p>
          <p className="flex items-center gap-2 mt-2 text-yellow-400 font-semibold">
            <Phone size={16} /> +91 0123 45678
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navigate</h4>
          <ul className="space-y-2">
            {[
              "About Us",
              "Affiliate",
              "Return Policy",
              "Shipping & Returns",
              "Contact Us",
              "Blog",
              "Sitemap",
            ].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold mb-4">Categories</h4>
          <ul className="space-y-2">
            {[
              "Gadgets",
              "Shop All",
              "Bath",
              "Garden",
              "Kitchen",
              "Publications",
              "Utility",
            ].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Brands */}
        <div>
          <h4 className="text-white font-semibold mb-4">Popular Brands</h4>
          <div className="flex flex-wrap gap-2">
            {["OFS", "Common Good", "Sagaform", "View All"].map((brand) => (
              <span
                key={brand}
                className="bg-[#1f2f44] px-3 py-1 rounded text-sm hover:bg-yellow-400 hover:text-black transition cursor-pointer"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* App */}
          <div>
            <h4 className="text-white font-semibold mb-3">Download App</h4>
            <div className="flex gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                className="h-10 block"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                className="h-10 block"
              />
            </div>
          </div>

          {/* Social */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-3">Connect With Us</h4>
            <div className="flex justify-center gap-4">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-[#1f2f44] flex items-center justify-center hover:bg-yellow-400 hover:text-black transition cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Payments */}
          <div className="text-right">
            <h4 className="text-white font-semibold mb-3">Payment Methods</h4>
            <div className="flex justify-end gap-3 flex-wrap">
              {["VISA", "PayPal", "GPay", "Mastercard"].map((pay) => (
                <span
                  key={pay}
                  className="border border-white/20 px-3 py-1 rounded text-xs"
                >
                  {pay}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#1f2f44] text-center text-sm py-4 leading-none">
        Powered by BigCommerce © 2026 theme-echomart
      </div>
    </footer>
  );
};

export default Footer;