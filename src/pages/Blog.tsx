import React from "react";
import { Link } from "react-router-dom";


const blogPosts = [
  {
    id: 1,
    title: "Journey to the Mountains",
    date: "September 10th 2023",
    description:
      "Escape the hustle and explore the serene beauty of the mountains. Discover the peace and adventure.",
    imageUrl:
      "https://images.unsplash.com/photo-1511497584788-876760111969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxmb3Jlc3R8ZW58MHwwfHx8MTcyNjkxODYzNHww&ixlib=rb-4.0.3&q=80&w=1080",
    altText: "Adventure",
  },
  {
    id: 2,
    title: "Desert Safari",
    date: "October 5th 2023",
    description:
      "Venture into the heart of the desert and experience the thrill of a safari amidst the dunes.",
    imageUrl:
      "https://images.unsplash.com/photo-1629112250823-3f091e001783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxEZXNlcnQlMjBTYWZhcml8ZW58MHwwfHx8MTcyNjkxODcwOHww&ixlib=rb-4.0.3&q=80&w=1080",
    altText: "Desert Adventure",
  },
  {
    id: 3,
    title: "Explore the Deep Oceans",
    date: "September 15th 2023",
    description:
      "Dive into the deep oceans and explore the beauty and mystery of the underwater world.",
    imageUrl:
      "https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    altText: "Ocean",
  },
  {
    id: 4,
    title: "Desert Safari",
    date: "October 5th 2023",
    description:
      "Venture into the heart of the desert and experience the thrill of a safari amidst the dunes.",
    imageUrl:
      "https://images.unsplash.com/photo-1629112250823-3f091e001783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxEZXNlcnQlMjBTYWZhcml8ZW58MHwwfHx8MTcyNjkxODcwOHww&ixlib=rb-4.0.3&q=80&w=1080",
    altText: "Desert Adventure",
  },
  // Add more blog post objects as needed...
];

const Blog: React.FC = () => {
  return (
    <>
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
            {/* Map over the blogPosts array */}
            {blogPosts.map((post) => (
              <div key={post.id} className="relative">

              
                <a
                  href="#_"
                  className="block overflow-hidden group rounded-xl shadow-lg"
                >
                  <img
                    src={post.imageUrl}
                    alt={post.altText}
                    className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                  />
                </a>
                <Link to={`/blog/${post.id}`}>
                <div className="relative mt-3">
                  <p className="uppercase font-semibold text-xs mb-1.5 text-purple-600">
                    {post.date}
                  </p>
                  <a href="#" className="block mb-3 hover:underline">
                    <h2 className="text-lg font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
                      {post.title}
                    </h2>
                  </a>
                  <p className="mb-2 text-gray-700 dark:text-gray-300 text-justify text-sm">
                    {post.description}
                  </p>
                  <a
                    href="#_"
                    className="font-medium underline text-purple-600 dark:text-purple-400"
                  >
                    Read More
                  </a>
                </div>
                </Link>
              </div>
            
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
