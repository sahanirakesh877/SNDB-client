

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SafeHtml from "../components/safeHtml";
import { Helmet } from "react-helmet";
import Loader from "./Loader";

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<
    {
      _id: string;
      title: string;
      date: string;
      description: string;
      image: string;
      altText: string;
    }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blog data from backend API
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/blog`
        );
        setBlogPosts(response.data.blogs.slice(0, 4));

        console.log("Blog", response.data.blogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setError("Failed to load blog posts");
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

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

      {!blogPosts.length ? (
        <>
          <div className="relative text-center pb-8">
            <p className="text-gray-500 uppercase relative inline-block text-4xl font-semibold">
              Discover New Updates
            </p>
            <span className="block w-60 h-[2px] bg-red-500 mx-auto mt-1"></span>
            <p className="text-md text-gray-600 dark:text-gray-400">
              Discover thought-provoking articles, expert insights, and stories
              that will inspire your journey.
            </p>
          </div>
          {/* No blogs found section */}
          <div className="flex justify-center items-center py-16">
            <div className="text-center bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                No Blogs Found
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Stay tuned for our latest updates and stories.
              </p>
            </div>
          </div>
        </>
      ) : (
        <section className="bg-red-50 dark:bg-gray-900 py-8">
          <div className="relative text-center pb-8">
            <p className="text-gray-500 uppercase relative inline-block text-4xl font-semibold">
              Discover New Updates
            </p>
            <span className="block w-60 h-[2px] bg-red-500 mx-auto mt-1"></span>
            <p className="text-md text-gray-600 dark:text-gray-400">
              Discover thought-provoking articles, expert insights, and stories
              that will inspire your journey.
            </p>
          </div>

          {/* Content Section */}
          <div className="px-8 py-8 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-2 sm:py-12">
            <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-4">
              {/* Map over the fetched blogPosts array */}
              {blogPosts.map((post) => (
                <div key={post._id} className="relative">
                  <Link
                    to={`/blog/${post._id}`}
                    className="block overflow-hidden group rounded-xl shadow-lg"
                  >
                    <img
                      src={`${import.meta.env.VITE_SERVERAPI}/${post.image}`}
                      alt={post.altText}
                      className="object-cover w-full h-48 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                    />
                  </Link>
                  <div className="relative mt-3">
                    <p className="uppercase font-semibold text-xs mb-1.5 text-purple-600">
                      {post.date}
                    </p>
                    <Link
                      to={`/blog/${post._id}`}
                      className="block mb-3 hover:underline"
                    >
                      <h2 className="text-lg font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="mb-2 text-gray-700 dark:text-gray-300 text-justify text-sm">
                      <SafeHtml htmlString={post.description.slice(0, 120)} />
                      .&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;
                    </p>
                    <Link
                      to={`/blog/${post._id}`}
                      className="font-medium underline text-purple-600 dark:text-purple-400"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Blog;
