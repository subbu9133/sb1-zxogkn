import React, { useState } from 'react';
import { Send, Phone, Video, MoreVertical } from 'lucide-react';
import { Chat, Message } from '../types';

interface ChatWindowProps {
  chat: Chat | null;
}

export default function ChatWindow({ chat }: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState('');

  if (!chat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">Select a chat to start messaging</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <div className="flex items-center">
          <img
            src={chat.avatar}
            alt={chat.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="ml-4">
            <h2 className="font-semibold text-gray-900">{chat.name}</h2>
            <p className="text-sm text-gray-500">{chat.online ? 'Online' : 'Offline'}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Phone className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />
          <Video className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />
          <MoreVertical className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {chat.messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.isSender ? 'justify-end' : 'justify-start'
            } mb-4`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.isSender
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-900'
              }`}
            >
              <p>{message.content}</p>
              <span
                className={`text-xs ${
                  message.isSender ? 'text-blue-100' : 'text-gray-500'
                } block mt-1`}
              >
                {message.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
          />
          <button
            className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}