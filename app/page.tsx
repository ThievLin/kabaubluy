import Image from 'next/image';
import bgImage from '../public/images/background.png';
import foregroundImage from '../public/images/phone.png';
import 'animate.css';
import AboutUs from './components/About-Us';
import KabaubLuyApp from './components/KabaubLuyApp';
export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage.src})` }}>
      <div className="flex items-center justify-center h-full px-8 bg-blue-600 bg-opacity-10">
        <div className="flex flex-col md:flex-row items-center max-w-5xl">
          {/* Image on the left */}
          <div className="mb-4 md:mb-0 md:mr-6 w-[30%]">
            <Image
              src={foregroundImage}
              alt="Foreground Image"
              width={500}
              height={500}
              className='animate__animated animate__fadeInUp animate_delay-5s'
            />
          </div>
          {/* Text on the right */}
          <div className="text-white w-[70%]">
            <h1 className="text-xl md:text-3xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInUp animate_delay-10s">Welcome to <span className='text-[#FF6608]'>Kabaub Luy</span></h1>
            <p className="md:text-base lg:text-lg animate__animated animate__fadeInUp animate_delay-4s">
              Kabaub Luy is Your Trusted Digital Wallet Partner, Helping You Save More!
            </p>
          </div>
        </div>
      </div>
    </div>
    <AboutUs />
    <KabaubLuyApp />
    </>
  );
}
