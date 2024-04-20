import { Layout, Page, Text, List } from '@vercel/examples-ui'
import React, { ReactNode, useState } from 'react';
interface MyLayoutProps {
  children: ReactNode;
}
export default function Index({children}) {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    setDisplayText(inputText);
  };
  return (
    <Page>
      {/* <Text variant="h2" className="mb-6">
        All the listed Items
      </Text>
      <List>
        <li>Username: 4dmin</li>
        <li>Password: testpwd123</li>
      </List> */}
  <div className="flex flex-col min-h-screen">
      {/* Header */}
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-4">
          <input
            type="text"
            className="border border-gray-500 rounded px-3 py-2 w-full"
            placeholder="Enter a link or text"
            value={inputText}
            onChange={handleInputChange}
          />
          <button
            className="bg-blue-500 border-gray-500 border-2 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-2 transition-colors duration-300 shadow-md"
            onClick={handleSubmit}
          >
            OK
          </button>
        </div>
        {displayText && (
          <div className="bg-gray-100 p-4 rounded">
            <p>{displayText}</p>
          </div>
        )}
        {children}
      </main>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Share - IT</p>
        </div>
      </footer>
    </div>
      
      
    </Page>
  )
}

Index.Layout = Layout
