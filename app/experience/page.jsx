"use client"
// pages/experience.js
import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const experiences = [
  {
    title: "Co-founder of The AquaPurge Project and RealmLink",
    details: "Spearheaded innovative applications of blockchain technology to drive environmental sustainability and revolutionize gaming. Focused on creating decentralized solutions for real-world issues.",
  },
  {
    title: "Creator of ERC9988",
    details: "Developed a new blockchain standard for asset identification and fractional ownership, targeting improvements in supply chain management, gaming, real estate, and collectibles.",
  },
  {
    title: "Founder of Offensive Smart Contract Hacking Course",
    details: "Designed and launched a comprehensive course to deepen understanding of smart contract vulnerabilities, emphasizing hands-on learning and practical defense strategies.",
  },
  {
    title: "Developer Study Group Leader",
    details: "Established and grew a Solidity-focused study group into a vibrant community of blockchain enthusiasts and professionals, fostering a culture of learning and collaboration.",
  },
  {
    title: "Software Development Agency Entrepreneur",
    details: "Launched a successful agency delivering bespoke blockchain solutions. Led projects from ideation to launch, ensuring client satisfaction and operational excellence.",
  },
  {
    title: "Mentorship Program Initiator",
    details: "Created a mentorship program to guide aspiring blockchain developers, providing one-on-one support and fostering a new generation of skilled professionals in the blockchain industry.",
  }
];

const ExperienceItem = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full text-left text-gray-900 bg-gray-100 hover:bg-gray-200 p-4 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="mt-2 p-4 bg-white rounded-lg border border-gray-200">{details}</div>}
    </div>
  );
};

export default function Experience() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Jonathan Else's Experience</title>
        <meta name="description" content="Interactive display of Jonathan Else's professional experience." />
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-6">My Professional Experience</h1>
        <div>
          {experiences.map((exp, idx) => (
            <ExperienceItem key={idx} {...exp} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
