import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import { mockChats } from './data/mockData';
import { Chat } from './types';

function App() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const selectedChat = mockChats.find((chat) => chat.id === selectedChatId) as Chat | null;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <MessageSquare className="w-8 h-8 text-blue-500" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">Messzing</h1>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex h-[calc(100vh-140px)]">
          <div className="w-1/3 border-r">
            <ChatList
              chats={mockChats}
              onSelectChat={setSelectedChatId}
              selectedChatId={selectedChatId}
            />
          </div>
          <ChatWindow chat={selectedChat} />
        </div>
      </div>
    </div>
  );
}

export default App;