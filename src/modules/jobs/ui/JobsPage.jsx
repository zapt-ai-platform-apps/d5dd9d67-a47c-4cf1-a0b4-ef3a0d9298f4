import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch, BsFilter, BsGeoAlt, BsBuilding, BsClock, BsCurrencyDollar } from 'react-icons/bs';

const SAMPLE_JOBS = [
  {
    id: 'job1',
    title: 'Marketing Director',
    company: {
      id: 'comp2',
      name: 'Green Beauty Co.',
      logo: null
    },
    location: 'Los Angeles, CA',
    jobType: 'full-time',
    salaryRange: '$120K - $150K',
    description: 'Green Beauty Co. is looking for an experienced Marketing Director to lead our marketing team and develop strategic campaigns for our sustainable beauty products. You'll work directly with the founder to shape our brand message and drive customer acquisition.',
    requirements: [
      'Minimum 5 years experience in beauty or consumer products marketing',
      'Experience leading teams of 3+ marketers',
      'Proven success with digital marketing strategies',
      'Passion for sustainability and women's empowerment'
    ],
    postedDate: '2 days ago',
    isRemote: true
  },
  {
    id: 'job2',
    title: 'Investment Analyst',
    company: {
      id: 'comp1',
      name: 'Women Tech Ventures',
      logo: null
    },
    location: 'San Francisco, CA',
    jobType: 'full-time',
    salaryRange: '$90K - $110K',
    description: 'Join our team at Women Tech Ventures to help identify promising women-led startups for investment. You'll perform due diligence, market research, and build financial models to support our investment decisions.',
    requirements: [
      'Bachelor's degree in Finance, Business, or related field',
      '2+ years experience in venture capital or investment banking',
      'Strong analytical and financial modeling skills',
      'Passion for supporting women entrepreneurs'
    ],
    postedDate: '1 week ago',
    isRemote: false
  },
  {
    id: 'job3',
    title: 'UI/UX Designer',
    company: {
      id: 'comp4',
      name: 'TechWomen Academy',
      logo: null
    },
    location: 'Seattle, WA',
    jobType: 'contract',
    salaryRange: '$80 - $100/hour',
    description: 'TechWomen Academy is seeking a UI/UX Designer to help us create engaging, intuitive learning experiences for our online education platform focused on tech skills for women.',
    requirements: [
      '3+ years of UI/UX design experience',
      'Experience with educational products or e-learning platforms preferred',
      'Strong portfolio demonstrating user-centered design approach',
      'Familiarity with design tools like Figma, Sketch, or Adobe XD'
    ],
    postedDate: '3 days ago',
    isRemote: true
  },
  {
    id: 'job4',
    title: 'Content Marketing Manager',
    company: {
      id: 'comp3',
      name: 'Financial Feminists',
      logo: null
    },
    location: 'New York, NY',
    jobType: 'full-time',
    salaryRange: '$85K - $105K',
    description: 'Financial Feminists is looking for a Content Marketing Manager to create educational content that helps women take control of their finances. You'll develop blog posts, newsletters, podcasts, and social media content.',
    requirements: [
      '3+ years of content marketing experience',
      'Strong writing and editing skills',
      'Experience creating financial or educational content',
      'Understanding of SEO and content strategy'
    ],
    postedDate: '5 days ago',
    isRemote: true
  },
  {
    id: 'job5',
    title: 'Product Manager',
    company: {
      id: 'comp5',
      name: 'Wellness Warriors',
      logo: null
    },
    location: 'Austin, TX',
    jobType: 'full-time',
    salaryRange: '$100K - $130K',
    description: 'Wellness Warriors is seeking a Product Manager to lead the development of our digital wellness programs for women entrepreneurs. You'll work with cross-functional teams to define product strategy and roadmap.',
    requirements: [
      'Minimum 4 years of product management experience',
      'Experience with health/wellness products preferred',
      'Strong analytical and problem-solving skills',
      'Excellent communication and leadership abilities'
    ],
    postedDate: '1 week ago',
    isRemote: false
  }
];

const JOB_TYPES = ['full-time', 'part-time', 'contract', 'freelance', 'internship'];
const LOCATIONS = ['San Francisco, CA', 'Los Angeles, CA', 'New York, NY', 'Seattle, WA', 'Austin, TX'];

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [remoteFilter, setRemoteFilter] = useState(false);
  
  const filteredJobs = SAMPLE_JOBS.filter(job => {
    const matchesSearch = searchTerm === '' || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesJobType = jobTypeFilter === '' || 
      job.jobType === jobTypeFilter;
      
    const matchesLocation = locationFilter === '' ||
      job.location === locationFilter;
      
    const matchesRemote = !remoteFilter || job.isRemote;
      
    return matchesSearch && matchesJobType && matchesLocation && matchesRemote;
  });
  
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Business Opportunities</h1>
        <Link 
          to="/jobs/post" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer"
        >
          Post a Job
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
              placeholder="Search jobs by title, company, or keyword"
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
              value={jobTypeFilter}
              onChange={(e) => setJobTypeFilter(e.target.value)}
            >
              <option value="">All Job Types</option>
              {JOB_TYPES.map(type => (
                <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
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
            
            <div className="flex items-center">
              <input
                id="remote-filter"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                checked={remoteFilter}
                onChange={(e) => setRemoteFilter(e.target.checked)}
              />
              <label htmlFor="remote-filter" className="ml-2 block text-sm text-gray-700">
                Remote only
              </label>
            </div>
          </div>
        </div>
      </div>
      
      {/* Jobs List */}
      <div className="space-y-6">
        {filteredJobs.map(job => (
          <div key={job.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-md flex items-center justify-center">
                    {job.company.logo ? (
                      <img 
                        src={job.company.logo} 
                        alt={job.company.name} 
                        className="h-8 w-8 object-contain"
                      />
                    ) : (
                      <span className="text-lg font-bold text-purple-800">
                        {job.company.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                    <p className="text-sm text-gray-600">{job.company.name}</p>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {job.postedDate}
                  </span>
                  {job.isRemote && (
                    <span className="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Remote
                    </span>
                  )}
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-y-2 gap-x-4 text-sm">
                <div className="flex items-center text-gray-500">
                  <BsGeoAlt className="mr-1 h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <BsClock className="mr-1 h-4 w-4" />
                  <span>{job.jobType.charAt(0).toUpperCase() + job.jobType.slice(1)}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <BsCurrencyDollar className="mr-1 h-4 w-4" />
                  <span>{job.salaryRange}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <BsBuilding className="mr-1 h-4 w-4" />
                  <Link to={`/companies/${job.company.id}`} className="text-purple-600 hover:text-purple-800">
                    View Company
                  </Link>
                </div>
              </div>
              
              <p className="mt-4 text-gray-700">{job.description}</p>
              
              <h3 className="mt-4 font-medium text-gray-900">Requirements:</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              
              <div className="mt-6">
                <Link
                  to={`/jobs/${job.id}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {filteredJobs.length === 0 && (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-500">No jobs found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsPage;