const TimelineItem = ({ title, description, year }) => (
    <div className="mb-8 flex justify-between items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-sunset-gold shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{year}</h1>
      </div>
      <div className="order-1 bg-eco-green rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-xl">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">{description}</p>
      </div>
    </div>
  );
  
  const Timeline = () => {
    return (
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: '50%'}}></div>
          {/* Repeat the TimelineItem for each milestone */}
          <TimelineItem
            year="2023"
            title="Co-Founder at The AquaPurge Project"
            description="Spearheaded initiatives focused on combating ocean pollution through innovative technology."
          />
          <TimelineItem
            year="2021"
            title="Founder of Giga Imprint Labs Ltd"
            description="Established a software development agency specializing in blockchain technology and sustainable solutions."
          />
          {/* Add more TimelineItem components as needed */}
        </div>
      </div>
    );
  };
  
  export default Timeline;
  