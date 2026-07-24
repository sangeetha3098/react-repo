import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Simple card component to display a news article preview.
 * Props:
 *  - article: object containing id, title, summary, image, category, readTime, date, author
 */
const NewsCard = ({ article }) => {
  const navigate = useNavigate();
  return (
    <article
      className="simple-card simple-card-hover overflow-hidden cursor-pointer flex flex-col h-full"
      onClick={() => navigate(`/news/${article.id}`)}
    >
      <div className="relative h-48 overflow-hidden border-b border-slate-700">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-2 left-2 bg-indigo-600 text-white text-xs font-bold uppercase px-2 py-1 rounded">
          {article.category}
        </div>
        <div className="absolute bottom-2 right-2 bg-slate-800/80 text-white text-xs px-2 py-1 rounded">
          {article.readTime}
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h2 className="text-lg font-bold text-white mb-2 line-clamp-2">{article.title}</h2>
        <p className="text-slate-400 text-sm line-clamp-3">{article.summary}</p>
        <div className="mt-4 text-xs text-slate-500 flex justify-between">
          <span>{article.author}</span>
          <span>{article.date}</span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
