/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { UserContext } from '../../ContextProvider/UserContext';

// Ensure this line is called in your entry point file, such as index.js or App.js
Modal.setAppElement('#root');

const JobHistory = () => {
  const { assignedJobs, loading } = useContext(UserContext);
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

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="relative top-20 mt-10 p-6 bg-white rounded-lg shadow-lg lg:mx-6">
      <h1 className="font-semibold text-xl mb-4">All Jobs Histories</h1>
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr className="w-full bg-gray-200">
            <th className="font-bold p-4 border">Service Render</th>
            <th className="font-bold p-4 border">Scheduled date</th>
            <th className="font-bold p-4 border">Address</th>
            <th className="font-bold p-4 border">Service type</th>
            <th className="font-bold p-4 border">Special instruction</th>
            <th className="font-bold p-4 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {assignedJobs.map((job) => (
            <tr key={job._id} className="text-center">
              <td className="p-4 border">
                <button
                  className="text-blue-500 underline"
                  onClick={() =>
                    openModal({
                      title: 'Service Details',
                      content: (
                        <div>
                          <p>Service Name: {job.jobId.serviceId.serviceName}</p>
                          <p>Service Quantity: {job.jobId.serviceQuantity}</p>
                          <p>Order Type: {job.jobId.orderType}</p>
                          <p>Order Range: {job.jobId.orderRange}</p>
                        </div>
                      ),
                    })
                  }
                >
                  {job.jobId.serviceId.serviceName}
                </button>
              </td>
              <td className="p-4 border">
                {new Date(job.jobId.desireDate).toLocaleDateString()}
              </td>
              <td className="p-4 border">
                <button
                  className="text-blue-500 underline"
                  onClick={() =>
                    openModal({
                      title: 'Address Details',
                      content: (
                        <div>
                          <p>Street: {job.jobId.address.streetName}</p>
                          <p>City: {job.jobId.address.city}</p>
                          <p>Post Code: {job.jobId.address.postCode}</p>
                          <p>House Number: {job.jobId.address.houseNumber}</p>
                          <p>Building: {job.jobId.address.building}</p>
                          <p>Entrance Number: {job.jobId.address.entranceNumber}</p>
                          <p>Customer Name: {job.jobId.address.customerName}</p>
                          <p>Customer Phone: {job.jobId.address.customerPhoneNumber}</p>
                          <p>Customer Email: {job.jobId.address.customerEmail}</p>
                        </div>
                      ),
                    })
                  }
                >
                  Info
                </button>
              </td>
              <td className="p-4 border">{job.jobId.orderType}</td>
              <td className="p-4 border">{/* Special instructions here */}</td>
              <td className="p-4 border">
                <button
                  className={`text-white font-semibold px-2 rounded-md py-1 ${
                    job.status === 'completed' ? 'bg-blue-500' : 'bg-green-500'
                  }`}
                  onClick={() =>
                    job.status === 'completed' &&
                    openModal({
                      title: 'Job Feedback',
                      content: <p>{job.feedback}</p>,
                    })
                  }
                >
                  {job.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center p-4 z-50"
        overlayClassName="absolute inset-0 bg-gray-800 bg-opacity-50"
        contentLabel="Job Details Modal"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl mb-4">{modalContent.title}</h2>
          <div>{modalContent.content}</div>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default JobHistory;
