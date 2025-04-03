import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/app/components/Navbar';
import Sidebar from '@/app/components/Sidebar';
import Footer from '@/app/components/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;