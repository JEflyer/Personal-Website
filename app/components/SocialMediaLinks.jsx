import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from "next/link"

const SocialMediaLinks = () => {
    return (
        <div className="flex justify-center space-x-4">
            <Link href="https://www.linkedin.com/in/jonathan-else-096bb3186/" className="text-blue-600 hover:text-blue-800" target='_blank' title="LinkedIn" >
                <FaLinkedin className="fa-2x" size={100} />
            </Link>
            <Link href="https://twitter.com/JonnyInnovates" className="text-blue-400 hover:text-blue-600" target='_blank' title="Twitter" >
                <FaTwitter className="fa-2x" size={100} />
            </Link>
            <Link href="https://github.com/JEflyer" className="text-gray-800 hover:text-black" target='_blank' title="GitHub" >
                <FaGithub className="fa-2x" size={100} />
            </Link>
        </div>
    );
};

export default SocialMediaLinks;
