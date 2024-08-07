'use client'

import React from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Section from '../UI/section/paeg';

const Sign = () => {
  const section = {
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
      <Section section={section} /> 

      <li className="text-sm leading-6">
        <div className="relative group">
          <div
            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
          </div>
          <a href="" className="cursor-pointer">
            <div
              className="relative p-6 space-y-6 leading-none rounded-lg bg-transparent ring-1 ring-gray-900/5">
              <div className="flex items-center space-x-4">
                <Image
                  src="/zaid.png"
                  className="w-12 h-12 bg-center bg-cover border rounded-full"
                  alt="Tim Cook"
                  width={48}
                  height={48}
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">Soviana</h3>
                  <p className="text-gray-500 text-md"></p>
                </div>
              </div>
              <p className="leading-normal text-black text-md">&quot;&apos;Brilliant&apos; I have Been using thechatpdf for months now. It&apos;s totally worth it! The draw and doc sign are awesome. And gotta love that dark mode!&quot;</p>
            </div>
          </a>
        </div>
      </li>

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
