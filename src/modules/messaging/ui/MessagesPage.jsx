import React, { useState } from 'react';
import { BsPersonCircle, BsSearch, BsThreeDots, BsPaperclip, BsEmojiSmile, BsArrowRight } from 'react-icons/bs';

const SAMPLE_CONVERSATIONS = [
  {
    id: 'conv1',
    user: {
      id: 'user1',
      name: 'Jessica Williams',
      role: 'Founder & CEO',
      avatar: null
    },
    lastMessage: {
      text: 'Would love to connect about potential collaboration',
      timestamp: '2 hours ago',
      isUnread: true
    }
  },
  {
    id: 'conv2',
    user: {
      id: 'user2',
      name: 'Michelle Chen',
      role: 'Marketing Director',
      avatar: null
    },
    lastMessage: {
      text: 'Thanks for the introduction to Sarah!',
      timestamp: '1 day ago',
      isUnread: false
    }
  },
  {
    id: 'conv3',
    user: {
      id: 'user3',
      name: 'Aisha Johnson',
      role: 'Tech Entrepreneur',
      avatar: null
    },
    lastMessage: {
      text: 'Looking forward to the webinar next week.',
      timestamp: '2 days ago',
      isUnread: false
    }
  }
];

const SAMPLE_MESSAGES = [
  {
    id: 'msg1',
    senderId: 'user1',
    text: 'Hi there! I came across your profile and I'm really impressed with the work you're doing in women's entrepreneurship.',
    timestamp: '10:30 AM'
  },
  {
    id: 'msg2',
    senderId: 'me',
    text: 'Thank you so much! I appreciate the kind words. I've been following your company's growth as well.',
    timestamp: '10:35 AM'
  },
  {
    id: 'msg3',
    senderId: 'user1',
    text: 'That's great to hear! I was wondering if you might be interested in collaborating on a women's business mentorship program I'm putting together?',
    timestamp: '10:40 AM'
  },
  {
    id: 'msg4',
    senderId: 'me',
    text: 'I'd definitely be interested in hearing more about that. What kind of collaboration did you have in mind?',
    timestamp: '10:45 AM'
  },
  {
    id: 'msg5',
    senderId: 'user1',
    text: 'Would love to connect about potential collaboration opportunities between our organizations. We're launching a new initiative for women entrepreneurs in tech and your expertise would be invaluable.',
    timestamp: '11:00 AM'
  }
];

const MessagesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConversation, setSelectedConversation] = useState(SAMPLE_CONVERSATIONS[0]);
  const [newMessage, setNewMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  
  const filteredConversations = SAMPLE_CONVERSATIONS.filter(conversation =>
    conversation.user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || isSending) return;
    
    setIsSending(true);
    
    // Simulate API call to send message
    setTimeout(() => {
      console.log('Sending message:', newMessage);
      setNewMessage('');
      setIsSending(false);
    }, 800);
  };
  
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Messages</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Conversations List */}
          <div className="md:col-span-1 border-r border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BsSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm box-border"
                  placeholder="Search messages"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <ul className="divide-y divide-gray-200 overflow-y-auto" style={{ maxHeight: '600px' }}>
              {filteredConversations.map(conversation => (
                <li
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                    selectedConversation?.id === conversation.id ? 'bg-purple-50' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {conversation.user.avatar ? (
                        <img
                          className="h-10 w-10 rounded-full"
                          src={conversation.user.avatar}
                          alt={conversation.user.name}
                        />
                      ) : (
                        <BsPersonCircle className="h-10 w-10 text-gray-400" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {conversation.user.name}
                          {conversation.lastMessage.isUnread && (
                            <span className="ml-2 inline-block w-2 h-2 rounded-full bg-purple-600"></span>
                          )}
                        </p>
                        <p className="text-xs text-gray-500">{conversation.lastMessage.timestamp}</p>
                      </div>
                      <p className="text-xs text-gray-500 truncate">{conversation.user.role}</p>
                      <p className="text-sm text-gray-600 truncate">{conversation.lastMessage.text}</p>
                    </div>
                  </div>
                </li>
              ))}
              
              {filteredConversations.length === 0 && (
                <li className="px-4 py-6 text-center text-gray-500">
                  No conversations found
                </li>
              )}
            </ul>
          </div>
          
          {/* Conversation Detail */}
          <div className="md:col-span-2 flex flex-col">
            {selectedConversation ? (
              <>
                {/* Conversation Header */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {selectedConversation.user.avatar ? (
                        <img
                          className="h-10 w-10 rounded-full"
                          src={selectedConversation.user.avatar}
                          alt={selectedConversation.user.name}
                        />
                      ) : (
                        <BsPersonCircle className="h-10 w-10 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">
                        {selectedConversation.user.name}
                      </h2>
                      <p className="text-sm text-gray-500">{selectedConversation.user.role}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-500 cursor-pointer">
                    <BsThreeDots className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto" style={{ maxHeight: '400px' }}>
                  <div className="space-y-4">
                    {SAMPLE_MESSAGES.map(message => (
                      <div
                        key={message.id}
                        className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
                            message.senderId === 'me'
                              ? 'bg-purple-600 text-white'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.senderId === 'me' ? 'text-purple-200' : 'text-gray-500'
                          }`}>
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Message Input */}
                <div className="p-4 border-t border-gray-200">
                  <form onSubmit={handleSendMessage}>
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="inline-flex items-center text-gray-400 hover:text-gray-500 cursor-pointer"
                      >
                        <BsPaperclip className="h-5 w-5" />
                      </button>
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="ml-3 block w-full rounded-full border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm box-border"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      />
                      <button
                        type="button"
                        className="ml-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                      >
                        <BsEmojiSmile className="h-5 w-5" />
                      </button>
                      <button
                        type="submit"
                        disabled={!newMessage.trim() || isSending}
                        className={`ml-2 inline-flex items-center px-3 py-2 border border-transparent rounded-full shadow-sm text-white ${
                          !newMessage.trim() || isSending
                            ? 'bg-purple-300'
                            : 'bg-purple-600 hover:bg-purple-700'
                        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer`}
                      >
                        {isSending ? (
                          <div className="h-5 w-5 border-t-2 border-r-2 border-white rounded-full animate-spin" />
                        ) : (
                          <BsArrowRight className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center p-6 text-center text-gray-500">
                <div>
                  <p>Select a conversation to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;