"use client";

import { Menu, Transition } from "@headlessui/react";
import { AlignJustify } from "lucide-react";
// import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import NavMenu from "./NavMenu";

interface Menu {
  id: number;
  src: string;
  text: string;
}

const menus: Menu[] = [
  { id: 1, src: "#", text: "Tailwind" },
  { id: 2, src: "#", text: "Bootstrap" },
  { id: 3, src: "#", text: "SASS" },
];

const Navbar = () => {
  return (
    <nav className="bg-[#f8f9fa] text-black">
      <div className="container">
        <div className="flex justify-between items-center gap-8">
          {/* Logo */}
          <Link href="#">
            <Image
              src="https://logos-world.net/wp-content/uploads/2020/10/Free-Logo.png"
              alt=""
              width={110}
              height={30}
            />
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-5">
            <ul className="lg:flex items-center gap-4 text-lg hidden">
              {menus.map((menu) => (
                <li className="text-black" key={menu.id}>
                  <Link href={menu.src} className="hover:text-rose-600">
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>

            <NavMenu />

            <Link
              href="#"
              className="text-center cursor-pointer py-3 px-4 rounded-md bg-[#0d6efd] text-white font-bold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
