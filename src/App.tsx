import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Member from "./pages/Member";
import Message from "./pages/Message";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Error from "./pages/Error";
import Notice from "./pages/Notice";
import LogoTop from "./components/LogoTop";
import ExecutiveCommitee from "./pages/ExecutiveCommitee";
import PastEXComm from "./pages/PastEXComm";
import MemberShip from "./pages/MemberShip";
import NoticeDetails from "./pages/NoticeDetails";
function App() {
  return (
    <>
      <Topbar />
      <LogoTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/member" element={<Member />} />
        <Route path="/register-member" element={<MemberShip />} />
        <Route path="/executive-comimttee" element={<ExecutiveCommitee />} />
        <Route path="/past-committee" element={<PastEXComm />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/;id" element={<NoticeDetails />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/executive-message" element={<Message />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
