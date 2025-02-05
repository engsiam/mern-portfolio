import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const slides = [
  {
    url: "https://source.unsplash.com/random/1600x900/?technology",
    title: "Welcome to Our Portfolio",
    description: "We create amazing digital experiences that inspire and innovate",
  },
  {
    url: "https://source.unsplash.com/random/1600x900/?business",
    title: "Professional Services",
    description: "Delivering excellence in every project we undertake",
  },
  {
    url: "https://source.unsplash.com/random/1600x900/?creative",
    title: "Creative Solutions",
    description: "Innovative approaches to modern challenges",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="h-[600px] w-full relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center animate-fade-in">
              {slides[currentIndex].title}
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-2xl animate-fade-in">
              {slides[currentIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowLeft onClick={prevSlide} size={24} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowRight onClick={nextSlide} size={24} />
      </div>
    </div>
  );
};

export default HeroSection;