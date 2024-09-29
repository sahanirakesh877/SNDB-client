import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Download from "yet-another-react-lightbox/plugins/download";
import ReactPaginate from "react-paginate";

const Gallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0); // State for pagination
  const imagesPerPage = 8;

  const images = [
    "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1668491195456-9341d9cf3977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXQlMjB3aGl0ZXxlbnwwfDF8fHwxNzIxODIyMzU3fDA&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080",
    "https://img.freepik.com/free-vector/flat-design-healthcare-establishment-poster_23-2149679331.jpg?t=st=1727588561~exp=1727592161~hmac=e8fc5b997a60905d5585e273d7b4a999f31c9a66b12e7bd1f570c52b57cac74c&w=826",
    "https://img.freepik.com/free-psd/healthcare-aid-poster-template_23-2148969694.jpg?t=st=1727596443~exp=1727600043~hmac=86e5b47beb8cfe2a397e1ba2954b6f1fe6ec52d82913233019b7f9558110db12&w=826",
    "https://img.freepik.com/free-psd/world-heart-day-template-design_23-2151701033.jpg?t=st=1727596464~exp=1727600064~hmac=9d003d099bfee48e78ad41c4a288e570d0f81a6adc62789a59fa6cbbfd150905&w=996",
    "https://img.freepik.com/premium-photo/medical-instruments_1197721-65443.jpg?w=826",
    "https://img.freepik.com/free-photo/pills-medical-tools-arrangement-flat-lay_23-2149341610.jpg?t=st=1727596542~exp=1727600142~hmac=cd63cdd85c466869a8700dffb730d70519962dde4a7ca3918f6ef20f0eefec81&w=1380",
    "https://img.freepik.com/premium-photo/photo-medical-equipment_951220-45123.jpg?w=826",
    "https://img.freepik.com/premium-photo/anesthesia-machine-setup-with-advanced-equipment-intricate-tubing-detailed-controls-monit_1168612-353753.jpg?w=1480",
    "https://img.freepik.com/premium-photo/collection-medical-equipment-including-one-that-says-medical_1197721-65729.jpg?w=826",
    "https://img.freepik.com/premium-photo/photo-medical-equipment_951220-45255.jpg?w=826",
    "https://img.freepik.com/free-photo/top-view-pills-stethoscope-arrangement_23-2149341646.jpg?t=st=1727596589~exp=1727600189~hmac=d60eb12ab97c954fa7cb61315c9f263b8369044409a301db4026f63247d6f3af&w=1380",
    "https://img.freepik.com/premium-photo/photo-medical-equipment_951220-45123.jpg?w=826",
  ];

  // Calculate the current images to display based on the current page
  const startIndex = currentPage * imagesPerPage;
  const selectedImages = images.slice(startIndex, startIndex + imagesPerPage);
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected); // Update current page state
  };

  return (
    <>
      <div className="p-5 sm:p-8">
        <div className="relative text-center pb-2">
          <p className="text-gray-500 uppercase relative inline-block text-4xl font-semibold">
            Gallery
          </p>
          <span className="block w-20 h-[2px] bg-red-500 mx-auto mt-1"></span>
        </div>
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8 ">
          {selectedImages.map((src, index) => (
            <img
              key={index + startIndex}
              src={src}
              alt={`Gallery image ${index + startIndex + 1}`}
              className="cursor-pointer mb-4 transition-transform transform hover:scale-105"
              onClick={() => openLightbox(index)} // Open lightbox on image click
            />
          ))}
        </div>
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={Math.ceil(images.length / imagesPerPage)} // Total number of pages
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
        slides={images.map((src) => ({ src }))}
        index={currentImageIndex}
        plugins={[Download]} // Add additional plugins here if needed
      />
    </>
  );
};

export default Gallery;
