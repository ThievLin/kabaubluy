"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import sampleImage from '../../public/images/sample.png';
import { FaUser, FaStore } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';
const AboutUs = () => {
    useEffect(() => {
        
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
      });
    }, []);
  
    return (
      <div className="mx-auto px-4 py-16 min-h-screen flex flex-col justify-center items-center text-gray-600">
        <div className="flex flex-col md:flex-row items-center justify-center p-4 md:px-12 md:py-12 lg:px-24 lg:py-12">
          <div className="lg:w-[60%] mb-6 md:mb-0 md:pr-8 text-center md:text-left mx-auto">
            <h4 className="text-xl font-semibold mb-4" data-aos="fade-up">About us!</h4>
            <h4 className="text-3xl font-semibold mb-4" data-aos="fade-up" data-aos-delay="200">Who we are!</h4>
            <p className="text-lg" data-aos="fade-up" data-aos-delay="300">
              Kabaub Luy Application is an innovative and integrative membership application with cashless payment functions that incorporates the digital wallet payment option to help customers save more via merchant reward offers and discounts. Kabaub Luy acts as a customer&apos;s trusted digital wallet partner.
              At KabaubLuy, we value quality, innovation, and customer satisfaction.
              <br />
            </p>
          </div>
          
          <div className="lg:w-[40%] m-auto">
            <Image
              src={sampleImage}
              alt="About Us"
              width={500}
              height={400}
              className="m-auto"
              data-aos="fade-up"
              data-aos-delay="600"
            />
          </div>
        </div>
  
        <div className="items-center justify-center p-4 md:p-12 lg:p-24">
          <h4 className="text-3xl font-semibold mb-8 text-center" data-aos="fade-up">What we do!</h4>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:w-[90%] mx-auto mb-6 md:mb-0 text-center">
              <div className="bg-white border rounded-lg p-6 mb-4 lg:mb-0 lg:mr-4 flex-1 flex flex-col" data-aos="fade-up">
              <div className="flex justify-center mb-4">
                  <FaUser className="text-4xl text-blue-500" />
              </div>
              <h4 className="text-xl font-semibold mb-4">For Our Customers</h4>
              <p className="text-lg flex-grow text-start">
                  We act as your digital wallet partner. You can save more via a range of discounts offered by our chain of registered merchants. 
                  You can get reward points whenever you pay the merchants using the KBL app. Besides, you could claim various reward items from the merchants and KBL team. 
                  Moreover, any transaction or report is within a few clicks.
              </p>
              </div>
  
              <div className="bg-white border rounded-lg p-6 flex-1 flex flex-col" data-aos="fade-up">
              <div className="flex justify-center mb-4">
                  <FaStore className="text-4xl text-blue-500" />
              </div>
              <h4 className="text-xl font-semibold mb-4">For Our Merchants</h4>
              <p className="text-lg flex-grow text-start">
                  You can access our customers seamlessly, attracting them to make purchases at your store, offering them reward items to attract them, 
                  and giving promotions at your fingertips. This allows your store to increase brand awareness, increase sales, and ultimately give you more profit. 
                  Our team is dedicated to ensuring that your experience with us is unparalleled. Join us as we continue to strive for excellence and make a positive impact.
              </p>
              </div>
          </div>
        </div>
      </div>
    );
  };
  
export default AboutUs;
  