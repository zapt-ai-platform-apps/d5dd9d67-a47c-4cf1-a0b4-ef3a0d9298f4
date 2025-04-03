import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { useAuthContext } from '@/modules/auth/ui/AuthProvider';

// Pages
import LoginPage from '@/modules/auth/ui/LoginPage';
import HomePage from '@/modules/feed/ui/HomePage';
import ProfilePage from '@/modules/profile/ui/ProfilePage';
import NetworkPage from '@/modules/network/ui/NetworkPage';
import MessagesPage from '@/modules/messaging/ui/MessagesPage';
import CompaniesPage from '@/modules/companies/ui/CompaniesPage';
import JobsPage from '@/modules/jobs/ui/JobsPage';
import NotFoundPage from '@/app/pages/NotFoundPage';

// Layouts
import MainLayout from '@/app/layouts/MainLayout';
import AuthGuard from '@/app/guards/AuthGuard';

export default function Router() {
  const { user } = useAuthContext();

  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: user ? <Navigate to="/" replace /> : <LoginPage />,
        },
        { path: '*', element: <Navigate to="/auth/login" replace /> },
      ],
    },
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        { path: '', element: <HomePage /> },
        { path: 'profile/:id', element: <ProfilePage /> },
        { path: 'network', element: <NetworkPage /> },
        { path: 'messages', element: <MessagesPage /> },
        { path: 'companies', element: <CompaniesPage /> },
        { path: 'jobs', element: <JobsPage /> },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);
}