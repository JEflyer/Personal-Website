"use client"
import Head from 'next/head';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
// import Gallery from './components/Gallery';
import Footer from '../components/Footer';
import SocialMediaLinks from '../components/SocialMediaLinks';

export default function Projects() {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Jonathan Else | Contact</title>
                <meta name="description" content="Jonathan Else's Professional Portfolio" />
            </Head>

            <Header />

            <main className="flex-grow">
                <div className="container mx-auto px-4">

                <ContactForm/>
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
