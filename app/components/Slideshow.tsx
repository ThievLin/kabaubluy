"use client";
import React from 'react'; // Explicitly import React
import Image from 'next/image';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SlideshowProps {
  images: string[]; // Array of image URLs
  interval?: number; // Optional interval in milliseconds
}

const Slideshow: React.FC<SlideshowProps> = ({ images, interval = 3000 }) => {
  // Slick settings with centerMode enabled
  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Enable infinite looping
    speed: 500, // Slide transition speed
    autoplay: true, // Enable autoplay
    autoplaySpeed: interval, // Interval between slides
    slidesToShow: 1, // Show 1 slide at a time
    centerMode: true, // Center the active slide
    focusOnSelect: true, // Focus on the selected slide
    centerPadding: '0', // No extra padding on the sides
    slidesToScroll: 1, // Scroll one slide at a time
    beforeChange: (current: number, next: number) => {
      // Update the state to trigger a re-render when the slide changes
      setActiveSlide(next);
    },
  };

  const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <div className="relative w-full max-w-[300px] mx-auto">
      {/* Phone frame */}
      <div className="relative w-full h-[650px] mx-auto">
        <Image
          src="/images/slide/iphone.png" // Assuming you have an iPhone frame image
          alt="Phone"
          layout="fill" // Make the frame fill the container
          objectFit="contain" // Preserve aspect ratio of the iPhone frame image
          className="absolute top-1 left-0 z-10"
        />

        {/* Slider container positioned within the phone frame */}
        <div className="absolute top-22 left-4 w-[90%] h-full z-0">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-full p-2"
                style={{
                  filter: index === activeSlide ? 'none' : 'blur(10px)', // Apply blur to non-center images dynamically
                  transition: 'filter 0.5s ease-in-out', // Smooth transition for blur effect
                }}
              >
                <Image
                  src={image}
                  alt={`Slide ${index}`}
                  width={375}
                  height={670}
                  className="object-contain w-full h-full transition-all duration-500 ease-in-out" // Smooth transition for image
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
