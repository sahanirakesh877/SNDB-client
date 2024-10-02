import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Download from "yet-another-react-lightbox/plugins/download";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { Helmet } from "react-helmet";
import Loader from "./Loader";

// Define types for the gallery data
interface GalleryImage {
  _id: string;
  images: string[];
}

const Gallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [galleries, setGalleries] = useState<GalleryImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0); // State for pagination
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const imagesPerPage = 8;

  // Fetch all galleries from the API
  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/getallgallery`
        );

        console.log("Fetched galleries:", response.data.gallery);
        setGalleries(response.data.gallery);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    };

    fetchGalleries();
  }, []);

  // Flatten the galleries to get an array of image objects for the lightbox
  const allImages = galleries.flatMap((gallery) =>
    gallery.images.map((image) => ({
      src: `${import.meta.env.VITE_SERVERAPI}/${image}`,
    }))
  );

  // Calculate the current images to display based on the current page
  const startIndex = currentPage * imagesPerPage;
  const selectedImages = galleries.slice(
    startIndex,
    startIndex + imagesPerPage
  );

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected); // Update current page state
  };

  if (loading) {
    return <div><Loader/></div>;
  }

  return (
    <>
      <Helmet>
        <title>Gallery | Society of Nepal Doctors of Bangladesh</title>

        {/* Meta description for SEO */}
        <meta
          name="description"
          content="Explore the gallery of the Society for Nepalese Doctors from Bangladesh (SNDB), showcasing events, achievements, and community contributions to healthcare in Nepal."
        />

        {/* Keywords for the page */}
        <meta
          name="keywords"
          content="SNDB gallery, SNDB events, Nepalese doctors, Bangladesh doctors, healthcare in Nepal, medical events, SNDB achievements, healthcare photos"
        />
      </Helmet>

      <div className="p-5 sm:p-8">
        <div className="relative text-center pb-10">
          <p className="text-gray-500 uppercase relative inline-block text-4xl font-semibold">
            Gallery
          </p>
          <span className="block w-20 h-[2px] bg-red-500 mx-auto mt-1"></span>
        </div>
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          {selectedImages.map((gallery, galleryIndex) => (
            <div key={gallery._id}>
              {gallery.images.map((image, imageIndex) => (
                <img
                  key={`${gallery._id}-${imageIndex}`} // Use a unique key combining gallery ID and image index
                  src={`${import.meta.env.VITE_SERVERAPI}/${image}`}
                  className="cursor-pointer mb-4 transition-transform transform hover:scale-105"
                  onClick={() =>
                    openLightbox(
                      startIndex * imagesPerPage +
                        galleryIndex * gallery.images.length +
                        imageIndex
                    )
                  } // Ensure the correct index is passed
                />
              ))}
            </div>
          ))}
        </div>
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={Math.ceil(galleries.length / imagesPerPage)} // Total number of pages
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          previousLinkClassName={"previous"}
          nextLinkClassName={"next"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
        />
      </div>

      {/* Lightbox Component */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={allImages}
        index={currentImageIndex}
        plugins={[Download]} // Add additional plugins here if needed
      />
    </>
  );
};

export default Gallery;
