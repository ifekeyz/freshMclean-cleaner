/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import Logo from "./Media/KleanUp.png";
import Gmail from "./Media/gmail.png";
import Google from "./Media/google.png";
import Facebook from "./Media/facebook.png";
import AuthTemplate from "./AuthTemplate.jsx";
import { Link,useNavigate } from "react-router-dom";
// import GoogleLoginButton from './GoogleLoginButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import MiniLoader from './preloader/mini-preloader';

function HelloAdmin() {
  const myCustomColor = "#3DA5EC";

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login successful', response);
    // Handle user data or authentication token
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed', error);
  };

  const history = useNavigate();


  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.email || !formData.password) {
      toast.error('Please enter both email and password.');
      setLoading(false);
      return;
    }


    try {
      const response = await axios.post('https://klean-up-server-hz1y.onrender.com/v1/api/cleaner/login', formData);
      if (response.status === 200) {
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('uid', response.data.uid);
      }
      console.log('Login successful:', response.data);
      toast.success('Login successful!');
      setTimeout(() => {
        history('/CleaningRequest');
      }, 1000);

    } catch (error) {
      console.error('Login failed:', error);
      toast.error(error.response.data.message || 'Login failed. Please try again later.');
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      {/* <AuthTemplate /> */}
      <ToastContainer />
      <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="relative lg:top-5 h-30 w-[90%] lg:w-[40%] p-8 rounded-3xl lg:rounded-md bg-gray-100">
          <div className="z-50 mb-8">
            <img className="h-12 w-24 object-contain" src={Logo} alt="Logo" />
            <Link to="/CleanerApplication">
              <button className="w-32 h-10 bg-gray-300 font-semibold text-black float-right rounded-md p-2">
                Application
              </button>
            </Link>
          </div>
          <p className='mb-8 text-center font-semibold'>Cleaner Portal</p>
          <div className="bg-white border-gray-500 border-opacity-10 border-2 rounded-md p-8">
            <div className="mb-8">
              <label className="font-semibold">Username</label>
              <input
                type="email"
                className="block w-full p-2 lg:p-4 border mt-2 border-gray-400 rounded-lg bg-gray-50 placeholder:text-black"
                placeholder="piersmorgan@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-8">
              <label className="font-semibold">Password</label>
              <input
                type="password"
                className="block w-full p-2 lg:p-4 border mt-2 border-gray-400 rounded-lg bg-gray-50 placeholder:text-black"
                placeholder="********"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <sub className="font-normal">Forgot password?</sub>
            </div>
            <button
              className="w-full h-10 py-3 font-semibold text-white rounded-md"
              style={{ backgroundColor: myCustomColor }}
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? <MiniLoader /> : 'Signin'}
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default HelloAdmin;
