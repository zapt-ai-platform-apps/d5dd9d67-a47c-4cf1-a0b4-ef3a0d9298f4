import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '@/modules/auth/ui/AuthProvider';
import { BsBell, BsEnvelope, BsSearch, BsPersonCircle } from 'react-icons/bs';

const Navbar = () => {
  const { user, signOut } = useAuthContext();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-purple-800">WomenBizNet</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="header-link header-link-active">
                Home
              </Link>
              <Link to="/network" className="header-link header-link-inactive">
                My Network
              </Link>
              <Link to="/jobs" className="header-link header-link-inactive">
                Jobs
              </Link>
              <Link to="/messages" className="header-link header-link-inactive">
                Messaging
              </Link>
              <Link to="/companies" className="header-link header-link-inactive">
                Companies
              </Link>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center">
            <div className="relative mx-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BsSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm box-border"
                placeholder="Search"
              />
            </div>
            <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer">
              <span className="sr-only">View notifications</span>
              <BsBell className="h-6 w-6" />
            </button>
            <button className="ml-3 p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer">
              <span className="sr-only">Messages</span>
              <BsEnvelope className="h-6 w-6" />
            </button>
            <div className="ml-3 relative">
              <div>
                <button 
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer"
                >
                  <span className="sr-only">Open user menu</span>
                  <BsPersonCircle className="h-8 w-8 text-gray-400" />
                </button>
              </div>
              {isProfileMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <Link to={`/profile/${user?.id}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                  <button
                    onClick={signOut}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;