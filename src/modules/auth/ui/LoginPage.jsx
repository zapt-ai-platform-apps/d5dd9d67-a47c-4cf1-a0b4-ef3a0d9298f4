import React from 'react';
import { supabase } from '@/supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-purple-800 mb-2">WomenBizNet</h1>
          <p className="text-gray-600">Connect, grow, and empower your business</p>
          <div className="mt-4 text-sm text-gray-500">
            <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
              Sign in with ZAPT
            </a>
          </div>
        </div>
        
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#9333ea', // Purple-600
                  brandAccent: '#db2777', // Pink-600
                }
              }
            }
          }}
          providers={['google', 'facebook', 'apple']}
          magicLink={true}
          view="magic_link"
        />
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>WomenBizNet: The professional network for women entrepreneurs</p>
        <a 
          href="https://www.zapt.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center mt-2 text-purple-600 hover:underline"
        >
          Made on ZAPT
        </a>
      </div>
    </div>
  );
};

export default LoginPage;