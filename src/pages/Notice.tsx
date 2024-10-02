import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Pdf {
  title: string;
  filePath: string;
}

interface notices {
  _id: string;
  title: string;
  images: string;
  createdAt: string;
}
const Notice: React.FC = () => {
  const [pdfs, setPdfs] = useState<Pdf[]>([]);
  const [notice, setNotice] = useState<notices[]>([]);

  // Fetching PDFs
  const fetchPDFs = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVERAPI}/api/v1/getallpdf`
      );
      setPdfs(response.data.pdfs);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
    }
  };

  // Fetching Notices
  const fetchNotices = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVERAPI}/api/v1/notice/getallnotice`
      );
      setNotice(response.data.notices);
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  // Format the timestamp to a readable date
  const formatDate = (timestamp: string): string => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    fetchPDFs();
    fetchNotices();
  }, []);

  return (
    <>
      <Helmet>
        <title>Notice | Society of Nepal Doctors of Bangladesh</title>

        {/* Meta description for SEO */}
        <meta
          name="description"
          content="Stay updated with the latest notices and announcements from the Society for Nepalese Doctors from Bangladesh (SNDB). Find important information about events, meetings, and healthcare initiatives."
        />

        {/* Keywords for the page */}
        <meta
          name="keywords"
          content="SNDB notices, SNDB announcements, Nepalese doctors, Bangladesh doctors, healthcare updates, SNDB events, medical professionals"
        />
      </Helmet>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center pb-8">
            <p className="text-gray-500 uppercase relative inline-block text-4xl font-semibold">
              Notices and Documents
            </p>
            <span className="block w-40 h-[2px] bg-red-500 mx-auto mt-1"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side: Notices */}

            <div className="bg-blue-50 p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-6  border-b-2 border-green-500 ">
                Latest Notices
              </h2>
              <ul className="space-y-1">
                {notice.map((item, id) => (
                  <li
                    key={id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <div className="flex items-center">
                      <Link to={`/notice/${item._id}`}>
                        <img
                          src={`${
                            import.meta.env.VITE_SERVERAPI
                          }/${item.images.replace(/\\/g, "/")}`}
                          alt={item.title}
                          className="w-20 h-20  object-contain mr-4"
                        />
                      </Link>
                      <div>
                        <p className="text-sm text-gray-500">
                          {formatDate(item.createdAt)}
                        </p>
                        <h3 className="text-lg font-semibold text-gray-700">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side: PDF Downloads */}
            <div className="bg-green-50 p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-6  border-b-2 border-green-500 ">
                Important Documents
              </h2>
              <ul className="space-y-1">
                {pdfs.map((pdf, id) => (
                  <li
                    key={id}
                    className="flex items-center justify-between border-b border-red-300 pb-2"
                  >
                    <h3 className="text-md font-semibold">{pdf.title}</h3>
                    <a
                      href={`${import.meta.env.VITE_SERVERAPI}/${pdf.filePath}`}
                      className="inline-flex items-center justify-center shadow-lg bg-white text-green-600 font-semibold px-4 py-2 rounded-md transition duration-300 hover:bg-gray-100 hover:text-green-600 text-md"
                      download
                      target="_blank"
                    >
                      <FaDownload />
                      Download
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notice;
