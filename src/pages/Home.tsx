import Contact from "./Contact";
// import Gallery from "./Gallery";

import Hero from "../components/Hero";

// import Message from "./Message";

// import Member from "./Member";

 import About from "./About";
 import Blog from "./Blog";
// import BlogDetails from "./BlogDetails";

const Home: React.FC = () => {
  return (
    <>
    <Hero/>
    <About />
      {/* <Message />
      <Member />
      
      <BlogDetails />
      
      <Message />
      
      <Gallery /> */}
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
