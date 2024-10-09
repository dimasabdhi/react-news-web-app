import React from "react";
import { useSelector } from "react-redux";
import NewsCard from "../components/NewsCard";

const Saved = () => {
  const savedNews = useSelector((state) => state.savedNews);

  if (savedNews.length === 0) {
    return <p>Belum ada berita yang disimpan.</p>;
  }

  return (
    <div>
      <h1>Saved News</h1>
      <div>
        {savedNews.map((article) => (
          <NewsCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Saved;
