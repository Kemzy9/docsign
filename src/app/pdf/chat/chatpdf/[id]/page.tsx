'use client'
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { GoogleAnalyticsWrapper } from "@/app/UI/googleanaylytics/page";
import Chatpdf from '@/app/chatpdf/page';

const ChatPdf: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const chatTitle = id ? `Easily transform your chat conversation ${id} into a PDF document using Thechatpdf's AI-powered technology.` : "You're in control of your conversation. Easily transform your PDF into chat. Thechatpdf provides a seamless experience to convert chat conversations into PDF documents using AI technology.";

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
        <title>thechatpdf||Real-Time PDF Conversations</title>
        <meta name="description" content={id ? `Quickly convert pdf in to chat  ${id} into a PDF document using Thechatpdf's AI-powered technology.` : "You're in control of your conversation. Easily transform your PDF into chat."} />
        <meta name="keywords" content="chat to pdf, chat pdf, convert chat to pdf, gptpdf, chat conversation pdf, ai pdf conversion, ai chat to pdf, thechatpdf" />
        <link rel="canonical" href={id ? `https://www.thechatpdf.com/chat/${id}` : "https://www.thechatpdf.com"} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://thechatpdf.com/#organization",
            "name": "thechatpdf",
            "url": "https://thechatpdf.com",
            "email": "no-reply@thechatpdf.com",
            "logo": {
              "@type": "ImageObject",
              "@id": "https://thechatpdf.com/#logo",
    
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": chatTitle,
            "description": id ? `Easily transform your chat conversation ${id} into a PDF document using Thechatpdf's AI-powered technology.` : "You're in control of your conversation. Easily transform your PDF into chat. Thechatpdf provides a seamless experience to convert chat conversations into PDF documents using AI technology.",
            "url": id ? `https://www.thechatpdf.com/chat/${id}` : "https://www.thechatpdf.com"
          })}
        </script>
      </Head>
      <Chatpdf/>
    </div>
  );
};

export default ChatPdf;

