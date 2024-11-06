import React from 'react';
import KabaubLuyApp from '../components/KabaubLuyApp';

const BecomeMemberPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Become Our Member</h1>
      <div className="flex flex-col md:flex-row max-w-[90%] w-full mx-auto">
        <div className="flex-1 md:w-3/5 p-8 shadow-md rounded-sm text-lg border m-4 bg-white">
          <p className="mb-4">
            As your trusted digital wallet partner, you can:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-4">
            <li>Save more while you spend at our network of stores with a range of discounts offered.</li>
            <li>Get reward points whenever you pay the stores using the KBL app.</li>
            <li>Claim various reward items from the merchants and KBL team.</li>
            <li>Get any transaction or report within a few clicks.</li>
          </ul>
        </div>

        <form className="bg-white p-8 rounded-sm shadow-md flex-1 md:w-2/5 m-4">
          <h2 className="text-2xl font-semibold mb-4">Please fill out the form below:</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Family Name *</label>
              <input type="text" required className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Given Name *</label>
              <input type="text" required className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone Number *</label>
              <input type="tel" required className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email (optional)</label>
              <input type="email" className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Date of Birth *</label>
              <input type="date" required className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Gender:</label>
              <select className="border border-gray-300 p-2 rounded w-full">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Address:</label>
              <input type="text" className="border border-gray-300 p-2 rounded w-full" />
            </div>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Please submit here
          </button>
        </form>
      </div>
    </div>
    <KabaubLuyApp />
    </>
  );
};

export default BecomeMemberPage;
