/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const JobDetailsView = ({ setShowDetails, jobDetails }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-4 rounded-md" style={{ width: "500px" }}>
        <div className="flex justify-between items-center text-dark p-2 rounded-t-md mb-4">
          <h2 className="font-semibold">JOB DETAILS</h2>
          <button onClick={() => setShowDetails(false)} className="text-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <section>
          <table className="w-full text-left mb-5">
            <thead className="border bg-gray-50">
              <tr>
                <th className="p-2 text-sm">Field</th>
                <th className="p-2 text-sm">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border text-sm">Service Name</td>
                <td className="p-2 border text-sm">{jobDetails.jobId.serviceId.serviceName}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Service Quantity</td>
                <td className="p-2 border text-sm">{jobDetails.jobId.serviceQuantity}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Order Type</td>
                <td className="p-2 border text-sm">{jobDetails.jobId.orderType}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Order Range</td>
                <td className="p-2 border text-sm">{jobDetails.jobId.orderRange}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Scheduled Date</td>
                <td className="p-2 border text-sm">{new Date(jobDetails.jobId.desireDate).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Address</td>
                <td className="p-2 border text-sm">{jobDetails.jobId.address.streetName}, {jobDetails.jobId.address.city}, {jobDetails.jobId.address.postCode}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Customer</td>
                <td className="p-2 border text-sm">{jobDetails.jobId.address.customerName}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Customer Phone</td>
                <td className="p-2 border text-sm">{jobDetails.jobId.address.customerPhoneNumber}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Customer Email</td>
                <td className="p-2 border text-sm">{jobDetails.jobId.address.customerEmail}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Status</td>
                <td className="p-2 border text-sm">{jobDetails.status}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Feedback</td>
                <td className="p-2 border text-sm">{jobDetails.feedback}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <div>
          <button
            type="button"
            className="p-2 rounded-lg text-sm text-white bg-secondary hover:bg-green-700"
          >
            View Job Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsView;
