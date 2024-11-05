'use client'; // Ensures the component runs on the client side
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


const Accordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <div className="space-y-6 p-24 w-[80%] mx-auto">
      {/* Introductory Section */}
      <div className="bg-white p-6 rounded-md shadow">
        <h1 className="text-2xl font-bold mb-4">Careers</h1>
        <p className="text-gray-700 mb-4 text-lg">
          KBL team prides itself on bringing the latest technology innovation solutions to help our customers and partners grow. We will rely on all our team members to play our parts to achieve this noble mission. Therefore, we trust that without our intelligent, competent, and innovative members, we would not be able to serve our customers the best they should deserve.
        </p>
        <p className="text-gray-700 text-lg">
          If you are passionate about making an impact by bringing technology innovation, you are welcome to join our team. Please regularly check out this page for any available vacancies.
        </p>
      </div>

      {/* Accordion Items */}
      <div className="accordion-container space-y-4">
        {/* Job Vacancy Accordion Item */}
        <h1 className="text-xl text-[#FF6608] font-semibold ml-2">Job Vacancy</h1>

        <div className="accordion-item border border-gray-300 rounded">
          <button
            className="accordion-header w-full flex justify-between items-center p-4 bg-white cursor-pointer focus:outline-none"
            onClick={() => toggleAccordion(1)}
          >
            <span className="text-gray-800 font-semibold">Position</span>
            <span className="accordion-icon">{openIndex === 1 ? '-' : '+'}</span>
          </button>
          <div className={`accordion-content ${openIndex === 1 ? 'block' : 'hidden'} p-4 bg-gray-50`}>
            <p className='text-[#FF6608]'>Under Job Vacancy!!</p>
          </div>
        </div>

        {/* How to Apply Accordion Item */}
        <div className="accordion-item border border-gray-300 rounded">
          <button
            className="accordion-header w-full flex justify-between items-center p-4 bg-white cursor-pointer focus:outline-none"
            onClick={() => toggleAccordion(2)}
          >
            <span className="text-gray-800 font-semibold">How to Apply</span>
            <span className="accordion-icon">{openIndex === 2 ? '-' : '+'}</span>
          </button>
          <div className={`accordion-content ${openIndex === 2 ? 'block' : 'hidden'} p-4 bg-gray-50 space-y-4`}>
            <p className="mb-2 text-lg">
                Interested candidates, please submit your <strong>‘CV/Resume and Cover Letter’</strong> to:
            </p>
            <p className="text-gray-800 mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-gray-600" />
                Main Office: #178E0E1, Street 1972, Phnom Penh Thmey, Sen Sok 120801, Cambodia
            </p>
            <p className="text-gray-800 mb-2 flex items-center">
                <FaPhoneAlt className="mr-2 text-gray-600" />
                Telephone: (+855) 23 902 088
            </p>
            <p className="text-gray-800 flex items-center">
                <FaEnvelope className="mr-2 text-gray-600" />
                Email: <a href="mailto:kbl@bsi.com.kh" className="text-blue-500 hover:underline">kbl@bsi.com.kh</a>
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
