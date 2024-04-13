// components/MyLayout.tsx
import React, { ReactNode } from 'react';

interface MyLayoutProps {
 children: ReactNode;
}

const MyLayout: React.FC<MyLayoutProps> = ({ children }) => {
 return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold">Share - IT</h1>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Share - IT</p>
        </div>
      </footer>
    </div>
 );
};

export default MyLayout;
