import React from 'react';
import { useParams } from 'react-router-dom';
import { BsPersonCircle, BsGeoAlt, BsBuilding, BsPencil } from 'react-icons/bs';

const ProfilePage = () => {
  const { id } = useParams();
  
  // For now, just use sample data
  const profile = {
    firstName: 'Sarah',
    lastName: 'Johnson',
    headline: 'Founder & CEO at Women's Tech Collective | Empowering Female Entrepreneurs',
    bio: 'Passionate about creating opportunities for women in business and technology. After 15 years in Silicon Valley, I founded Women's Tech Collective to provide resources, mentorship, and funding opportunities specifically for female founders and entrepreneurs.',
    location: 'San Francisco, CA',
    industry: 'Technology',
    experience: [
      { 
        id: 1,
        title: 'Founder & CEO',
        company: 'Women's Tech Collective',
        duration: 'Jan 2019 - Present',
        description: 'Founded an organization dedicated to supporting women entrepreneurs in tech with mentorship, networking, and investment opportunities.'
      },
      {
        id: 2,
        title: 'VP of Product',
        company: 'TechCorp Inc.',
        duration: 'Mar 2015 - Dec 2018',
        description: 'Led product strategy and development for a SaaS platform with over 2M users.'
      },
      {
        id: 3,
        title: 'Senior Product Manager',
        company: 'InnovateTech',
        duration: 'Jun 2011 - Feb 2015',
        description: 'Managed the development and launch of multiple successful B2B products.'
      }
    ],
    education: [
      {
        id: 1,
        school: 'Stanford University',
        degree: 'MBA, Business Administration',
        years: '2009 - 2011'
      },
      {
        id: 2,
        school: 'University of California, Berkeley',
        degree: 'BS, Computer Science',
        years: '2005 - 2009'
      }
    ],
    skills: [
      'Business Strategy',
      'Product Management',
      'Entrepreneurship',
      'Venture Capital',
      'Women's Empowerment',
      'Public Speaking',
      'Mentorship',
      'Leadership'
    ],
    connectionCount: 843
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
        <div className="px-6 py-5 relative">
          <div className="absolute -top-16 left-6">
            <div className="h-32 w-32 rounded-full border-4 border-white bg-white overflow-hidden">
              <BsPersonCircle className="h-full w-full text-gray-300" />
            </div>
          </div>
          <div className="ml-36">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{profile.firstName} {profile.lastName}</h1>
                <p className="text-gray-600 mt-1">{profile.headline}</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <BsGeoAlt className="mr-1" />
                  <span>{profile.location}</span>
                  <span className="mx-2">•</span>
                  <BsBuilding className="mr-1" />
                  <span>{profile.industry}</span>
                </div>
                <p className="text-sm text-purple-600 mt-1">{profile.connectionCount} connections</p>
              </div>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer">
                <BsPencil className="mr-2" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* About */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="px-6 py-5">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
          <p className="text-gray-700">{profile.bio}</p>
        </div>
      </div>
      
      {/* Experience */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="px-6 py-5">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Experience</h2>
          <div className="space-y-5">
            {profile.experience.map(exp => (
              <div key={exp.id} className="border-b border-gray-200 pb-5 last:border-b-0 last:pb-0">
                <h3 className="text-lg font-medium text-gray-900">{exp.title}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.duration}</p>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Education */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="px-6 py-5">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
          <div className="space-y-5">
            {profile.education.map(edu => (
              <div key={edu.id} className="border-b border-gray-200 pb-5 last:border-b-0 last:pb-0">
                <h3 className="text-lg font-medium text-gray-900">{edu.school}</h3>
                <p className="text-gray-600">{edu.degree}</p>
                <p className="text-sm text-gray-500">{edu.years}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Skills */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="px-6 py-5">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;