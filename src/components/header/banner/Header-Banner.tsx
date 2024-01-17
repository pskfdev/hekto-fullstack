import React from "react";
import Link from "next/link";

type Props = {};

const HeaderBanner = (props: Props) => {
  return (
    <article className="flex items-center justify-center bg-pink-100 h-screen">
      <div className="space-y-5">
        <p className="text-red-700">Best Furniture For Your Castle...</p>
        <h1>New Furniture Collection Trends in 2023</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          placeat, accusantium obcaecati
        </p>
        <Link href="/shop">
          <button className="btn">Shop now</button>
        </Link>
      </div>
    </article>
  );
};

export default HeaderBanner;
