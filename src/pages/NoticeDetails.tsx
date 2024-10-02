import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const NoticeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [notice, setNotice] = useState<{
    title: string;
    createdAt: string;
    images: string;
  } | null>(null);

  useEffect(() => {
    const fetchNoticeDetails = async () => {
      try {
        // Correct API endpoint for fetching a single notice by ID
        const response = await axios.get(
          `${
            import.meta.env.VITE_SERVERAPI
          }/api/v1/notice/getsinglenotice/${id}`
        );

        // Assuming the notice details are returned in response.data.notice
        setNotice(response.data.notice);
      } catch (error) {
        console.error("Error fetching notice details:", error);
      }
    };

    fetchNoticeDetails();
  }, [id]);

  if (!notice) {
    return <div className="text-center"><Loader/></div>;
  }

  return (
    <>
      <Helmet>
        <title>Notice Details | Society of Nepal Doctors of Bangladesh</title>

        {/* Meta description for SEO */}
        <meta
          name="description"
          content="Read detailed notices and important updates from the Society for Nepalese Doctors from Bangladesh (SNDB). Stay informed about events, meetings, and healthcare initiatives that impact Nepalese medical professionals."
        />

        {/* Keywords for the page */}
        <meta
          name="keywords"
          content="SNDB notice details, SNDB announcements, Nepalese doctors, Bangladesh doctors, healthcare updates, medical events, SNDB meetings, healthcare in Nepal"
        />
      </Helmet>

      <div className="flex flex-col items-center justify-center  bg-gray-100  py-20 px-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 ">
          {notice.title}
        </h1>
        <p className="text-gray-600">
          {new Date(notice.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <img
          src={`${import.meta.env.VITE_SERVERAPI}/${notice.images.replace(
            /\\/g,
            "/"
          )}`}
          alt={notice.title}
          className="mb-4 rounded-lg shadow-md w-[700px] h-auto object-contain border"
        />
      </div>
    </>
  );
};

export default NoticeDetails;
