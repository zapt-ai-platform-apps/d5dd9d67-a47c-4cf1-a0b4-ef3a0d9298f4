import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch, BsFilter, BsGeoAlt, BsBuilding, BsPeople, BsGlobe } from 'react-icons/bs';

const SAMPLE_COMPANIES = [
  {
    id: 'comp1',
    name: 'Women Tech Ventures',
    logo: null, // Placeholder for logo
    description: 'A venture capital firm focused on funding women-led tech startups. We provide early-stage funding, mentorship, and resources to help women entrepreneurs succeed.',
    industry: 'Venture Capital',
    size: '11-50 employees',
    location: 'San Francisco, CA',
    founder: 'Jessica Williams',
    website: 'www.womentechventures.com',
    founded: '2018'
  },
  {
    id: 'comp2',
    name: 'Green Beauty Co.',
    logo: null,
    description: 'Sustainable, eco-friendly beauty products created by women, for women. We use ethically sourced ingredients and environmentally responsible packaging.',
    industry: 'Cosmetics',
    size: '51-200 employees',
    location: 'Los Angeles, CA',
    founder: 'Michelle Chen',
    website: 'www.greenbeautyco.com',
    founded: '2015'
  },
  {
    id: 'comp3',
    name: 'Financial Feminists',
    logo: null,
    description: 'Financial advisory firm specializing in wealth management for women entrepreneurs and executives. We help women take control of their financial futures.',
    industry: 'Financial Services',
    size: '2-10 employees',
    location: 'New York, NY',
    founder: 'Samantha Rodriguez',
    website: 'www.financialfeminists.com',
    founded: '2019'
  },
  {
    id: 'comp4',
    name: 'TechWomen Academy',
    logo: null,
    description: 'Online education platform offering tech skills training designed specifically for women entering or advancing in the tech industry.',
    industry: 'Education',
    size: '11-50 employees',
    location: 'Seattle, WA',
    founder: 'Priya Patel',
    website: 'www.techwomenacademy.com',
    founded: '2020'
  },
  {
    id: 'comp5',
    name: 'Wellness Warriors',
    logo: null,
    description: 'Health and wellness company focused on holistic health solutions for busy women entrepreneurs. Products include supplements, digital wellness programs, and community support.',
    industry: 'Health & Wellness',
    size: '11-50 employees',
    location: 'Austin, TX',
    founder: 'Tanya Roberts',
    website: 'www.wellnesswarriors.com',
    founded: '2017'
  }
];

const INDUSTRIES = ['Venture Capital', 'Cosmetics', 'Financial Services', 'Education', 'Health & Wellness'];
const SIZES = ['1-10 employees', '11-50 employees', '51-200 employees', '201-500 employees', '501+ employees'];
const LOCATIONS = ['San Francisco, CA', 'Los Angeles, CA', 'New York, NY', 'Seattle, WA', 'Austin, TX'];

const CompaniesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  
  const filteredCompanies = SAMPLE_COMPANIES.filter(company => {
    const matchesSearch = searchTerm === '' || 
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesIndustry = industryFilter === '' || 
      company.industry === industryFilter;
      
    const matchesSize = sizeFilter === '' ||
      company.size === sizeFilter;
      
    const matchesLocation = locationFilter === '' ||
      company.location === locationFilter;
      
    return matchesSearch && matchesIndustry && matchesSize && matchesLocation;
  });
  
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Women-Owned Businesses</h1>
        <Link 
          to="/companies/new" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer"
        >
          Add Your Company
        </Link>
      </div>
      
      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BsSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm box-border"
              placeholder="Search companies"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center">
              <BsFilter className="mr-2 text-gray-500" />
              <span className="text-sm text-gray-500 mr-2">Filters:</span>
            </div>
            
            <select
              className="block pl-3 pr-10 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 box-border"
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
            >
              <option value="">All Industries</option>
              {INDUSTRIES.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
            
            <select
              className="block pl-3 pr-10 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 box-border"
              value={sizeFilter}
              onChange={(e) => setSizeFilter(e.target.value)}
            >
              <option value="">All Sizes</option>
              {SIZES.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            
            <select
              className="block pl-3 pr-10 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 box-border"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="">All Locations</option>
              {LOCATIONS.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Companies List */}
      <div className="space-y-6">
        {filteredCompanies.map(company => (
          <div key={company.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 h-16 w-16 bg-purple-100 rounded-md flex items-center justify-center">
                    {company.logo ? (
                      <img 
                        src={company.logo} 
                        alt={company.name} 
                        className="h-12 w-12 object-contain"
                      />
                    ) : (
                      <span className="text-lg font-bold text-purple-800">
                        {company.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{company.name}</h2>
                    <p className="text-sm text-gray-500">Founded by {company.founder} in {company.founded}</p>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex space-x-3">
                  <a 
                    href={`https://${company.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer"
                  >
                    Visit Website
                  </a>
                  <Link 
                    to={`/companies/${company.id}`}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
              
              <p className="mt-4 text-gray-700">{company.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-y-2 gap-x-4 text-sm">
                <div className="flex items-center text-gray-500">
                  <BsBuilding className="mr-1 h-4 w-4" />
                  <span>{company.industry}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <BsPeople className="mr-1 h-4 w-4" />
                  <span>{company.size}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <BsGeoAlt className="mr-1 h-4 w-4" />
                  <span>{company.location}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <BsGlobe className="mr-1 h-4 w-4" />
                  <span>{company.website}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {filteredCompanies.length === 0 && (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-500">No companies found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompaniesPage;