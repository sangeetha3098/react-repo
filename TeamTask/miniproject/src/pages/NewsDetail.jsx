import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ArrowLeftIcon } from '../components/Icons';
import { newsArticles } from '../data/newsData';

export const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const articleId = parseInt(id);
  const article = newsArticles.find(a => a.id === articleId);

  if (!article) {
    // If article not found, go back to home
    navigate('/home');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 to-rose-800 text-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Back button */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/home')}
            className="flex items-center space-x-2 text-white hover:text-gray-200 font-semibold"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </button>
        </div>

        {/* Article Header */}
        <article className="bg-white/5 rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-80">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold uppercase px-3 py-1 rounded">
              {article.category}
            </div>
            <div className="absolute bottom-4 right-4 bg-indigo-800/30 text-white text-xs px-3 py-1 rounded">
              {article.readTime}
            </div>
          </div>

          <div className="p-6">
            <h1 className="text-3xl font-extrabold mb-2 text-white">{article.title}</h1>
            <div className="flex items-center text-sm text-gray-300 mb-4">
              <span>By {article.author}</span>
              <span className="mx-2">|</span>
              <span>{article.date}</span>
            </div>
            <p className="text-gray-200 leading-relaxed whitespace-pre-line">{article.content}</p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default NewsDetail;
