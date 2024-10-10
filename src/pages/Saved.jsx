import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

const Saved = () => {
  const [savedNews, setSavedNews] = useState([]);

  useEffect(() => {
    const news = JSON.parse(localStorage.getItem("savedNews")) || [];
    setSavedNews(news);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Saved News</h1>
      {savedNews.length === 0 ? (
        <p className="text-center text-lg text-gray-600">
          Belum ada berita yang disimpan.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedNews.map((article) => (
            <NewsCard key={article._id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Saved;
