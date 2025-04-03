import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '@/modules/auth/ui/AuthProvider';
import { BsPersonCircle, BsImage, BsBriefcase, BsCalendarEvent, BsChat } from 'react-icons/bs';

// Sample data for the feed
const SAMPLE_POSTS = [
  {
    id: 1,
    user: {
      id: 'user1',
      name: 'Jessica Williams',
      role: 'Founder & CEO at Women Tech Ventures',
      avatar: null
    },
    content: 'Excited to announce that our company just secured Series A funding! Looking to expand our team with talented women in tech. Check out our job listings!',
    timestamp: '2h ago',
    likes: 145,
    comments: 23
  },
  {
    id: 2,
    user: {
      id: 'user2',
      name: 'Michelle Chen',
      role: 'Marketing Director at Green Beauty Co.',
      avatar: null
    },
    content: 'Just published my article on sustainable marketing strategies for small businesses. Would love to hear your thoughts and experiences!',
    timestamp: '5h ago',
    likes: 89,
    comments: 17
  },
  {
    id: 3,
    user: {
      id: 'user3',
      name: 'Samantha Rodriguez',
      role: 'Financial Advisor & Business Coach',
      avatar: null
    },
    content: 'Hosting a free webinar next week on financial planning for women entrepreneurs. Limited spots available! Register through the link in comments.',
    timestamp: '1d ago',
    likes: 212,
    comments: 45
  }
];

const SUGGESTED_CONNECTIONS = [
  {
    id: 'conn1',
    name: 'Aisha Johnson',
    role: 'Tech Entrepreneur',
    mutualConnections: 12
  },
  {
    id: 'conn2',
    name: 'Priya Patel',
    role: 'E-commerce Specialist',
    mutualConnections: 8
  },
  {
    id: 'conn3',
    name: 'Laura Martinez',
    role: 'Sustainable Fashion Designer',
    mutualConnections: 5
  }
];

const TRENDING_TOPICS = [
  'Women in Business',
  'Sustainable Entrepreneurship',
  'Tech Leadership',
  'Work-Life Balance',
  'Funding Opportunities'
];

const HomePage = () => {
  const { user } = useAuthContext();
  const [postContent, setPostContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!postContent.trim() || isPosting) return;
    
    setIsPosting(true);
    // In a real app, we would send this to an API
    console.log('New post:', postContent);
    
    // Simulate API call
    setTimeout(() => {
      setPostContent('');
      setIsPosting(false);
    }, 1000);
  };
  
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Feed Column */}
        <div className="lg:col-span-2">
          {/* Post Creation */}
          <div className="bg-white rounded-lg shadow mb-6 p-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <BsPersonCircle className="h-10 w-10 text-gray-400" />
              </div>
              <div className="min-w-0 flex-1">
                <form onSubmit={handlePostSubmit}>
                  <div>
                    <textarea
                      rows={3}
                      className="shadow-sm block w-full focus:ring-purple-500 focus:border-purple-500 sm:text-sm border border-gray-300 rounded-md box-border"
                      placeholder={`What's on your mind, ${user?.user_metadata?.full_name?.split(' ')[0] || 'there'}?`}
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center space-x-5">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-1 border border-transparent text-xs rounded-full text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
                      >
                        <BsImage className="mr-2 h-4 w-4" />
                        Photo
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-1 border border-transparent text-xs rounded-full text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
                      >
                        <BsBriefcase className="mr-2 h-4 w-4" />
                        Job
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-1 border border-transparent text-xs rounded-full text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
                      >
                        <BsCalendarEvent className="mr-2 h-4 w-4" />
                        Event
                      </button>
                    </div>
                    <button
                      type="submit"
                      disabled={!postContent.trim() || isPosting}
                      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                        postContent.trim() && !isPosting ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-300'
                      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer`}
                    >
                      {isPosting ? 'Posting...' : 'Post'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Feed Posts */}
          <div className="space-y-6">
            {SAMPLE_POSTS.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-5">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {post.user.avatar ? (
                        <img
                          className="h-10 w-10 rounded-full"
                          src={post.user.avatar}
                          alt={post.user.name}
                        />
                      ) : (
                        <BsPersonCircle className="h-10 w-10 text-gray-400" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link to={`/profile/${post.user.id}`} className="text-sm font-medium text-gray-900 hover:underline">
                        {post.user.name}
                      </Link>
                      <p className="text-sm text-gray-500">{post.user.role}</p>
                      <p className="text-xs text-gray-400">{post.timestamp}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-700">
                      {post.content}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3 border-t border-gray-200">
                  <div className="flex justify-between">
                    <button className="text-sm text-gray-500 hover:text-purple-600 flex items-center cursor-pointer">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      Like • {post.likes}
                    </button>
                    <button className="text-sm text-gray-500 hover:text-purple-600 flex items-center cursor-pointer">
                      <BsChat className="w-5 h-5 mr-1" />
                      Comment • {post.comments}
                    </button>
                    <button className="text-sm text-gray-500 hover:text-purple-600 flex items-center cursor-pointer">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Sidebar Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Suggested Connections */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Connect with more women</h2>
            </div>
            <div className="p-4">
              <ul className="divide-y divide-gray-200">
                {SUGGESTED_CONNECTIONS.map((connection) => (
                  <li key={connection.id} className="py-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <BsPersonCircle className="h-8 w-8 text-gray-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {connection.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {connection.role}
                        </p>
                        <p className="text-xs text-gray-400">
                          {connection.mutualConnections} mutual connections
                        </p>
                      </div>
                      <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer">
                        Connect
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link
                  to="/network"
                  className="text-sm font-medium text-purple-600 hover:text-purple-700"
                >
                  View all suggestions
                </Link>
              </div>
            </div>
          </div>
          
          {/* Trending Topics */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Trending Topics</h2>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                {TRENDING_TOPICS.map((topic, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">
                      #{topic.replace(/\s+/g, '')}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Events */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Upcoming Events</h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Women Entrepreneurs Meetup</h3>
                  <p className="text-xs text-gray-500 mt-1">Virtual • July 15, 2023</p>
                  <p className="text-xs text-gray-600 mt-1">Connect with other women entrepreneurs in your industry</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Funding Workshop</h3>
                  <p className="text-xs text-gray-500 mt-1">Virtual • July 22, 2023</p>
                  <p className="text-xs text-gray-600 mt-1">Learn about funding options for women-owned businesses</p>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-sm font-medium text-purple-600 hover:text-purple-700"
                >
                  View all events
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;