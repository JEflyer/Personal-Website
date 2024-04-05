"use client"
import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/Hero';
import SkillsChart from '../components/SkillsChart';
import ProjectCard from '../components/ProjectCard'; 
import BlogSection from '../components/BlogSection';
// import Gallery from './components/Gallery';
import Footer from '../components/Footer';
import SocialMediaLinks from '../components/SocialMediaLinks';

export default function Projects() {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Jonathan Else | Projects</title>
                <meta name="description" content="Jonathan Else's Professional Portfolio" />
            </Head>

            <Header />

            <main className="flex-grow">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold my-8 flex justify-center">Featured Projects</h2>
                    <div className='flex-row flex flex-wrap pt-10 justify-center'>
                        <ProjectCard
                            title="The AquaPurge Project"
                            description="A groundbreaking initiative aimed at combating ocean pollution through the innovative use of blockchain technology. This project not only seeks to clean up marine environments but also to create a sustainable, community-driven approach to environmental stewardship."
                            imageUrl="/images/aquapurge-project.png"
                            projectUrl="https://www.aquapurge.org"
                        />

                        <ProjectCard
                            title="RealmLink: Uniting Gaming Worlds with Blockchain"
                            description="Co-founder of RealmLink, a groundbreaking solution aimed at revolutionizing the gaming industry through blockchain technology. RealmLink focuses on enabling gamers to own and transfer digital assets across various games, fostering an ecosystem where game developers and players collaborate. This platform showcases my dedication to innovation and community-driven development in gaming."
                            imageUrl="/images/RealmLink-Logo.png" 
                            projectUrl="https://www.realmlink.online"
                        />

                        <ProjectCard
                            title="Giga Imprint Labs Ltd"
                            description="A software development agency founded by I, focusing on delivering cutting-edge solutions in the blockchain space. Giga Imprint Labs is dedicated to pushing the boundaries of what's possible, driving innovation in various sectors including finance, healthcare, and sustainability."
                            imageUrl="/images/giga-imprint-labs.png"
                            projectUrl="https://www.gigaimprintlabs.com"
                        />

                        <ProjectCard
                            title="ERC9988 Standard"
                            description="I innovated the ERC9988 standard, blending unique asset identification akin to ERC721 with fractional ownership like ERC20. This pioneering standard aims to revolutionize asset management across supply chains, collectibles, real estate, and gaming, by facilitating fractional ownership and enhanced traceability."
                            imageUrl="/images/erc9988-standard.jpg"
                            projectUrl="https://www.erc9988.info"
                        />

                    </div>

                </div>

            </main>
            <div className=" mt-10">
                <div className="container mx-auto px-4 py-8">
                    <SocialMediaLinks />
                </div>
            </div>
            <Footer />
        </div>
    );
}
