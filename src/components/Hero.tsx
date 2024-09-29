import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero: React.FC = () => {
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
      {/* React Slick Carousel */}
      <Slider {...settings} className="overflow-hidden">
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/group-medics-masks-reading-paper_23-2147763838.jpg?t=st=1727441384~exp=1727444984~hmac=8b816f4ff75ab4c51cbc9ec78b8420f9b8bddb9ac059613d92447845ff2b438c&w=826"
            alt="Slide 1"
            className="object-cover w-full h-80 md:h-[70vh]"
          />
          <h2
            className="text-center text-2xl md:text-3xl p-2 text-red-700 shadow-md font-semibold absolute bottom-12 left-1/2 transform -translate-x-1/2"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Society of Nepal Doctors of Bangladesh
          </h2>
        </div>

        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/team-doctors-meeting_107420-84805.jpg?t=st=1727441410~exp=1727445010~hmac=9ddcbb4694a4b04b99d683c44476aa911a8e3be1e604602b9385d69aa7abebc8&w=826"
            alt="Slide 2"
            className="object-cover w-full h-80 md:h-[70vh]"
          />

          <h2
            className="text-center text-2xl md:text-3xl p-2 text-red-700 shadow-md font-semibold absolute bottom-12 left-1/2 transform -translate-x-1/2"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Collaboration and Care Across Borders
          </h2>
        </div>
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?t=st=1727441861~exp=1727445461~hmac=8a852334f57445bc31680cd2bff9c65ad9ec2abbe9978e2b23f34fa15bd492a6&w=826"
            alt="Slide 3"
            className="object-cover w-full h-80 md:h-[70vh]"
          />

          <h2
            className="text-center text-2xl md:text-3xl p-2 text-red-700 shadow-md font-semibold absolute bottom-12 left-1/2 transform -translate-x-1/2"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Supporting Nepalese Doctors in Bangladesh
          </h2>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
