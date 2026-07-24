import React from 'react';
import Navbar from '../components/Navbar';
import { newsArticles } from '../data/newsData';
import NewsCard from '../components/NewsCard';

export const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 pt-24">
        <h1 className="text-3xl md:text-5xl font-black text-white mb-4">Trending Stories & Updates</h1>
        <p className="text-slate-400 mb-8 max-w-2xl">
          Stay ahead with curated coverage on national milestones, global sports championships, and technological innovations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
