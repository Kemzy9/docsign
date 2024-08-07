'use client'


import React from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import SectionA from '@/app/UI/section/sectionA/page';


const Sign= () => {
  const sectionA = {
    name: 'thechatpdf',
    icon: 'section img',
    business: { name: 'BusinessName' },
    alt: 'section',
    size: 1000,
    quality: 75
  };
  return (

    <div className="flex flex-col items-center justify-center h-full">
      <NextSeo
        title="TheChatPdf - Sign Documents"
        description="Sign documents securely with TheChatPdf."
        openGraph={{
          type: 'website',
          url: 'https://thechatpdf.com/sign',
          title: 'TheChatPdf - Sign Documents',
          description: 'Sign documents securely with TheChatPdf.',
          images: [
            {
              url: 'https://example.com/og-image-sign.jpg',
              alt: 'TheChatPdf - Sign Documents',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
     <SectionA section={sectionA} /> 


      <button
        type="button"
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Lets Chat
      </button>
    </div>

  );
};

export default Sign;




