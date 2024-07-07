/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState, useContext } from "react";
// import React from 'react'
import Modal from "react-modal";
import Logo from "./Media/KleanUp.png";
import Profile from "./Media/profile.png";
import Notification from "./Media/notification.png";
import Home from "./Media/home.png";
import Cleaning from "./Media/cleaning.png";
import User from "./Media/user.png";
import Play from "./Media/play.png";
import Schedule from "./Media/schedule.png";
import Financial from "./Media/financial.png";
import Customer from "./Media/customer.png";
import Analytics from "./Media/analytics.png";
import Account from "./Media/account.png";
import Logout from "./Media/logout.png";
import { Link } from "react-router-dom";
import Planselector from "./Planselector";
import Calender from "./pages/Calendar";
import DropdownMenu from "./DropdownMenu";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../ContextProvider/UserContext";

import {
  faChevronDown,
  faXmark,
  faBars,
  faClose,
  faMagnifyingGlass,
  faArrowLeft,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MiniLoader from "./preloader/mini-preloader";
import Signup from "./SignupPage";
import ServiceForm from "./ServiceForm";
import ServiceUploading from "./ServiceUploading";
import Application from "./Application";
import JobHistory from "./pages/JobHistory";
import CalendarSetDay from "./pages/CalenderSetDay";

function DashboardTemp({
  showAdditionalDiv,
  showAdditionalDiv1,
  showAdditionalDiv2,
  showAdditionalDiv3,
  showAdditionalDiv4,
  showAdditionalDiv5,
  showAdditionalDiv6,
  showAdditionalDiv7,
  showAdditionalDiv8,
  showAdditionalDiv9,
  showAdditionalDiv10,
  showAdditionalDiv11,
  showAdditionalDiv12,
  showAdditionalDiv13,
  showAdditionalDiv14,
  showAdditionalDiv15,
  showAdditionalDiv16,
  showAdditionalDiv17,
  showAdditionalDiv18,
  showAdditionalDiv19,
  showAdditionalDiv20,
  showAdditionalDiv21,
  showAdditionalDiv22,
  WelcomeText,
  NavText,
  AltNav,
  InitNav,
  Color,
  tempColor,
  Color1,
  tempColor1,
  Color2,
  tempColor2,
  Color3,
  tempColor3,
  Color4,
  tempColor4,
  Color5,
  tempColor5,
  Color6,
  tempColor6,
  Color7,
  tempColor7,
  tempColor8,
  Color8,
  ValueInText,
  ValueInText1,
  ValueInText2,
  ValueInText3,
  ValueInText4,
  ValueInText5,
  ValueInText6,
  ValueInText7,
  ValueInText8,
  COLOR,
  opacityValue,
}) {
  const myCustomColor = "#FAFAFA";
  // const myCustomColor1 = "red";
  // const myCustomColor2 = "lightblue";
  const myCustomColor2 = "#019B23";
  const myCustomColor4 = "#3DA5EC";

  const [showScrollbar, setShowScrollbar] = useState(true);

  const { userData, assignedJobs } = useContext(UserContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent({});
  };


  const [openMenu, setOpenMenu] = useState(false);
  const [showCloseMenu, setShowCloseMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    setShowCloseMenu(!showCloseMenu);
  };

  const openMenuRef = useRef(null);
  // const menuIconRef = useRef(null);

  useEffect(() => {
    function clickOut(event) {
      if (openMenuRef.current && !openMenuRef.current.contains(event.target)) {
        setOpenMenu(false);
        setShowCloseMenu(false);
      }
    }
    document.addEventListener("mousedown", clickOut);
    return () => {
      document.removeEventListener("mousedown", clickOut);
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <div className={`overflow-x-hidden ${COLOR} opacity-${opacityValue}`}>
        <div className="fixed lg:block hidden">
          <div
            className="w-80 h-screen-3 pb-20 absolute   bg-white "
            // style={{ backgroundColor: myCustomColor1 }}
          >
            <img
              className="h-8 w-28 ml-14 mt-12 relative -top-5 object-contain"
              src={Logo}
            />

            <div
              className={`ml-10 mt-4 overflow-y-scroll overflow-x-hidden ${
                showScrollbar ? "" : "overflow-hidden"
              }`}
            >
              <div className="text-gray-500"></div>
              <div className="text-gray-500 pt-3">
                <Link to="/CleaningRequest">
                  <img
                    src={Account}
                    className="w-1/12 h- relative top-6 left-4 filter brightness-75 saturate-125"
                    style={{
                      filter: `saturate(1.25) brightness(${ValueInText1})`,
                    }}
                  />
                  <a
                    href=""
                    className="p-2 pl-11 px-20  py-3 whitespace-nowrap rounded-l-xl"
                    style={{ backgroundColor: Color1, color: tempColor1 }}
                  >
                    Profile Management
                  </a>
                </Link>
              </div>
              <div className="text-gray-500 pt-3">
                <Link to="/UserManagement">
                  <img
                    src={Analytics}
                    className="w-1/12 h- relative top-6 left-4 filter brightness-75 saturate-125"
                    style={{
                      filter: `saturate(1.25) brightness(${ValueInText2})`,
                    }}
                  />
                  <a
                    href=""
                    className="p-2 pl-10 px-28 py-3 whitespace-nowrap rounded-l-xl"
                    style={{ backgroundColor: Color2, color: tempColor2 }}
                  >
                    Scheduling & Management
                  </a>
                </Link>
              </div>
              <div className="text-gray-500 pt-3">
                <Link to="/Service">
                  <img
                    src={Cleaning}
                    className="w-1/12 h- relative top-6 left-4 filter brightness-75 saturate-125"
                    style={{
                      filter: `saturate(1.25) brightness(${ValueInText6})`,
                    }}
                  />
                  <a
                    href=""
                    className="p-2 pl-10 px-28 py-3 whitespace-nowrap rounded-l-xl"
                    style={{ backgroundColor: Color6, color: tempColor6 }}
                  >
                    Training and Resources
                  </a>
                </Link>
              </div>
              <div className="text-gray-500 pt-3">
                <Link to="/ServiceCategory">
                  <img
                    src={Financial}
                    className="w-1/12 h- relative top-6 left-4 filter brightness-75 saturate-125"
                    style={{
                      filter: `saturate(1.25) brightness(${ValueInText8})`,
                    }}
                  />
                  <a
                    href=""
                    className="p-2 pl-10 px-28 py-3 whitespace-nowrap rounded-l-xl"
                    style={{ backgroundColor: Color8, color: tempColor8 }}
                  >
                    Communication Tools
                  </a>
                </Link>
              </div>
              <div className="text-gray-500 pt-3">
                <Link to="/ScheduleOverview">
                  <img
                    src={Schedule}
                    className="w-1/12 h- relative top-6 left-4 filter brightness-75 saturate-125"
                    style={{
                      filter: `saturate(1.25) brightness(${ValueInText3})`,
                    }}
                  />
                  <a
                    href=""
                    className="p-2 pl-11 px-40 py-3 whitespace-nowrap rounded-l-xl"
                    style={{ backgroundColor: Color3, color: tempColor3 }}
                  >
                    Document Management
                  </a>
                </Link>
              </div>
              <div className="text-gray-500 pt-3">
                <Link to="/FinancialManagement">
                  <img
                    src={Financial}
                    className="w-1/12 h- relative top-6 left-3 filter brightness-75 saturate-125"
                    style={{
                      filter: `saturate(1.25) brightness(${ValueInText4})`,
                    }}
                  />
                  <a
                    href=""
                    className="p-2 pl-11 px-20 py-3 whitespace-nowrap rounded-l-xl"
                    style={{ backgroundColor: Color4, color: tempColor4 }}
                  >
                    Support and Help Desk
                  </a>
                </Link>
              </div>

              <div className="relative -pb-10 top-10 w-64 left-3 ">
                <Link to="/LogoutConfirmation">
                  <img
                    src={Logout}
                    className="w-1/12 h- relative z-10 left-12 filter brightness-75 saturate-125"
                    style={{ top: "25px" }}
                  />
                  <a
                    href=""
                    className="p-2 pl-20 text-center font-semibold relative top-30 px-20 py-3 whitespace-nowrap rounded-xl"
                    style={{ backgroundColor: myCustomColor }}
                  >
                    Logout
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="ml-1/3 z-50 bg-white lg:left-80 fixed lg:h-16 h-40 p-4 lg:p-7 lg:pt-3  w-screen "
          // style={{ backgroundColor: myCustomColor1 }}
        >
          {/* Toogle Menu start */}
          <div className="relative lg:hidden z-40 ">
            {showCloseMenu ? (
              <FontAwesomeIcon
                className="text-black h-6 z-10"
                icon={faClose}
                onClick={toggleMenu}
              />
            ) : (
              <FontAwesomeIcon
                className="text-black h-6 z-20"
                icon={faBars}
                onClick={toggleMenu}
              />
            )}
            {openMenu && (
              <div
                className="fixed top-0 left-0 w-[100%] h-[100%] bg-black opacity-70   via-transparent from-gray-100 to-gray-100"
                onClick={toggleMenu}
              />
            )}
            <div className="z-10 absolute right-40 md:right-[70%]">
              {openMenu && <DropdownMenu />}
            </div>
          </div>
          {/* Toogle Menu end */}
          {InitNav && (
            <div className="relative lg:-top-1 top-10 right-4 ml-5">
              <p>{WelcomeText}</p>
              <h1 className="font-semibold text-lg">{NavText}</h1>
            </div>
          )}
          {AltNav && (
            <div className="relative lg:-top-1 top-20 right-4 ml-5">
              <p>{WelcomeText}</p>
              <h1 className="font-semibold text-lg mt-6 -top-6 -ml-1 lg:-ml-0 lg:-top-3 relative">
                {NavText}
              </h1>
            </div>
          )}
          <img
            className="lg:hidden h-8 w-20 ml-16 mt-12 relative md:ml-20 -top-32 right-9 object-contain"
            src={Logo}
          />

          
        </nav>
       
        {showAdditionalDiv1 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6 ">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <Link to="/CleaningRequest">
                  <p className="cursor-pointer px-5 rounded-md py-2 relative -top-2 bg-white">
                    Profile Management
                  </p>
                </Link>
                <Link to="/UpcomingSchedule">
                  <p className="cursor-pointer text-gray-400">Job History</p>
                </Link>
              </div>
            </div>
            {userData?<>
            <div className="bg-white min-h-screen lg:w-full overflow-x-scroll p-6 pt-12 relative top-36">
              <section className="mb-8">
                <h2 className="font-semibold text-md mb-4">Personal Details</h2>
                <div className="flex flex-wrap px-20 mr-10">
                  <p className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <strong>Full Name:</strong> {userData.fullname}
                  </p>
                  <p className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <strong>Email:</strong> {userData.email}
                  </p>
                  <p className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <strong>Employee Number:</strong> {userData.employeeNumber}
                  </p>
                  <p className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <strong>Security Number:</strong>{" "}
                    {userData.personalDetails.socialSecurityNumber}
                  </p>
                  <p className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <strong>Phone Number:</strong>{" "}
                    {userData.contactInformation.phoneNumber}
                  </p>
                  <p className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <strong>Address:</strong>{" "}
                    {userData.contactInformation.homeAddress}
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="font-semibold text-md mb-4">
                  Emergency Contacts
                </h2>
                <div className="flex flex-wrap mb-4 px-20 py-4 mr-10 border rounded-md">
                  <p className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <strong>Name:</strong> {userData.emergencyContact.fullName}
                  </p>
                  <p className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <strong>Email:</strong> {userData.emergencyContact.fullName}
                  </p>
                  <p className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <strong>Home Address:</strong>{" "}
                    {userData.emergencyContact.fullName}
                  </p>
                  <p className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <strong>Phone Number:</strong>{" "}
                    {userData.emergencyContact.phoneNumber}
                  </p>
                </div>
              </section>
            </div>
            </>:
            <></>
            }
          </div>
        )}
        {showAdditionalDiv3 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 text-sm">
                <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                Get Shift Calendar
                </p>

                <Link to="/CleanersAccount">
                  <p className="cursor-pointer px-5  text-gray-400 ">
                    Calender Availabity
                  </p>
                </Link>
               
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7 lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <Calender />
            </div>
          </div>
        )}
        {showAdditionalDiv10 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80"
            style={{ backgroundColor: myCustomColor }}
          >
              <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 text-sm">
                <Link to="/UserManagement">
                <p className="cursor-pointer px-5  text-gray-400 ">
                Shift Calendar
                </p>
                </Link>
                  <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                  Set Calender Availabity
                  </p>
               
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7 lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <CalendarSetDay />
            </div>
          </div>
        )}
        {showAdditionalDiv11 && (
          <div className="w-2/5 h-screen-1 bg-white p-8 z-50 top-0 absolute left-1/2 ml-32 rounded-lg"></div>
        )}
        {showAdditionalDiv12 && (
          <div className="w-2/5 h-screen-1 bg-white p-8 z-50 top-0 absolute left-1/2 ml-32 rounded-lg"></div>
        )}
        {showAdditionalDiv9 && (
          <div className="w-2/5 h-screen-1 bg-white p-8 z-50 top-0 absolute left-1/2 ml-32 rounded-lg">
            <div className="flex space-x-12 mb-10"></div>
          </div>
        )}

        {showAdditionalDiv7 && (
          <div
            className="lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 py-2 rounded-lg left-4 cursor-pointer">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <Link to="/CleaningRequest">
                  <p className="cursor-pointer text-gray-400">
                    Profile Management
                  </p>
                </Link>
                <Link to="/UpcomingSchedule">
                  <p className="cursor-pointer px-5 rounded-md py-2 relative -top-2 bg-white">
                    Job History
                  </p>
                </Link>
              </div>
            </div>
            <JobHistory />
          </div>
        )}
        {showAdditionalDiv8 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <Link to="/CleaningRequest"></Link>
              <Link to="/PendingRequest"></Link>
              <Link to="/UpcomingSchedule"></Link>
              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <Link to="/CleaningRequest">
                  <p className="cursor-pointer text-gray-400">
                    Completed requests
                  </p>
                </Link>
                <Link to="/PendingRequest">
                  <p className="cursor-pointer text-gray-400">
                    Pending requests{" "}
                    {/* <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                      5
                    </span> */}
                  </p>
                </Link>
                <Link to="/UpcomingSchedule">
                  <p className="cursor-pointer text-gray-400">
                    Upcoming schedule cleaning
                  </p>
                </Link>
              </div>
            </div>
          </div>
        )}

        {showAdditionalDiv13 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                  Overview
                </p>
                <p className="cursor-pointer px-5  text-gray-400 ">
                  Assign Duties
                </p>
                <p className="cursor-pointer text-gray-400 text-center  px-8 py-3 relative -mt-3 right-8 font-semibold rounded-lg">
                  Completed Duties
                </p>
              </div>
            </div>
            {/* availableJobs */}
            <div className="bg-white h-screen-3 mr-7 lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Available jobs</h1>
              <div className="text-sm relative -left-3"></div>
            </div>
          </div>
        )}

        {showAdditionalDiv14 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6 ">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 ">
                <p className="cursor-pointer px-5  text-gray-400 ">
                  Assign Jobs
                </p>
                <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                  Monitor Job status
                </p>
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Ongoing Jobs</h1>
            </div>
          </div>
        )}

        {showAdditionalDiv15 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <Link to="/FinancialManagement">
                  <p className="cursor-pointer px-5 rounded-md py-2 relative -top-2 bg-white">
                    Pricing
                  </p>
                </Link>
                <Link to="/Invoices">
                  <p className="cursor-pointer text-gray-400">Add pricing</p>
                </Link>
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">All pricing</h1>

              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4 w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <div className="w-screen-3 lg:left-10 pl-4 pt-9 relative -40">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showAdditionalDiv6 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <Link to="/Service">
                  <p className="cursor-pointer px-5 rounded-md py-2 relative -top-2 bg-white">
                    Services
                  </p>
                </Link>
                <Link to="/ServiceAdd">
                  <p className="cursor-pointer text-gray-400">Add Services</p>
                </Link>
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">All services</h1>

              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4 w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <div className="w-screen-3 lg:left-10 pl-4 pt-9 relative -40">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        {showAdditionalDiv5 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <Link to="/Service">
                  <p className="cursor-pointer px-5 rounded-md py-2 relative -top-2 bg-white">
                    Services
                  </p>
                </Link>
                <Link to="/ServiceAdd">
                  <p className="cursor-pointer text-gray-400">Add Services</p>
                </Link>
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">All services</h1>

              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4 w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <ServiceUploading />
              </div>
            </div>
          </div>
        )}

        {showAdditionalDiv17 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6 ">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <Link to="/FinancialManagement">
                  <p className="cursor-pointer text-gray-400">Pricing</p>
                </Link>
                <Link to="/Invoices">
                  <p className="cursor-pointer px-5 rounded-md py-2 relative -top-2 bg-white">
                    Add pricing{" "}
                  </p>
                </Link>
              </div>
            </div>

            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Create new price </h1>
              <div className="container mx-auto mt-9"></div>
            </div>
          </div>
        )}

        {showAdditionalDiv18 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 text-sm">
                <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                  Customer inquiries
                </p>

                <Link to="/ComplaintResolution">
                  <p className="cursor-pointer px-5  text-gray-400 ">
                    Complaint resolution{" "}
                  </p>
                </Link>
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Customer inquiries</h1>
              <div
                className="flex mt-9 space-x-52 relative font-semibold py-3 px-4 w-screen-4  md:w-screen-5  lg:w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Client Name</p>
                <p className="whitespace-nowrap relative -left-20">
                  Inquiry ID
                </p>
                <p className="relative -left-44 whitespace-nowrap">
                  Date of inquiry
                </p>

                <p className="whitespace-nowrap relative right-44">Action</p>
              </div>
            </div>
          </div>
        )}

        {showAdditionalDiv19 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <Link to="/CustomerSupport">
                  <p className="cursor-pointer px-5  text-gray-400 ">
                    Customer inquiries
                  </p>
                </Link>

                <Link to="/CleanersAccount">
                  <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                    Complaint resolution{" "}
                  </p>
                </Link>
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Customer inquiries</h1>
            </div>
          </div>
        )}
        {showAdditionalDiv16 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 text-sm">
                {/* <p  className="cursor-pointer px-5  text-gray-400 ">
                  Customer inquiries
                </p> */}

                <Link to="/CleanerApplication"></Link>
              </div>
            </div>
            <Application />
          </div>
        )}
        {showAdditionalDiv21 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 h-60 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm">
                <Link to="/ServiceCategory">
                  <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                    service category{" "}
                    <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                      0
                    </span>
                  </p>
                </Link>
                <Link to="/NewService">
                  <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                    create new service category{" "}
                    {/* <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                  5
                </span> */}
                  </p>
                </Link>
              </div>
            </div>
            <div className="w-screen-3 lg:left-10 pl-4 pt-9 relative -40">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"></div>
            </div>
          </div>
        )}
        {showAdditionalDiv20 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 h-60 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm">
                <Link to="/ServiceCategory">
                  <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                    service category{" "}
                    <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                      0
                    </span>
                  </p>
                </Link>
                <Link to="/NewService">
                  <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                    create new service category{" "}
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex mt-10">
              <ServiceForm />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DashboardTemp;
