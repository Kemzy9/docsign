'use client'
'use client'
import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Hero from '../Hero/page';
import Logo from '../logo/page';

const Nav = () => {
  const logo = {
    name: 'LogoName',
    icon: 'LogoIcon',
    business: { name: 'BusinessName' },
    alt: 'Logo Alt Text',
    size: 50,
    quality: 75
  };

  return (
    <div className="w-full">
      {/* Add any additional meta tags as needed */}
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
       
          <div className="flex items-center justify-between">
            
            <div className="flex shrink-0"><Logo logo={logo} />
            <span className="sr-only">thechatpdf</span>
              <a aria-current="page" className="flex items-center" href="/">
              
               
                <span className='italic hover:not-italic' id="websiteTitle">TheChatPdf</span>
                
                <p className="sr-only">Website Title</p>
              </a>
               
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a aria-current="page" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="/pdf/chat/chatpdf/4567">Signature</a>
              <a aria-current="page" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="/uploader">Signature</a>


            </div>
            <div className="flex items-center justify-end gap-3">

              <a className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" href="/signup">Sign in </a>

            </div>
            <div className="flex items-center justify-end gap-3">

              <a className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" href="/signup/new">Sign in </a>

            </div>
          </div>
        </div>
      </header>
      <div className="w-full">
        <NextSeo
          title="TheChatPdf - Transform Conversations to PDF & Sign Securely"
          description="Transform your conversations into PDF and sign documents securely with TheChatPdf."
          openGraph={{
            type: 'website',
            url: 'https://example.com',
            title: 'TheChatPdf - Transform Conversations to PDF & Sign Securely',
            description: 'Transform your conversations into PDF and sign documents securely with TheChatPdf.',
            images: [
              {
                url: 'https://thechatpdf.com/og-image.jpg',
                alt: 'TheChatPdf - Transform Conversations to PDF & Sign Securely',
              },
            ],
          }}
          twitter={{
            cardType: 'summary_large_image',
          }}
        />
        {/* Rest of your Hero component */}
      </div>
    </div>
  );
};

export default Nav;










