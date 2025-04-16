import React, { useState } from 'react';
import { Book, PlusCircle, Search, Sparkles, TrendingUp } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  author: string;
  date: string;
}

function App() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const articles: Article[] = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence",
      description: "Exploring the latest breakthroughs in AI and machine learning...",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      author: "Sarah Johnson",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "Sustainable Innovation in Energy",
      description: "New developments in renewable energy technology...",
      category: "Environment",
      imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
      author: "Michael Chen",
      date: "March 14, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Book className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">KnowledgeHub</h1>
            </div>
            <button
              onClick={() => setShowUploadModal(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              Share Knowledge
            </button>
          </div>
        </div>
      </header>

      {/* Search and Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Technology
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Environment
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Science
            </button>
          </div>
        </div>

        {/* Featured Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Sparkles className="h-6 w-6 text-yellow-500" />
            <h2 className="text-xl font-semibold text-gray-900">Featured Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full mb-4">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Section */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="h-6 w-6 text-red-500" />
            <h2 className="text-xl font-semibold text-gray-900">Trending Topics</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['AI & Machine Learning', 'Clean Energy', 'Space Exploration', 'Biotechnology'].map((topic) => (
              <div key={topic} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="font-medium text-gray-900">{topic}</h3>
                <p className="text-sm text-gray-500 mt-1">12 articles</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4">Share Your Knowledge</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter article title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Technology</option>
                  <option>Environment</option>
                  <option>Science</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={6}
                  placeholder="Write your article content..."
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;