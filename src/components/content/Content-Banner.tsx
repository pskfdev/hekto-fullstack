import React from "react";

type Props = {
    layout: string
};

const ContentBanner = ({ layout }: Props) => {
  return (
    <section className={`container lg:px-40 mx-auto flex flex-col md:${layout} justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0`}>
      <div className="w-full bg-slate-500">
        <img
          className="w-3/5 mx-auto"
          src="https://via.placeholder.com/150/f66b97"
          alt=""
        />
      </div>

      <article className="w-full space-y-5 flex flex-col justify-center bg-stone-500">
        <h2>Unique Features Of leatest & Trending Products</h2>

        <ul className="space-y-2">
          <li>All frames constructed with hardwood solids and laminates</li>
          <li>
            Reinforced with double wood dowels, glue, screw-nails conner blocks
            and machine nails
          </li>
          <li>Arms, backs and seats are structurally reinforced</li>
        </ul>

        <div>
          <button className="btn">add to cart</button>
        </div>
      </article>
    </section>
  );
};

export default ContentBanner;
