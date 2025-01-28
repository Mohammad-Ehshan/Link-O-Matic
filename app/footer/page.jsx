import React from "react";
import { FaEnvelopeOpen, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-emerald-300 to-green-200 text-zinc-900  text-center">
      <div className="relative left-24 top-28 transform -translate-y-1/2">
        <img
          src="/Design 15.png"
          alt="logo"
          className="h-28 w-auto mix-blend-darken"
        />
      </div>
      <h1 className="text-3xl font-bold mb-6 tracking-wider -mt-20">
        Green-Mind-ai
      </h1>
      <div className="mb-6">
        <ul className="flex justify-center space-x-4 text-sm">
          <li>コシャル・クローナ</li>
          <li>アーリア人</li>
          <li>アイテムの好意</li>
          <li>アニケシュ</li>
          <li>ए.के.ए.ई-と会社</li>
        </ul>
      </div>
      <div className="flex justify-center items-center space-x-6 mb-6">
        {/* Social Media Icons */}
        <button className="hover:text-blue-700">
          <FaFacebookF/>
        </button>
        <button className="hover:text-gray-600">
          <FaTwitter/>
        </button>
        <button className="hover:text-pink-800">
          <FaInstagram />
        </button>
        <button className="hover:text-amber-400">
          <FaEnvelopeOpen />
        </button>
        <button className="hover:text-red-700">
          <FaYoutube/>
        </button>
        <button className="border-2 border-white px-3 scroll-py-0.5 rounded-full text-base font-caveat hover:bg-teal-100 hover:text-black">
          English
        </button>
      </div>
      <div className="text-base tracking-widest font-mono">
        <p>Copyright © Green-Mind-Ai Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;