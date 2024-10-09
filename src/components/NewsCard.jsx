import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveNews, unsaveNews } from "../store";

const NewsCard = ({ article }) => {
  const dispatch = useDispatch();
  const savedNews = useSelector((state) => state.savedNews);
  const isSaved = savedNews.some((news) => news._id === article._id);

  const handleSave = () => {
    if (isSaved) {
      dispatch(unsaveNews(article));
    } else {
      dispatch(saveNews(article));
    }
  };

  return (
    <div className="news-card">
      <h3>{article.headline.main}</h3>
      <p>{article.snippet}</p>
      <a href={article.web_url} target="_blank" rel="noopener noreferrer">
        News Page
      </a>
      <button onClick={handleSave}>{isSaved ? "Un-Save" : "Save"}</button>
    </div>
  );
};

export default NewsCard;
