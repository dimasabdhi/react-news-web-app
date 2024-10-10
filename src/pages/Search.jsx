import React, { useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

const Search = () => {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setNews(response.data.response.docs);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Search News</h1>
      <form onSubmit={handleSearch} className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Masukkan kata kunci..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded-l-lg px-4 py-2 w-1/2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        >
          Cari Berita
        </button>
      </form>

      {loading && <p className="text-center text-lg">Loading...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article) => (
          <NewsCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Search;
