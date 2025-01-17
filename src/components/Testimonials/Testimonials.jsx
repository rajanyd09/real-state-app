import React from 'react';


export const testimonialsData = [
    {
      name: "John Doe",
      designation: "CEO, TechCorp",
      testimonial: "The team exceeded our expectations with their innovative solutions and attention to detail. Highly recommended!",
      image: "https://via.placeholder.com/150" // Replace with actual image URLs
    },
    {
      name: "Jane Smith",
      designation: "Marketing Manager, CreativeAgency",
      testimonial: "Their expertise and commitment to quality were evident in every step of the project. Truly outstanding!",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Michael Johnson",
      designation: "Product Manager, InnovateHub",
      testimonial: "A pleasure to work with! They delivered beyond what we imagined. Will definitely collaborate again.",
      image: "https://via.placeholder.com/150"
    },
  ];
  
  

const Testimonials = () => {
  return (
    <div className="container mx-auto py-10  lg:px-32 w-full
    overflow-hidden" id='Testimonials'>
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Customer <span className='underline
      underline-offset-4 decoration-1 under font-light'>
        Testimonials</span></h1>
        <p className='text-center mx-28 text-gray-500 mb-12 max-w-80'>Real Stories From Those Who Found Home With Us</p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="px-8 py-12 max-w-[340px]  border rounded shadow-lg text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="mx-auto rounded-full w-20 h-20 mb-4"
            />
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{testimonial.designation}</p>
            <p className="text-gray-700">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
