import Link from "next/link"
const HeroSection = () => {
    return (
      <section className="bg-deep-sea-blue text-black text-center py-20 lg:py-32">
        <div className="container mx-auto px-8">
          <h1 className="text-3xl lg:text-5xl font-bold mb-6">
            Jonathan Else
          </h1>
          <p className="text-xl lg:text-2xl mb-8">
            Innovating at the intersection of technology and environmental advocacy.
          </p>
          <Link href="/about" className="bg-blue hover:bg-dark-blue text-dark-slate-gray font-bold py-3 px-6 rounded-lg transition duration-300">
            Learn More About Me
          </Link>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  