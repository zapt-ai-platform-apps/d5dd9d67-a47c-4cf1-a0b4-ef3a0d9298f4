import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPersonCircle, BsSearch, BsFilter } from 'react-icons/bs';

const SAMPLE_CONNECTIONS = [
  {
    id: 'conn1',
    name: 'Aisha Johnson',
    role: 'Tech Entrepreneur',
    industry: 'Technology',
    location: 'San Francisco, CA',
    mutual: 12
  },
  {
    id: 'conn2',
    name: 'Priya Patel',
    role: 'E-commerce Specialist',
    industry: 'Retail',
    location: 'New York, NY',
    mutual: 8
  },
  {
    id: 'conn3',
    name: 'Laura Martinez',
    role: 'Sustainable Fashion Designer',
    industry: 'Fashion',
    location: 'Los Angeles, CA',
    mutual: 5
  },
  {
    id: 'conn4',
    name: 'Mei Wong',
    role: 'Marketing Director',
    industry: 'Marketing',
    location: 'Chicago, IL',
    mutual: 15
  },
  {
    id: 'conn5',
    name: 'Tanya Roberts',
    role: 'Financial Advisor',
    industry: 'Finance',
    location: 'Boston, MA',
    mutual: 7
  },
  {
    id: 'conn6',
    name: 'Zara Hassan',
    role: 'Healthcare Entrepreneur',
    industry: 'Healthcare',
    location: 'Austin, TX',
    mutual: 3
  }
];

const INVITATIONS = [
  {
    id: 'inv1',
    name: 'Rebecca Chen',
    role: 'Venture Capitalist',
    mutual: 18,
    date: '3 days ago'
  },
  {
    id: 'inv2',
    name: 'Olivia Smith',
    role: 'Nonprofit Director',
    mutual: 5,
    date: '1 week ago'
  }
];

const NetworkPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [activeTab, setActiveTab] = useState('connections');
  const [pendingActions, setPendingActions] = useState({});
  
  const handleInvitationAction = (invitationId, action) => {
    if (pendingActions[invitationId]) return;
    
    // Set this invitation as having a pending action
    setPendingActions(prev => ({
      ...prev,
      [invitationId]: action
    }));
    
    // Simulate API call
    setTimeout(() => {
      console.log(`Invitation ${invitationId} ${action === 'accept' ? 'accepted' : 'rejected'}`);
      // In a real app, we would update the UI based on API response
      setPendingActions(prev => {
        const newPending = {...prev};
        delete newPending[invitationId];
        return newPending;
      });
    }, 1000);
  };
  
  const filteredConnections = SAMPLE_CONNECTIONS.filter(connection => {
    const matchesSearch = searchTerm === '' || 
      connection.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      connection.role.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesIndustry = industryFilter === '' || 
      connection.industry === industryFilter;
      
    return matchesSearch && matchesIndustry;
  });
  
  const industries = [...new Set(SAMPLE_CONNECTIONS.map(conn => conn.industry))];
  
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Network</h1>
      
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex">
          <button
            onClick={() => setActiveTab('connections')}
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === 'connections'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } cursor-pointer`}
          >
            Connections
          </button>
          <button
            onClick={() => setActiveTab('invitations')}
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === 'invitations'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } cursor-pointer`}
          >
            Invitations
            {INVITATIONS.length > 0 && (
              <span className="ml-2 bg-purple-100 text-purple-800 py-0.5 px-2 rounded-full text-xs">
                {INVITATIONS.length}
              </span>
            )}
          </button>
        </nav>
      </div>
      
      {activeTab === 'connections' ? (
        <>
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BsSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm box-border"
                placeholder="Search connections"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex space-x-2 items-center">
              <div className="flex items-center">
                <BsFilter className="mr-2 text-gray-500" />
                <span className="text-sm text-gray-500">Industry:</span>
              </div>
              <select
                className="block w-full md:w-auto pl-3 pr-10 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 box-border"
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
              >
                <option value="">All Industries</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Connections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConnections.map(connection => (
              <div key={connection.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <BsPersonCircle className="h-12 w-12 text-gray-400" />
                    </div>
                    <div>
                      <Link to={`/profile/${connection.id}`} className="text-lg font-medium text-gray-900 hover:underline">
                        {connection.name}
                      </Link>
                      <p className="text-sm text-gray-600">{connection.role}</p>
                      <p className="text-xs text-gray-500 mt-1">{connection.location}</p>
                      <p className="text-xs text-gray-500">{connection.mutual} mutual connections</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex space-x-3">
                    <button className="flex-1 inline-flex justify-center items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer">
                      Message
                    </button>
                    <button className="flex-1 inline-flex justify-center items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredConnections.length === 0 && (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-500">No connections found matching your search criteria.</p>
            </div>
          )}
        </>
      ) : (
        <>
          {/* Invitations List */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Pending Invitations</h2>
            </div>
            
            {INVITATIONS.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {INVITATIONS.map(invitation => (
                  <li key={invitation.id} className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <BsPersonCircle className="h-12 w-12 text-gray-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{invitation.name}</h3>
                          <p className="text-sm text-gray-600">{invitation.role}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {invitation.mutual} mutual connections • Sent {invitation.date}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleInvitationAction(invitation.id, 'accept')}
                          disabled={!!pendingActions[invitation.id]}
                          className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                            pendingActions[invitation.id] === 'accept' 
                              ? 'bg-purple-300' 
                              : 'bg-purple-600 hover:bg-purple-700'
                          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer`}
                        >
                          {pendingActions[invitation.id] === 'accept' ? 'Accepting...' : 'Accept'}
                        </button>
                        <button
                          onClick={() => handleInvitationAction(invitation.id, 'reject')}
                          disabled={!!pendingActions[invitation.id]}
                          className={`inline-flex items-center px-4 py-2 border ${
                            pendingActions[invitation.id] === 'reject'
                              ? 'border-gray-200 text-gray-400'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          } text-sm font-medium rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer`}
                        >
                          {pendingActions[invitation.id] === 'reject' ? 'Rejecting...' : 'Ignore'}
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500">You don't have any pending invitations at the moment.</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default NetworkPage;