import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NoticeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const [notice, setNotice] = useState<{ title: string; date: string; imageUrl: string } | null>(null);

  useEffect(() => {
    const fetchNoticeDetails = async () => {
      try {
        const response = await fetch(`https://api.example.com/notices/${id}`);
        const data = await response.json();
        setNotice(data); 
      } catch (error) {
        console.error("Error fetching notice details:", error);
      }
    };

    fetchNoticeDetails();
  }, [id]);

  if (!notice) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img 
        src={notice.imageUrl} 
        alt={notice.title} 
        className="mb-4 rounded-lg shadow-md"
      />
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
        {notice.title}
      </h1>
      <p className="text-gray-600">{notice.date}</p>
    </div>
  );
};

export default NoticeDetails;
