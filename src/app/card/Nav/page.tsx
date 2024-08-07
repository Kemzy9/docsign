'use client '
import Image from 'next/image';
import React from 'react';

const Nav = () => {
  return (
    <div className="w-full">
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <Image className="h-14 w-auto" src="remove.png" alt="image" />
                <span className="italic hover:not-italic" id="websiteTitle">TheChatPdf</span>
                <p className="sr-only">Website Title</p>
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a aria-current="page" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="/signature">Signature</a>
              <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="/google">Pricing</a>
            </div>
            <div className="flex items-center justify-end gap-3">
              <a className="hidden sm:inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50" href="/chatpdf">Sign in</a>
              <a className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600" href="/login">Login</a>
              <a className="hidden sm:inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50" href="/SubscribeComponent">Price</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
