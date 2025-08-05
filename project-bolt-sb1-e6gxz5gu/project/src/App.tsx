import React, { useState } from 'react';
import { 
  Play, 
  Search, 
  Upload, 
  User, 
  Bell, 
  Menu, 
  Home, 
  TrendingUp, 
  Clock, 
  ThumbsUp, 
  Share2,
  MoreHorizontal,
  Eye,
  Calendar
} from 'lucide-react';

interface Video {
  id: number;
  title: string;
  channel: string;
  views: string;
  uploadTime: string;
  thumbnail: string;
  duration: string;
  channelAvatar: string;
  verified?: boolean;
}

function App() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const videos: Video[] = [
    {
      id: 1,
      title: "Amazing Nature Documentary - Wildlife in 4K",
      channel: "Nature World",
      views: "2.3M views",
      uploadTime: "2 days ago",
      thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
      duration: "15:42",
      channelAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      verified: true
    },
    {
      id: 2,
      title: "Learn React in 2024 - Complete Tutorial",
      channel: "CodeMaster",
      views: "850K views",
      uploadTime: "1 week ago",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
      duration: "45:30",
      channelAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    },
    {
      id: 3,
      title: "Epic Travel Vlog - Journey Through Japan",
      channel: "Adventure Seekers",
      views: "1.2M views",
      uploadTime: "3 days ago",
      thumbnail: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400",
      duration: "22:15",
      channelAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
    },
    {
      id: 4,
      title: "Cooking Masterclass - Perfect Pasta",
      channel: "Chef's Kitchen",
      views: "500K views",
      uploadTime: "5 days ago",
      thumbnail: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400",
      duration: "12:08",
      channelAvatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=100",
      verified: true
    },
    {
      id: 5,
      title: "AI Revolution - The Future is Here",
      channel: "Tech Insights",
      views: "3.1M views",
      uploadTime: "1 day ago",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
      duration: "28:45",
      channelAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
    },
    {
      id: 6,
      title: "Guitar Tutorial - Master These 5 Songs",
      channel: "Music Academy",
      views: "750K views",
      uploadTime: "4 days ago",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      duration: "35:20",
      channelAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Left section */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="bg-red-600 p-2 rounded">
                <Play className="h-6 w-6 text-white fill-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">VidShare</span>
            </div>
          </div>

          {/* Center search */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 pl-4 pr-12 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-0 top-0 bottom-0 px-6 bg-gray-100 dark:bg-gray-600 border-l border-gray-300 dark:border-gray-600 rounded-r-full hover:bg-gray-200 dark:hover:bg-gray-500">
                <Search className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowUploadModal(true)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <Upload className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <Bell className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <User className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white dark:bg-gray-800 border-r dark:border-gray-700 transition-all duration-300 fixed h-full z-40 pt-4`}>
          <nav className="space-y-2 px-2">
            <div className="space-y-1">
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
                <Home className="h-6 w-6" />
                {sidebarOpen && <span>Home</span>}
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                <TrendingUp className="h-6 w-6" />
                {sidebarOpen && <span>Trending</span>}
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                <Clock className="h-6 w-6" />
                {sidebarOpen && <span>History</span>}
              </a>
            </div>
            {sidebarOpen && (
              <div className="pt-4 border-t dark:border-gray-600">
                <p className="px-3 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Subscriptions</p>
                <div className="space-y-1">
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24" alt="" className="w-6 h-6 rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">Nature World</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24" alt="" className="w-6 h-6 rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">CodeMaster</span>
                  </a>
                </div>
              </div>
            )}
          </nav>
        </aside>

        {/* Main content */}
        <main className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-16'} transition-all duration-300 p-6`}>
          {selectedVideo ? (
            /* Video Player View */
            <div className="max-w-6xl mx-auto">
              <div className="bg-black rounded-lg overflow-hidden mb-4">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg">Video Player</p>
                    <p className="text-sm opacity-60">Playing: {selectedVideo.title}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-6">
                <div className="flex-1">
                  <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {selectedVideo.title}
                  </h1>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={selectedVideo.channelAvatar} 
                        alt="" 
                        className="w-10 h-10 rounded-full" 
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{selectedVideo.channel}</p>
                        <p className="text-sm text-gray-500">1.2M subscribers</p>
                      </div>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
                        Subscribe
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
                        <ThumbsUp className="h-5 w-5" />
                        <span>1.2K</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
                        <Share2 className="h-5 w-5" />
                        <span>Share</span>
                      </button>
                      <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{selectedVideo.views}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{selectedVideo.uploadTime}</span>
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedVideo(null)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Back to Home
              </button>
            </div>
          ) : (
            /* Video Grid View */
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                 {videos.map((video) => (
                   <div 
                     key={video.id} 
                     className="video-card bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                     onClick={() => setSelectedVideo(video)}
                   >
                     <div className="relative">
                       <img
                         src={video.thumbnail}
                         alt={video.title}
                         className="video-thumbnail w-full h-48 object-cover"
                       />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-start space-x-3">
                        <img 
                          src={video.channelAvatar} 
                          alt="" 
                          className="w-9 h-9 rounded-full flex-shrink-0" 
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1">
                            {video.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                            {video.channel}
                            {video.verified && (
                              <span className="ml-1 text-blue-500">✓</span>
                            )}
                          </p>
                          <div className="text-sm text-gray-500 dark:text-gray-500">
                            {video.views} • {video.uploadTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Upload Video</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Video File</label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">MP4, MOV up to 2GB</p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter video title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  rows={4}
                  placeholder="Tell viewers about your video..."
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Upload Video
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