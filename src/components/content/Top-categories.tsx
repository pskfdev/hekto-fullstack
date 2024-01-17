import React from "react";
import ContentBanner from "./Content-Banner";

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

const TopCategories = async (props: Props) => {
  const data = await getData();

  return (
    <section className="container mx-auto text-center">
      <h1 className="py-20">Top Categories</h1>
      <div className="carousel">
        {data &&
          data.slice(0, 7).map((item: Product, idx:string) => (
            <div id={idx} className="carousel-item flex flex-col">
              <img className="rounded-full w-6/12 mx-auto" src={item.url} alt={item.title} />
              <div className="my-2">
                <p>{item.title}</p>
                <p>$ 10</p>
              </div>
            </div>
          ))}
      </div>
      
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#0" className="btn btn-xs btn-circle"></a> 
        <a href="#4" className="btn btn-xs btn-circle"></a> 
        <a href="#6" className="btn btn-xs btn-circle"></a> 
      </div>
    </section>
  );
};

export default TopCategories;
