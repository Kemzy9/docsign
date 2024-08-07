import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalyticsWrapper } from "./UI/googleanaylytics/page";

import React from "react";
import SessionWrapper from "./componentss/SessionWrapper";






const inter = Inter({ subsets: ["latin"] });


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
    <html lang="en">

      <body className={inter.className}>{children}
      <GoogleAnalyticsWrapper /></body>
 
    </html>
    </SessionWrapper>
  );
}