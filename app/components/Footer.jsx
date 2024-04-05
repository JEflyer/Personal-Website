const Footer = () => {
    return (
      <footer className="bg-dark-slate-gray text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0 text-center md:text-left text-black">
              <a href="/" className="text-lg font-bold">Jonathan Else</a>
            </div>
            <ul className="w-full md:w-auto flex flex-wrap justify-center md:justify-end items-center space-x-4 text-black">
              <li>
                <a href="/about" className="hover:text-sunset-gold transition duration-300">About</a>
              </li>
              <li>
                <a href="/experience" className="hover:text-sunset-gold transition duration-300">Experience</a>
              </li>
              <li>
                <a href="/projects" className="hover:text-sunset-gold transition duration-300">Projects</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-sunset-gold transition duration-300">Contact</a>
              </li>
            </ul>
          </div>
          <div className="text-center mt-4 text-black">
            <p>Designed with ♥ in Scotland</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  