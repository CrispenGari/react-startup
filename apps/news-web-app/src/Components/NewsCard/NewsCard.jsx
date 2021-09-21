import React from "react";

import TextTruncate from "react-text-truncate";
import "./NewsCard.css";
const NewsCard = ({ news_article }) => {
  return (
    <div className="newscard">
      <div className="newscard__top">
        <h1>{news_article?.title}</h1>
        <marquee direction="right" loop>
          {news_article?.byline}
        </marquee>
      </div>
      {news_article?.multimedia && (
        <img src={news_article?.multimedia[0]?.url} alt="bg-barner" />
      )}
      <div className="newscard__bottom">
        <TextTruncate
          line={1}
          element="span"
          truncateText="…"
          className="newscard__abstract"
          text={news_article?.abstract}
          textTruncateChild={<a href={news_article?.url}>more</a>}
        />
        <p></p>
        <div className="newscard__time">
          <small>{news_article?.published_date}</small>
          <a href={news_article?.url}>Read more</a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
