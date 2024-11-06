import React from 'react';

const KabaubLuyApp: React.FC = () => {
  return (
    <div 
      className="relative bg-cover bg-center bg-fixed h-[500px] mx-auto" 
      style={{ backgroundImage: 'url(/images/kbl.png)' }} // Use the correct path to your background image
    >
      {/* Blur effect on the background */}
      <div className="absolute inset-0 bg-blue-600 opacity-55"></div>
      <div className="absolute inset-0 bg-blur-[50px]"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4 md:px-8">
        <div className='p-2 md:p-16 lg:p-24'>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kabaub Luy Application</h1>
          <p className="text-lg md:text-xl">
            Kabaub Luy Application is an innovative and integrative membership application with cashless payment functions that incorporates the digital wallet payment option to help customers save more via merchant reward offers and discounts. Kabaub Luy acts as a customer&apos;s trusted digital wallet partner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KabaubLuyApp;
