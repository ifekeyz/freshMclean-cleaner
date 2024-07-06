/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Application = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('https://klean-up-server-hz1y.onrender.com/v1/api/cleaners');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cleaner Applications</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {applications.map((app) => (
          <div key={app._id} className="bg-white shadow-lg rounded-lg p-4 w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-2">{app.fullname}</h2>
            <p className="text-gray-600 mb-1"><strong>Email:</strong> {app.email}</p>
            <p className="text-gray-600 mb-1"><strong>Status:</strong> {app.status}</p>
            <p className="text-gray-600 mb-1"><strong>Cover Letter:</strong> {app.coverLetter}</p>
            <a href={app.resume} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Resume
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Application;
