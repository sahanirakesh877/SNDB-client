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
import { useEffect, useState } from "react";
import axios from "axios";


interface Notice {
  images: string;
}

function App() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [notice, setNotice] = useState<Notice[] | null>(null);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/notice/getallnotice`
        );

        console.log("notice popup", response.data.notices);
        if (response.data.notices) {
          setNotice(response.data.notices);
          setShowPopup(true);
        }
      } catch (error) {
        console.error("Error fetching notice:", error);
      }
    };

    fetchNotice();
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Topbar />
      <LogoTop />
      <Header />

      {/* Popup Notice */}
      {showPopup && notice && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="rounded-lg shadow-lg p-0 w-11/12 md:w-1/3 relative">
            {notice.length > 0 && (
              <div className="grid grid-cols-1 gap-4 mb-4">
                {notice.slice(0, 1).map((item, index) => (
                  <img
                    key={index}
                    src={`${
                      import.meta.env.VITE_SERVERAPI
                    }/${item.images.replace(/\\/g, "/")}`} 
                    alt={`Notice Image ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                ))}
              </div>
            )}

            <button
              onClick={closePopup}
              className="absolute -top-4 -right-3 text-white hover:text-gray-800 text-lg font-semibold bg-red-700 rounded-full px-2 py-1"
            >
              ✕
            </button>
          </div>
        </div>
      )}

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
        <Route path="/notice/:id" element={<NoticeDetails />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/executive-message" element={<Message />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
