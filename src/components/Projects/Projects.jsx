import React, { useState } from "react";
import Left from "../../assets/left.png";
import Next from "../../assets/next.png";
import House1 from "../../assets/house1.jpg";
import House2 from "../../assets/house2.jpg";
import House3 from "../../assets/house3.jpg";
import House4 from "../../assets/house4.jpg";
import House5 from "../../assets/house5.jpg";
import House6 from "../../assets/house6.jpg";

const projectsData = [
  {
    house: House1,
    title: "Modern House",
    price: "$500,000",
    location: "California",
  },
  {
    house: House2,
    title: "Luxury Villa",
    price: "$2,000,000",
    location: "Florida",
  },
  {
    house: House3,
    title: "Family Home",
    price: "$800,000",
    location: "Texas",
  },
  {
    house: House4,
    title: "Beachside Retreat",
    price: "$1,500,000",
    location: "Hawaii",
  },
  {
    house: House5,
    title: "Urban Apartment",
    price: "$600,000",
    location: "New York",
  },
  {
    house: House6,
    title: "Mountain Cabin",
    price: "$700,000",
    location: "Colorado",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4; // Number of items to display at a time
  const totalItems = projectsData.length;

  const handleNextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < totalItems - (itemsToShow - 1) ? prevIndex + 1 : 0
    );
  };

  const handlePrevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : totalItems - itemsToShow
    );
  };

  return (
    <div
      className="relative container mx-auto py-4 pt-20 px-6
        md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Slider buttons */}
      <div className="relative flex justify-between items-center mb-4">
        <button
          onClick={handlePrevProject}
          className="p-2 bg-gray-200 rounded-full"
          aria-label="Previous Project"
        >
          <img src={Left} alt="Previous" className="w-4 h-4" />
        </button>
        <button
          onClick={handleNextProject}
          className="p-2 bg-gray-200 rounded-full"
          aria-label="Next Project"
        >
          <img src={Next} alt="Next" className="w-4 h-4" />
        </button>
      </div>

      {/* Project slider container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
            width: `${(totalItems / itemsToShow) * 100}%`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full"
              style={{
                flexBasis: `${100 / itemsToShow}%`, // controls the width of each item
              }}
            >
              <img
                src={project.house}
                alt={project.title}
                className="h-auto w-full object-cover mb-4" // Ensuring the images are larger and fill the container
                style={{ height: "300px", width: "300" }} // Adjust height to make images larger
              />
              <div className="text-center bg-white p-4 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-500 text-sm">
                  {project.price} <span>|</span> {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
