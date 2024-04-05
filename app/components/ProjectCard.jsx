import Image from "next/image"
import Link from "next/link"
const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
    return (
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-4 my-10">
        <Link href={projectUrl} target="_blank">
          <Image className="rounded-t-lg" src={imageUrl} alt={title} height={300} width={382} />
        </Link>
        <div className="p-5">
          <Link href={projectUrl} target="_blank" className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <Link href={projectUrl} target="_blank" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sunset-gold rounded-lg hover:bg-sunset-gold-dark focus:ring-4 focus:outline-none focus:ring-sunset-gold-light dark:bg-sunset-gold-dark dark:hover:bg-sunset-gold-light dark:focus:ring-sunset-gold-dark">
            Read More
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </Link>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  