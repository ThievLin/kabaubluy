import Slideshow from '../components/Slideshow';

const HomePage: React.FC = () => {
  const images = [
    '/images/slide/screen-4.jpg',
    '/images/slide/screen-4.jpg',
    '/images/slide/screen-3.jpg',
    '/images/slide/screen-4.jpg',
    '/images/slide/screen-1.jpg',
    '/images/slide/screen-3.jpg',
    '/images/slide/screen-4.jpg',
    '/images/slide/screen-4.jpg',
    '/images/slide/screen-3.jpg',
  ];

  return (
    <div 
      className="relative container mx-auto p-4 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(/images/background.png)' }} // Adjust the path to your background image
    >
      <h1 className="text-2xl font-bold text-center mb-6 text-white">Awesome Screens</h1>

      {/* Container for the slideshow */}
      <div className="relative m-auto">
        {/* The slideshow */}
        <div className="relative">
          <Slideshow images={images} interval={5000} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
