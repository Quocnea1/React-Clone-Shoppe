import { Layout } from "../../global/Layout/Layout";
import React, { useEffect } from "react";
import "./Home.scss";
import { recommendTodayData } from "../../../utils/dataConfig";
import { RecommendToday } from "./RecommendToday/RecommendToday";
import HeroBanner from "./HeroBanner/HeroBanner";
import { Category } from "./Category/Category";
import { categoryData } from "../../../utils/dataConfig";
import SearchTrending from "./SearchTrending/SearchTrending";

export const Home = () => {
  useEffect(() => {
    document.title = "Trang chủ";
    window.scrollTo(0, 0);
  }, []);

  const { title, items } = categoryData;
  return (
    <div className="home">
      <Layout>
        <HeroBanner />
        <Category title={title} items={items} />
        <SearchTrending/>
        <RecommendToday data={recommendTodayData} />
      </Layout>
    </div>
  );
};
