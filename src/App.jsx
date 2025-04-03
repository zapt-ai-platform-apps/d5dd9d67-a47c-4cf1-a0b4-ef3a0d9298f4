import React from 'react';
import AppProviders from '@/app/providers/AppProviders';
import Router from '@/app/routes';

function App() {
  return (
    <AppProviders>
      <Router />
    </AppProviders>
  );
}

export default App;