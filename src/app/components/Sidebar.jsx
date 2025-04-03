import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '@/modules/auth/ui/AuthProvider';
import { BsPersonCircle } from 'react-icons/bs';

const Sidebar = () => {
  const { user } = useAuthContext();
  
  return (
    <div className="hidden lg:block w-64 bg-white shadow-sm border-r border-gray-200">
      <div className="p-5">
        <div className="text-center mb-6">
          <div className="inline-block rounded-full overflow-hidden h-20 w-20 mb-4">
            {user?.user_metadata?.avatar_url ? (
              <img 
                src={user.user_metadata.avatar_url} 
                alt="Profile" 
                className="h-full w-full object-cover"
              />
            ) : (
              <BsPersonCircle className="h-full w-full text-gray-300" />
            )}
          </div>
          <Link to={`/profile/${user?.id}`} className="text-lg font-medium text-gray-900">
            {user?.user_metadata?.full_name || user?.email}
          </Link>
          <p className="text-sm text-gray-500 mt-1">
            Entrepreneur & Business Owner
          </p>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Your Network
            </span>
            <Link to="/network" className="text-xs text-purple-600 hover:text-purple-800">
              See all
            </Link>
          </div>
          <p className="text-sm text-gray-600">
            Grow your network by connecting with other women entrepreneurs
          </p>
          <div className="mt-3">
            <Link 
              to="/network" 
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer"
            >
              Find Connections
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-4 pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Business Resources
            </span>
          </div>
          <ul className="space-y-2 mt-2">
            <li>
              <Link to="/jobs" className="text-sm text-gray-600 hover:text-purple-600">
                Find Business Opportunities
              </Link>
            </li>
            <li>
              <Link to="/companies" className="text-sm text-gray-600 hover:text-purple-600">
                Discover Women-Owned Businesses
              </Link>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-purple-600">
                Business Growth Resources
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-purple-600">
                Mentorship Programs
              </a>
            </li>
          </ul>
        </div>
        
        <div className="mt-6 text-center">
          <a 
            href="https://www.zapt.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-purple-600 hover:underline"
          >
            Made on ZAPT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;