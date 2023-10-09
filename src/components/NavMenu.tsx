"use client";

import { Menu, Transition } from "@headlessui/react";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Menu {
  id: number;
  src: string;
  text: string;
}

interface Button {
  id: number;
  src: string;
  text: string;
}

const menus: Menu[] = [
  { id: 1, src: "#", text: "Tailwind" },
  { id: 2, src: "#", text: "Bootstrap" },
  { id: 3, src: "#", text: "SASS" },
];

const buttons: Button[] = [
  { id: 1, src: "#", text: "Sign Up" },
  { id: 2, src: "#", text: "Sign In" },
];

const NavMenu = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="lg:hidden">
      <Menu>
        <Menu.Button onClick={() => setIsShowing(true)}>
          <MenuIcon />
        </Menu.Button>

        <Transition
          show={isShowing}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="bg-white inset-0 fixed z-10"
        >
          <div className="container">
            <div className="flex justify-between items-center gap-8">
              <Link href="#">
                {/* Logo */}
                <Image
                  src="https://logos-world.net/wp-content/uploads/2020/10/Free-Logo.png"
                  alt=""
                  width={110}
                  height={30}
                />
              </Link>

              <Menu.Button
                onClick={() => setIsShowing(false)}
                className="w-6 h-6"
              >
                <X />
              </Menu.Button>
            </div>
          </div>

          <hr />

          {/* NavLink */}
          <div className="container">
            <ul className="flex flex-col gap-4 text-lg py-4">
              {menus.map((menu) => (
                <li key={menu.id}>
                  <Link href={menu.src} className="hover:text-rose-600">
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Button */}
            <ul className="flex justify-around">
              {buttons.map((button) => (
                <li
                  key={button.id}
                  className="text-center cursor-pointer py-3 px-4 rounded-md bg-[#0d6efd] text-white font-bold hover:opacity-60"
                >
                  <Link href={button.src}>{button.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Transition>
      </Menu>
    </div>
  );
};

export default NavMenu;
