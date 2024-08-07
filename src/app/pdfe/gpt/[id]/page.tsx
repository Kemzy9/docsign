'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { GoogleAnalyticsWrapper } from "@/app/UI/googleanaylytics/page";
import Chatpdf from '@/app/chatpdf/page';

const Gpt: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const chatTitle = id ? `Chat Conversation ${id}` : 'Thechatpdf || Your Words, Your Documents chat to pdf';

  useEffect(() => {
    

    // Dynamic rendering for better crawlability
    const handleRouteChange = () => {
      if (window.navigator.userAgent.includes('Googlebot')) {
        fetch(window.location.href, {
          headers: {
            'User-Agent': 'Googlebot',
          },
        })
          .then((res) => res.text())
          .then((html) => {
            const parser = new DOMParser();
            const parsed = parser.parseFromString(html, 'text/html');
            window.document.documentElement.innerHTML = parsed.documentElement.innerHTML;
          });
      }
    };

    handleRouteChange(); // Call the function initially

    const handlePathChange = () => {
      handleRouteChange();
    };

    window.addEventListener('popstate', handlePathChange);

    return () => {
      window.removeEventListener('popstate', handlePathChange);
    };
  }, [id, router]);

  return (
    <div>
    
      <GoogleAnalyticsWrapper />
      <Head>
        <title>chat to you pdf very easliy</title>
        <meta name="description" content={id ? `Easily transform your chat conversation ${id} into a PDF document using Thechatpdf's AI-powered technology.` : "You're in control of your conversation. Easily transform your PDF into chat. Thechatpdf provides a seamless experience to convert chat conversations into PDF documents using AI technology."} />
        <meta name="keywords" content="chat to pdf, chat pdf, convert chat to pdf, pdf from chat, chat conversation pdf, ai pdf conversion, ai chat to pdf, thechatpdf" />
        <link rel="canonical" href={id ? `https://www.thechatpdf.com/chat/${id}` : "https://www.thechatpdf.com"} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": chatTitle,
            "description": id ? `Easily transform your chat conversation ${id} into a PDF document using Thechatpdf's AI-powered technology.` : "You're in control of your conversation. Easily transform your PDF into chat. Thechatpdf provides a seamless experience to convert chat conversations into PDF documents using AI technology.",
            "url": id ? `https://www.thechatpdf.com/chat/${id}` : "https://www.thechatpdf.com",
          })}
        </script>
      </Head>
      <Chatpdf/>
      
    </div>
  );
};

export default Gpt;