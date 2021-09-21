import React, { useEffect, useState } from "react";
import "./News.css";
import axios from "../../data/axios";
import API_KEY from "../../data/keys";
import { NewsCard } from "../../Components";
const News = ({ category }) => {
  const [news, setNews] = useState(null);
  useEffect(() => {
    (async () => {
      if (category) {
        const _ = await axios.get(`${category}${API_KEY}`);
        setNews(_.data);
      }
    })();
  }, [category]);
  return (
    <div className="news">
      <h1>{category}</h1>
      <div className="news__container">
        {news?.results?.map((news_article, index) => {
          return <NewsCard key={index} news_article={news_article} />;
        })}
      </div>
    </div>
  );
};
export default News;
