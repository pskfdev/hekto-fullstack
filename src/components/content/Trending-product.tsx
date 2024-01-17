import Link from "next/link";
import React from "react";

type Props = {};

type Product = {
  id: number;
  url: string;
  title: string;
};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const TrendingProduct = async (props: Props) => {
  const data = await getData();

  return (
    <section className="container mx-auto text-center">
      <h1 className="py-20">Trending products</h1>
      <div className="grid gap-5 grid-cols-fluid">
        {data &&
          data.slice(0, 4).map((item: Product) => (
            <div className="space-y-5 shadow-lg rounded py-5">
              <img
                className="mx-auto w-10/12"
                src={item.url}
                alt={item.title}
              />
              <div>
                <p>{item.title}</p>
                <p>$ 10</p>
              </div>
            </div>
          ))}
      </div>

      <div className="grid gap-5 grid-cols-fluid mt-5">
        <div className="p-4 bg-slate-400">
          <div className="text-start">
            <h3>23% off in all products</h3>
            <Link href="/shop">Shop now</Link>
          </div>
          <div className="flex justify-end">
            <img
              className="w-1/2"
              src="https://via.placeholder.com/600/92c952"
              alt=""
            />
          </div>
        </div>

        <div className="p-4 bg-slate-400">
          <div className="text-start">
            <h3>23% off in all products</h3>
            <Link href="/shop">Shop now</Link>
          </div>
          <div className="flex justify-end">
            <img
              className="w-1/2"
              src="https://via.placeholder.com/600/771796"
              alt=""
            />
          </div>
        </div>

        <div className="space-y-5 text-sm bg-zinc-500 w-fit">
          <div className="flex space-x-2 items-center">
            <div>
              <img className="w-16" src="https://via.placeholder.com/600/92c952" alt="" />
            </div>
            <div className="text-start">
              <p>Executive Seot chair</p>
              <p>$35.00</p>
            </div>
          </div>

          <div className="flex space-x-2 items-center">
            <div>
              <img className="w-16" src="https://via.placeholder.com/600/92c952" alt="" />
            </div>
            <div className="text-start">
              <p>Executive Seot chair</p>
              <p>$35.00</p>
            </div>
          </div>

          <div className="flex space-x-2 items-center">
            <div>
              <img className="w-16" src="https://via.placeholder.com/600/92c952" alt="" />
            </div>
            <div className="text-start">
              <p>Executive Seot chair</p>
              <p>$35.00</p>
            </div>
          </div>

          <div className="flex space-x-2 items-center">
            <div>
              <img className="w-16" src="https://via.placeholder.com/600/92c952" alt="" />
            </div>
            <div className="text-start">
              <p>Executive Seot chair</p>
              <p>$35.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProduct;
