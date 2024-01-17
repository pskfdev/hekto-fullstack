import { log } from "console";
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

const ReccommandProduct = async (props: Props) => {
  const data = await getData();

  return (
    <div className="text-center container mx-auto w-full py-20 text-blue-800">
      <h1>Reccommand Products</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 w-full py-14">
        {data &&
          data.slice(0, 6).map((item:Product) => (
            <div className="hover:underline decoration-2 underline-offset-4">
              <img src={item.url} alt={item.title} className="rounded-lg" />
              <div className="flex justify-between py-4">
                <p>{item.title}</p>
                <p className="text-red-500">10</p>
              </div>
            </div>
          ))}
      </div>
      <button className="btn">See more</button>
    </div>
  );
};

export default ReccommandProduct;
