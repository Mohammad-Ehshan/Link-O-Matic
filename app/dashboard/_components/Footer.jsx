import { Zap, Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-10 px-6 py-12 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">LinkOMatic</span>
          </div>

          <div className="flex items-center space-x-6 text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/dashboard" className="hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/premium" className="hover:text-white transition-colors">
              Premium
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-6">
          <Link
            href="https://github.com/Mohammad-Ehshan/Link-O-Matic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://twitter.com/ashmes16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mohammad-ehshan-4362a0298"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:ashmes16@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2024 LinkOMatic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
