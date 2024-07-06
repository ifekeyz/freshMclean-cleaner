/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import DashboardTemp from './DashboardTemp'
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import MiniLoader from './preloader/mini-preloader';

function WelcomeDashboard() {
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomer()
  }, []);

  const fetchCustomer = async () => {
    const userId = sessionStorage.getItem("userId");
    if (userId) {
      axios.get(`https://klean-up-server-hz1y.onrender.com/v1/api/getAdmin/${userId}`)
        .then(response => {
          const customer = response.data.admin;
          setFullName(customer.name);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching customer data:", error);
          setLoading(false);
        });
    }
  }
  return (
    <>
        <div>
        {loading ? (
            <MiniLoader />
          ) : (
            <>
            <DashboardTemp InitNav={true} WelcomeText='Welcome' Color='#3DA5EC' tempColor='white' 
            ValueInText={75} 
            NavText={fullName} 
            showAdditionalDiv={true}/>
            </>
          )}
            <div>

            </div>
      </div>
    </>
  )
}

export default WelcomeDashboard
