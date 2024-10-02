import Contact from "./Contact";
import Hero from "../components/Hero";
import About from "./About";
import Blog from "./Blog";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  return (
    <>
      <Helmet titleTemplate="SNDB | Society of Nepal Doctors of Bangladesh">
        <meta
          name="description"
          content="Welcome to the Society for Nepalese Doctors from Bangladesh (SNDB). Discover our mission, meet our members, read our blogs, and learn about our contributions to healthcare in Nepal."
        />
        <meta
          name="keywords"
          content="Nepalese doctors, Bangladesh doctors, SNDB, healthcare in Nepal, medical professionals, SNDB mission"
        />
      </Helmet>

      <Hero />
      <About />

      <Blog />
      <Contact />
      
    </>
  );
};

export default Home;
