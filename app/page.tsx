"use client"
import Head from 'next/head';
import Header from './components/Header';
import HeroSection from './components/Hero';
import SkillsChart from './components/SkillsChart';
import ProjectCard from './components/ProjectCard'; // Assume this renders multiple project cards or adjust as needed
import BlogSection from './components/BlogSection';
// import Gallery from './components/Gallery';
import Footer from './components/Footer';
import SocialMediaLinks from './components/SocialMediaLinks';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan Else | Homepage</title>
        <meta name="description" content="Jonathan Else's Professional Portfolio" />
      </Head>

      <Header />

      <main>
        <HeroSection />
        <SkillsChart />

        <div className="container mx-auto px-4">
          {/* <h2 className="text-3xl font-bold my-8 flex justify-center">Featured Projects</h2> */}
          {/* <div className='flex-row flex'>
            <ProjectCard
              title="The AquaPurge Project"
              description="A groundbreaking initiative aimed at combating ocean pollution through the innovative use of blockchain technology. This project not only seeks to clean up marine environments but also to create a sustainable, community-driven approach to environmental stewardship."
              imageUrl="/images/aquapurge-project.jpg"
              projectUrl="https://www.aquapurge.org"
            />

            <ProjectCard
              title="RealmLink: Uniting Gaming Worlds with Blockchain"
              description="Jonathan Else co-founded RealmLink, a groundbreaking initiative aimed at revolutionizing the gaming industry through blockchain technology. RealmLink focuses on enabling gamers to own and transfer digital assets across various games, fostering an ecosystem where game developers and players collaborate. This platform showcases Jonathan's dedication to innovation and community-driven development in gaming."
              imageUrl="/images/realmlink-gaming.jpg" // Replace with the actual image path
              projectUrl="https://www.realmlink.online"
            />


            <ProjectCard
              title="Giga Imprint Labs Ltd"
              description="A software development agency founded by Jonathan Else, focusing on delivering cutting-edge solutions in the blockchain space. Giga Imprint Labs is dedicated to pushing the boundaries of what's possible, driving innovation in various sectors including finance, healthcare, and sustainability."
              imageUrl="/images/giga-imprint-labs.jpg"
              projectUrl="https://www.gigaimprintlabs.com"
            />
          </div> */}

          <BlogSection />

          {/* <h2 className="text-3xl font-bold my-8">Gallery</h2>
          <Gallery /> */}
        </div>

        <div className=" mt-10">
          <div className="container mx-auto px-4 py-8">
            <SocialMediaLinks />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
