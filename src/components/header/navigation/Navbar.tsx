"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch, FiAlignRight } from "react-icons/fi";
import Sidenav from "./Sidenav";

type Props = {};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar sticky top-0 bg-white z-40">
      <article className="container mx-auto flex justify-between">
        <div>
          <Link href="/" className="text-3xl">
            <h1>Hekto</h1>
          </Link>
        </div>

        <div className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathname === "/about" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className={pathname === "/shop" ? "active" : ""}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={pathname === "/blog" ? "active" : ""}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={pathname === "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs rounded-none"
          />
          <button className="btn btn-secondary btn-sm rounded-none">
            <FiSearch />
          </button>
        </div>

        <aside className="md:hidden">
          <Sidenav />
        </aside>
      </article>
    </nav>
  );
};

export default Navbar;
