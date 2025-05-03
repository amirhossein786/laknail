"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import {
  FaHome,
  FaServicestack,
  FaPhoneAlt,
  FaInfoCircle,
} from "react-icons/fa"; 
import Image from "next/image";
import Logo from "../public/img/lak.png";
import { useState } from "react";

export default function Navbar({ }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const pathname = usePathname();
  const getLinkClass = (path: string): string =>
        pathname === path
      ? "bg-pink-600 text-white rounded-lg py-2 px-4"
      : "text-gray-700 hover:bg-pink-200 py-2 px-4";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div dir="rtl" className="w-screen relative">
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-all ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`lg:hidden fixed top-0 right-0 bg-white w-1/3 h-full shadow-lg z-50 transition-all transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <Image src={Logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <button onClick={toggleMenu} className="text-xl">
            <AiOutlineClose />
          </button>
        </div>

        <ul className="flex flex-col gap-2 p-4 text-xs text-gray-600">
          <li>
            <Link
              href="/"
              className={`transition-all flex items-center no-underline ${getLinkClass(
                "/home"
              )}`}
              onClick={toggleMenu}
            >
              <FaHome className="mr-2 text-lg" />
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`transition-all flex items-center no-underline ${getLinkClass(
                "/services"
              )}`}
              onClick={toggleMenu}
            >
              <FaServicestack className="mr-2 text-lg" />
              خدمات
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`transition-all flex items-center no-underline ${getLinkClass(
                "/contact"
              )}`}
              onClick={toggleMenu}
            >
              <FaPhoneAlt className="mr-2 text-lg" />
              تماس با ما
            </Link>
          </li>
          <li>
            <Link
              href="/#"
              className={`transition-all flex items-center no-underline ${getLinkClass(
                "/about"
              )}`}
              onClick={toggleMenu}
            >
              <FaInfoCircle className="mr-2 text-lg" />
              درباره ما
            </Link>
          </li>
        </ul>
      </div>

      <nav className="w-full p-0 m-0 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <button
              className="text-white lg:hidden text-2xl"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <AiOutlineClose /> : <AiOutlineBars />}
            </button>

            <Link href="/" className="flex items-center no-underline">
              <Image
                src={Logo}
                alt="Logo"
                className="w-12 h-12 rounded-full shadow-md"
              />
              <span className="hidden sm:block text-white text-xl font-semibold">
                laknail
              </span>
            </Link>
          </div>

          <ul className="hidden lg:flex gap-8  text-sm">
            <li>
              <Link
                href="/"
                className={`transition-all text-white flex items-center no-underline ${getLinkClass(
                  "/home"
                )}`}
              >
                <FaHome className="mr-2 text-lg" />
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`transition-all text-white flex items-center no-underline ${getLinkClass(
                  "/services"
                )}`}
              >
                <FaServicestack className="mr-2 text-lg" />
                خدمات
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`transition-all text-white flex items-center no-underline ${getLinkClass(
                  "/contact"
                )}`}
              >
                <FaPhoneAlt className="mr-2 text-lg" />
                تماس با ما
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`transition-all text-white flex items-center no-underline ${getLinkClass(
                  "/about"
                )}`}
              >
                <FaInfoCircle className="mr-2 text-lg" />
                درباره ما
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
