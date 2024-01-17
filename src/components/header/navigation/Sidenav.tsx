import React from "react";
import { FiAlignRight } from "react-icons/fi";
import Link from "next/link";

type Props = {};

const Sidenav = (props: Props) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div>
        <label htmlFor="my-drawer" className="btn drawer-button">
          <FiAlignRight />
        </label>
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu pt-4 w-2/5 min-w-fit min-h-full bg-base-200 text-2xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about">Our Story</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
