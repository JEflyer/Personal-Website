import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Jonathan's innovative approach to blockchain technology has revolutionized our company's digital assets strategy.",
    author: "Alex Smith, CTO at InnovateTech",
  },
  {
    id: 2,
    quote: "Working with Jonathan on the AquaPurge Project was an eye-opening experience. His dedication to environmental sustainability is truly inspiring.",
    author: "Maria Garcia, Environmental Scientist",
  },
  {
    id: 3,
    quote: "Jonathan's leadership in software development and his visionary approach to fintech solutions have set a new benchmark in the industry.",
    author: "Emily Johnson, CEO of FinSolutions",
  },
  // Add more testimonials as needed
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastItem = currentIndex === testimonials.length - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-4xl mx-auto my-10">
      <div className="relative">
        <div className="absolute left-0 z-10 flex items-center justify-center h-full cursor-pointer" onClick={goToPrevious}>
          {/* Previous Button */}
          <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </div>

        <div className="overflow-hidden rounded-lg shadow-lg">
          <div className="py-10 text-center">
            <p className="text-lg font-medium text-gray-900">"{testimonials[currentIndex].quote}"</p>
            <p className="mt-4 font-bold text-gray-700">{testimonials[currentIndex].author}</p>
          </div>
        </div>

        <div className="absolute right-0 z-10 flex items-center justify-center h-full cursor-pointer" onClick={goToNext}>
          {/* Next Button */}
          <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
