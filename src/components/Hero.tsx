import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Loader from "../pages/Loader";

interface SlideData {
  images: string;
  title: string;
}

const Hero: React.FC = () => {
  const [slides, setSlides] = useState<SlideData[]>([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/hero/getallheroimg`
        );
        setSlides(response.data.Heros.slice(0,3));
    
      } catch (error) {
        console.error("Error fetching slide data", error);
      }
    };

    fetchSlides();
  }, []);

  

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className=" mx-auto">
      {slides.length > 0 ? (
        <Slider {...settings} className="overflow-hidden">
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <img
                src={`${import.meta.env.VITE_SERVERAPI}/${slide.images}`}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-80 md:h-[70vh]"
              />
              <h2
                className="text-center text-2xl md:text-3xl p-2 text-red-700 shadow-md font-semibold absolute bottom-12 left-1/2 transform -translate-x-1/2"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                {slide.title}
              </h2>
            </div>
          ))}
        </Slider>
      ) : (
        <p><Loader/></p>
      )}
    </div>
  );
};

export default Hero;
