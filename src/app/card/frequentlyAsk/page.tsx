'use client'

import React from "react";

const FrequentlyAsk = () => {
    return (
        <div
            className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
            <div className="mx-auto px-5">
                <div className="flex flex-col items-center">
                    <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
                    <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequently asked questions</p>
                </div>
                <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span> How I can sign document pdf/img</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">You can easily sign PDF documents and images. Just upload your PDF or image file, and you&apos;re ready to go!</p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span> Is there free tool?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We&apos;ve implemented Draw and doc/pdf sign and more features we are upgrading. Draw is a new tool, so when you start chatting to the PDF, you can use Draw to mark, line, and more in your work, and plus Dark mode.</p>
                        </details>
                    </div>
                    
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span> Is there a free trial?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <a className="text-blue-500 hover:underline" href="/card/signpad">Draw</a> 
                            you can sign your documents. While chatting with PDFs directly use Draw to mark, line, all within our platform. It&apos;s completely free! Chat with a limited number of PDFs, and if you want more features and capabilities, consider upgrading to our 
                            <a className="text-blue-500 hover:underline" href="/SubscribeComponent">PREMIUM plan.</a>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span> How do I contact support?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">If you ever need assistance with our platform or have any questions, don&apos;t hesitate to reach out to our dedicated support team. You can easily get in touch by submitting a support request directly through our website or by sending an email to thechatpdff@gmail.com. We&apos;re here to help!</p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span> Do you offer any discounts or promotions?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">As a special, we&apos;re offering a fantastic deal to our first 300 customers: a whopping 20% off! Don&apos;t miss out on this incredible opportunity to save big on your purchases. Hurry and grab your discount before it&apos;s gone!</p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrequentlyAsk;
