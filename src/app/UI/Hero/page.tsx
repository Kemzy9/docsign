
import { GoogleAnalyticsWrapper } from '../googleanaylytics/page'
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Section from '../section/paeg';
import { FaBolt, FaStar, FaFeather } from 'react-icons/fa';
import { FaRobot } from 'react-icons/fa';

interface Logo {
    name: string;
    icon: string;
    url: string;
    alt: string;
    size: number; // Add size property
    quality?: number;
}

interface Business {
    name: string;
}

interface Props {
    logo?: Logo; // Make logo optional
    business?: Business;
}

const Hero: React.FC<Props> = () => {
    const section = {
        name: 'thechatpdf',
        icon: 'section img',
        business: { name: 'BusinessName' },
        alt: 'section',
        size: 900,
        quality: 75
    };
    const starColors = ['#FFD700', '#FFD700', '#FFD700', '#FFD700', '#FFD700',];

    return (
        <div className='w-relative'>
            <GoogleAnalyticsWrapper />

            <div className="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
                <div className="flex justify-start items-center">
                    <div className="text-center relative">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">
                                <span className="mb-1 block"></span><FaRobot className="text-4xl text-gray-500 mr-2" />
                                <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                                    Make PDFs
                                </span>
                            </span>
                            <div className="mt-2 bg-color text-black">
                                <span className="relative mt-3 whitespace-nowrap text-blue-600">
                                    <span className="relative"> easy to chat.</span>
                                </span>
                            </div>
                        </h1>
                        <div className="text-right text-xl mt-6">
                            <h1>Tired of scrolling through endless PDF</h1>
                            <h2>Join us and work smarter, not harder!</h2>
                        </div>
                        <Head>
                            <title>thechatpdf || chat to pdf easily and fast</title>
                            <meta name="description" content="Chat to PDF and sign documents online with our AI-powered technology." />
                            <meta name="keywords" content="chat to pdf, chatpdfr, gptpdf, docsign, pdfai, gptpdf" />
                            <meta name="robots" content="index, follow" />
                            <meta property="og:title" content="Thechatpdf || Chat to PDF Easily and Fast" />
                            <meta property="og:description" content="Transform conversations into PDF documents easily and securely with Thechatpdf. Chat to PDF and sign documents online with our AI-powered technology." />
                            <meta property="og:image" content="https://thechatpdfcom/image.jpg" />
                            <meta property="og:url" content="https://thechatpdf/page" />
                            <meta name="twitter:title" content="Thechatpdf || Chat to PDF Easily and Fast" />
                            <meta name="twitter:description" content="Tired of scrolling through endless PDF. Chat to PDF and sign documents Join us and work smarter, not harder!" />
                            <meta name="twitter:image" content="https://thechatpdf//2.png" />
                            <meta name="description" content="You're in control of your conversation. Easily transform your PDF into chat." />
                            <link rel="canonical" href="https://www.thechatpdf.com" />

                            {/* Add these lines to include your favicon */}
                            <link rel="icon" href="/favicon.ico" />
                            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                            <link rel="manifest" href="/site.webmanifest" />
                        </Head>

                        <div className="relative">
                            <a href="/chatpdf" title="thechatpdf" className="cursor-pointer flex items-center gap- px-2 py-2 w-40 h-15 border border-transparent rounded-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white shadow-md transition duration-300 ease-in-out hover:shadow-lg relative text-md">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-200 hover:bg-blue-300">
                                    <FaBolt className="w-5 h-5 text-yellow-500" />
                                </div>
                                <div className="relative">
                                    <span className="block font-medium relative">Upload a file</span>
                                    <span className="mt-0.5 block text-xs text-gray-300"></span>
                                </div>
                            </a>
                            <input type="file" id="button2" name="button2" hidden />
                        </div>
                        <script type="application/ld+json">
                            {JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "@id": "https://thechatpdf.com/#organization",
                                "name": "thechatpdf",
                                "url": "https://thechatpdf.com",
                                "email": "no-reply@thechatpdf.com",
                                "description": "Tired of scrolling through endless PDF.Join us and work smarter, not harder!",
                                "logo": {
                                    "@type": "ImageObject",
                                    "@id": "https://thechatpdf.com/#logo",
                                    "url": "https://interiorai.com/assets/logo.svg",
                                    "contentUrl": "https://thechatpdf/assets/logo.svg",
                                    "caption": "thechatpdf",
                                    "inLanguage": "en-US"
                                },
                                "contactPoint": [
                                    {
                                        "@type": "ContactPoint",
                                        "telephone": "+68 0000 0000",
                                        "contactType": "customer support"
                                    }
                                ]
                            })}
                        </script>

                        <div className="flex justify-right mt-2">
                            <div className="hidden sm:block -space-x-2 overflow-hidden">
                                <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="/lora.png" alt="Lora" width={48} height={48} quality={75} />
                                <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="/patty.png" alt="Patty" width={48} height={48} quality={75} />
                                <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="/zaid.png" alt="Zaid" width={48} height={48} quality={75} />
                                <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="/ethan.png" alt="Ethan" width={48} height={48} quality={75} />
                            </div>

                            <div className="flex justify-center mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-current hover:text-red-600"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </div>

                            <div className="flex justify-right mt-6">
                                {starColors.map((color, index) => (
                                    <FaStar key={index} className="text-yellow-500 mr-1" style={{ color }} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/capsule.png"
                                alt="Capsule"
                                width={section.size}
                                height={section.size}
                                quality={section.quality}
                                priority
                            />
                         <Section section={section} /> {/* Placing Section component on the right side */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

