'use client'

import React from "react";
import Image from 'next/image';

const Review: React.FC = () => {
    return (
        <div>
            <section id="testimonies" className="py-20 bg-transparent">
                <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
                    <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                        <div className="mb-12 space-y-5 md:mb-16 md:text-center">
                            <div
                                className="inline-block px-3 py-1 text-sm font-semibold text-black rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                            </div>
                            <h1 className="mb-5 text-3xl font-semibold text-black md:text-center md:text-5xl">
                            </h1>
                            <p className="text-xl text-black md:text-center md:text-2xl">
                                Here&apos;s what others have to say about us.
                            </p>
                            <div className="lg:w-1/3">
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        <ul className="space-y-8">
                            <li className="text-sm leading-6">
                                <div className="relative group">
                                    <div
                                        className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                    </div>
                                    <a href="" className="cursor-pointer">
                                        <div
                                            className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                            <div className="flex items-center space-x-4">
                                                <Image
                                                    src="/leelu.png"
                                                    className="w-12 h-12 bg-center bg-cover border rounded-full"
                                                    alt="lellu"
                                                    width={48}
                                                    height={48}
                                                    loading="lazy"
                                                />
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white">Leelu</h3>
                                                    <p className="text-gray-500 text-md">Entrepreneur</p>
                                                </div>
                                            </div>
                                            <p className="leading-normal text-gray-300 text-md">&quot;Awesome thechatpdf has made my workflow so much smoother. I can&apos;t imagine going back to not using it. The draw is a game-changer, and the dark mode is easy on the eyes during late-night work sessions.&quot;</p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            {/* Additional testimonials */}
                        </ul>

                        <ul className="hidden space-y-8 sm:block">
                            <li className="text-sm leading-6">
                                <div className="relative group">
                                    <div
                                        className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                    </div>
                                    <a href="" className="cursor-pointer">
                                        <div
                                            className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                            <div className="flex items-center space-x-4">
                                                <Image
                                                    src="/emily.png"
                                                    className="w-12 h-12 bg-center bg-cover border rounded-full"
                                                    alt="emily"
                                                    width={48}
                                                    height={48}
                                                    loading="lazy"
                                                />
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white">Emily</h3>
                                                    <p className="text-gray-500 text-md"></p>
                                                </div>
                                            </div>
                                            <p className="leading-normal text-gray-300 text-md">&quot;As a lawyer, I&apos;ve been using thechatpdf for two weeks now, and it&apos;s been a game-changer. Super intuitive, crazy efficient, and the support team? Total rock stars.&quot;</p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>

                        <li className="text-sm leading-6">
                            <div className="relative group">
                                <div
                                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div>
                                <a href="" className="cursor-pointer">
                                    <div
                                        className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div className="flex items-center space-x-4">
                                            <Image
                                                src="/sophia.png"
                                                className="w-12 h-12 bg-center bg-cover border rounded-full"
                                                alt="sophia"
                                                width={48}
                                                height={48}
                                                loading="lazy"
                                            />
                                            <div>
                                                <h3 className="text-lg font-semibold text-white">صوفيا🇰🇼</h3>
                                                <p className="text-gray-500 text-md"></p>
                                            </div>
                                        </div>
                                        <p className="leading-normal text-gray-300 text-md">&quot;بصراحة، تطبيق TheChatPDF جعل إدارة المستندات أمرًا سهلاً للغاية بالنسبة لي. أنا محامٍ وأستخدمه في مهنتي اليومية ولا أستطيع العيش بدونه! يضمن لي التوقيع الإلكتروني والميزات الأخرى القانونية أن العملية تسير بسلاسة.&quot;</p>
                                    </div>
                                </a>
                            </div>
                        </li>

                        <li className="text-sm leading-6">
                            <div className="relative group">
                                <div
                                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div>
                                <a href="" className="cursor-pointer">
                                    <div
                                        className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div className="flex items-center space-x-4">
                                            <Image
                                                src="/noah.png"
                                                className="w-12 h-12 bg-center bg-cover border rounded-full"
                                                alt="noah"
                                                width={48}
                                                height={48}
                                                loading="lazy"
                                            />
                                            <div>
                                                <h3 className="text-lg font-semibold text-white">Noah</h3>
                                                <p className="text-gray-500 text-md"></p>
                                            </div>
                                        </div>
                                        <p className="leading-normal text-gray-300 text-md">&quot;I&apos;ve tried several PDF tools, but TheChatPDF stands out for its simplicity and effectiveness. Been using it religiously for a while now, and it&apos;s been a game-changer for my productivity. Plus, the dark mode? Brilliant touch!&quot;</p>
                                    </div>
                                </a>
                            </div>
                        </li>

                        <li className="text-sm leading-6">
                            <div className="relative group">
                                <div
                                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div>
                                <a href="" className="cursor-pointer">
                                    <div
                                        className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div className="flex items-center space-x-4">
                                            <Image
                                                src="/olivia.png"
                                                className="w-12 h-12 bg-center bg-cover border rounded-full"
                                                alt="olivia"
                                                width={48}
                                                height={48}
                                                loading="lazy"
                                            />
                                            <div>
                                                <h3 className="text-lg font-semibold text-white">Sakura Tanaka</h3>
                                                <p className="text-gray-500 text-md"></p>
                                            </div>
                                        </div>
                                        <p className="leading-normal text-gray-300 text-md">&quot;TheChatPDFは私の仕事をとても楽にしてくれました！シームレスなインターフェースから効率的な機能まで、文書の管理には本当に頼りになります。さらに、カスタマーサポートも最高です！&quot; thank you</p>
                                    </div>
                                </a>
                            </div>
                        </li>

                        <li className="text-sm leading-6">
                            <div className="relative group">
                                <div
                                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div>
                                <a href="" className="cursor-pointer">
                                    <div
                                        className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div className="flex items-center space-x-4">
                                            <Image
                                                src="/john.png"
                                                className="w-12 h-12 bg-center bg-cover border rounded-full"
                                                alt="john"
                                                width={48}
                                                height={48}
                                                loading="lazy"
                                            />
                                            <div>
                                                <h3 className="text-lg font-semibold text-white">John</h3>
                                                <p className="text-gray-500 text-md">Designer</p>
                                            </div>
                                        </div>
                                        <p className="leading-normal text-gray-300 text-md">&quot;Absolutely thrilled with TheChatPDF! As a designer, I often have to share PDFs with clients, and this tool has made the whole process incredibly smooth. Love the draw feature, and the dark mode is perfect for my late-night work sessions. Highly recommend!&quot;</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Review;
