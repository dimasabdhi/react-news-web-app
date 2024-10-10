import React, { useState, useEffect } from "react";

const NewsCard = ({ article }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedNews = JSON.parse(localStorage.getItem("savedNews")) || [];
    const isArticleSaved = savedNews.find(
      (savedArticle) => savedArticle._id === article._id
    );
    if (isArticleSaved) {
      setIsSaved(true);
    }
  }, [article]);

  const handleSave = () => {
    let savedNews = JSON.parse(localStorage.getItem("savedNews")) || [];

    if (isSaved) {
      savedNews = savedNews.filter(
        (savedArticle) => savedArticle._id !== article._id
      );
      localStorage.setItem("savedNews", JSON.stringify(savedNews));
      setIsSaved(false);
    } else {
      savedNews.push(article);
      localStorage.setItem("savedNews", JSON.stringify(savedNews));
      setIsSaved(true);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-2">{article.headline.main}</h2>
        <p className="text-gray-600 text-sm mb-4">{article.snippet}</p>
      </div>
      <div className="flex justify-between items-center">
        <a
          href={article.web_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          News Page
        </a>
        <button
          onClick={handleSave}
          className={`${
            isSaved
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          } text-white px-4 py-2 rounded-lg transition`}
        >
          {isSaved ? "Un-Save" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
