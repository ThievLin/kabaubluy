import React from 'react';

const PartnerStorePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-2xl font-bold text-center mb-12">Become Our Partner Store</h1>
      <div className="flex flex-col md:flex-row max-w-[90%] w-full mx-auto">
        {/* Left Section for Benefits Text */}
        <div className="flex-1 lg:w-3/5 p-4 text-lg">
          <p className="mb-4">
            As your digital wallet partner, KBL will help your business grow by receiving the following benefits:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-4">
            <li>Increase your store&apos;s sales online by giving your customers an excellent experience for in-app purchases and payments, helping them to save more.</li>
            <li>Grow your digital presence to increase your store brand awareness.</li>
            <li>Attract potential customers from our customer pool to your store by offering attractive rewards and discounts.</li>
            <li>Retain your most loyal customers via your customised loyalty program and rewards offers.</li>
            <li>Build trust with your customers via our in-app experiences, advertisements, support channels, announcements, and special promotions.</li>
            <li>Monitor your sales performance in real time.</li>
          </ul>
        </div>

        {/* Right Section for Form */}
        <form className="bg-white p-8 rounded-lg shadow-md flex-1 lg:w-2/5 m-4">
          <h2 className="text-2xl font-semibold mb-4">Please fill out the form below:</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Shop Name *</label>
              <input type="text" required className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Shop Address *</label>
              <input type="text" required className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Shop Location (Google Map Link) *</label>
              <input type="url" required className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Your Full Name *</label>
              <input type="text" required className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Your Mobile Number *</label>
              <input type="tel" required className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">ABA Account Name *</label>
              <input type="text" required className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">ABA Account Number *</label>
              <input type="text" required className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Menu & Price *</label>
              <input type="file" className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Shop Front Image *</label>
              <input type="file" required className="border border-gray-300 p-2 rounded w-full" />
            </div>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Please submit here
          </button>
        </form>
      </div>
    </div>
  );
};

export default PartnerStorePage;
