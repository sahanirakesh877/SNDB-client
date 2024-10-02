import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SafeHtml from "../components/safeHtml";
import { Helmet } from "react-helmet";
import Loader from "./Loader";

// Define the Blog type
interface Blog {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
}

// Component
const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the blog post by ID
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/blog/${id}`
        );
        console.log("response single", response.data.blog);
        setBlog(response.data.blog);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gallery:", error);
        setError("Error fetching blog data");
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // Loading state
  if (loading) {
    return <p><Loader/></p>;
  }

  // Error state
  if (error) {
    return <p>{error}</p>;
  }

  // Render blog details if blog exists
  return (
    <>
      <Helmet>
        <title>Blogs | Society of Nepal Doctors of Bangladesh</title>

        {/* Meta description for SEO */}
        <meta
          name="description"
          content="Explore blogs and articles from the Society for Nepalese Doctors from Bangladesh (SNDB) on healthcare advancements, medical experiences, and community contributions in Nepal."
        />

        {/* Keywords for the page */}
        <meta
          name="keywords"
          content="SNDB blogs, Nepalese doctors blogs, healthcare articles, medical insights, healthcare in Nepal, Bangladesh doctors, SNDB updates"
        />
      </Helmet>

      {blog ? (
        <div className="flex flex-col bg-blue-600">
          <div className="bg-gray-100 pt-8">
            <div className="container mx-auto px-4">
              <h1 className="text-2xl font-bold text-gray-800 mb-1">
                {blog.title}
              </h1>
              <p className="text-gray-600">
                Published on : {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="bg-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-start">
              {/* Image Section */}
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <img
                  src={`${import.meta.env.VITE_SERVERAPI}/${blog.image}`}
                  alt={blog.title}
                  className="rounded-lg w-full h-auto object-cover"
                  style={{ maxHeight: "600px" }}
                />
              </div>

              {/* Description Section */}
              <div className="w-full md:w-1/2 px-4">
                <div className="prose max-w-none">
                  <p className="text-justify">
                    {" "}
                    <SafeHtml htmlString={blog.description} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No blog found</p>
      )}
    </>
  );
};

export default BlogDetails;
