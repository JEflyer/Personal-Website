"use client"
// pages/about.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>About Jonathan Else</title>
                <meta name="description" content="Dive into my journey from passionate student to tech innovator and environmental advocate." />
            </Head>
            <Header />
            <main className="container mx-auto px-4 flex-grow justify-center mx-auto">
                <section className="py-8">
                    <h1 className="text-4xl font-bold text-center mb-4">About Me - Jonathan Else</h1>
                    <p className="text-lg text-gray-700">
                        From my early days at St. Mungo's High School to the challenges and triumphs that followed, my path has been anything but conventional.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mt-4 py-10">
                        <li>Explored various fields of study, including accounting and finance, software development, and game development, each contributing to my diverse skill set.</li>
                        <li>Overcame personal adversity and channeled my experiences into a passion for technology and innovation.</li>
                        <li>Self-taught expert in blockchain technology, leading to the foundation of The AquaPurge Project and RealmLink.</li>
                        <li>Initiated a study group on Discord focusing on Solidity, growing into a vibrant community of developers and enthusiasts.</li>
                        <li>Launched a mentorship program guiding individuals from basic to advanced competencies in blockchain development.</li>
                        <li>Established a software development agency, tackling client projects with a focus on blockchain solutions and success strategies.</li>
                        <li>Founded the ERC9988 initiative, introducing a new standard for unique asset identification combined with fractional ownership, enhancing traceability and ownership dynamics in supply chains, collectibles, real estate, and gaming.</li>
                        <li>Developed an offensive smart contract hacking course to deepen my understanding of smart contract vulnerabilities, showcasing my commitment to both mastering and securing blockchain technology.</li>
                    </ul>
                    <p className="text-lg text-gray-700 mt-4">
                        My journey is a testament to the power of resilience, continuous learning, and the importance of community. I'm dedicated to pushing the boundaries of what's possible and inspiring others along the way.
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
}
