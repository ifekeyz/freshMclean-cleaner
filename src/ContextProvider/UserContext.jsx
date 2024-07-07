/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const uid = sessionStorage.getItem("uid");
  const [userData, setUserData] = useState(null);
  const [assignedJobs, setAssignedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCleanerDetails = `https://klean-up-server-hz1y.onrender.com/v1/api/cleaners/${uid}`;
  const fetchAssignedJobs = `https://klean-up-server-hz1y.onrender.com/v1/api/getAssignedJobsForCleaner/${uid}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, jobsResponse] = await Promise.all([
          axios.get(fetchCleanerDetails),
          axios.get(fetchAssignedJobs)
        ]);
        setUserData(userResponse.data);
        setAssignedJobs(jobsResponse.data.assignJobs);
        // console.log(userResponse.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchCleanerDetails, fetchAssignedJobs]);

  return (
    <UserContext.Provider value={{ userData, assignedJobs, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
