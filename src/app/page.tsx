import ContentBanner from "@/components/content/Content-Banner";
import ReccommandProduct from "@/components/content/Reccommand-product";
import TopCategories from "@/components/content/Top-categories";
import TrendingProduct from "@/components/content/Trending-product";
import HeaderBanner from "@/components/header/banner/Header-Banner";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <HeaderBanner />
      
      <div>
        <TopCategories />
        <ReccommandProduct />
      </div>

      <div className="py-20 bg-red-200">
        <ContentBanner layout="flex-row"/>
      </div>

      <div className="py-20">
        <TrendingProduct />
      </div>
    </>
  );
};

export default Home;
