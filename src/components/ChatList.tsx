import React from 'react';
import { Search, MessageSquare } from 'lucide-react';
import { ChatPreview } from '../types';

interface ChatListProps {
  chats: ChatPreview[];
  onSelectChat: (id: string) => void;
  selectedChatId: string | null;
}

export default function ChatList({ chats, onSelectChat, selectedChatId }: ChatListProps) {
  return (
    <div className="w-full h-full flex flex-col bg-white">
      <div className="p-4 bg-gray-50">
        <div className="relative">
          <input
            type="text"
            placeholder="Search chats..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100 ${
              selectedChatId === chat.id ? 'bg-blue-50' : ''
            }`}
          >
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">{chat.name}</h3>
                <span className="text-sm text-gray-500">{chat.lastMessageTime}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}