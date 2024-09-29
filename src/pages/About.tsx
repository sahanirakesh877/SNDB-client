const About: React.FC = () => {
  return (
    <>
      <div className="sm:flex items-center max-w-7xl mx-auto  py-8">

      <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-red-600 uppercase">About Us</span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-green-600">Society of Nepal Doctors of Bangladesh</span>
            </h2>
            <p className="text-gray-700 text-justify">
              Society for Nepalese Doctor from Bangladesh (SNDB) is the non-political, non-profitable organization for the Neplase  Doctors who have accomplished either MBBS/BDS or MD/MS or both degrees from Bangladesh, currently practicing in Nepal or abroad.
              It is our pleasure to inform you that there are thousand of doctors who have graduates from Bangladesh and many of them are holding major positions in most of the prestigious and reputed institutions/Hospitals across Nepal.
            </p>
            <p className="text-gray-700 text-justify my-2"> SNDB strives to create a platform for continuous professional growth, networking, and collaboration among its members. We aim to promote the exchange of knowledge, support career development, and foster a sense of unity among doctors who share common academic roots in Bangladesh. Our goal is to contribute to the enhancement of healthcare services in Nepal through shared expertise and collective efforts. </p>
           
          

            <button className="px-8 py-1 bg-gradient-to-r from-red-500 to-green-500 text-white font-semibold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
  Click me!
</button>
          </div>
        </div>
        <div className="sm:w-1/2 ">
          <div className="image object-center text-center">
            <img src="/about.jpg" />
          </div>
        </div>
      
      </div>
    </>
  );
};

export default About;
