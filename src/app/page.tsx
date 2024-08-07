import React from "react";
import Hero from "./UI/Hero/page";

import { GoogleAnalyticsWrapper } from "./UI/googleanaylytics/page";
import Signchat from "./sign/signchat/page";
import Footer from "./footer/page";
import Support from "./card/support/page";
import Security from "./card/security/[sec]/page";
import FrequentlyAsk from "./card/frequentlyAsk/page";
import Review from "./card/review/page";
import Nav from "./UI/Nav/page";


export default function Home() {
  return (
    <main className="bg-white">
      {/* Desktop Version */}
      <div className="hidden md:block">
        <DesktopVersion />
        <GoogleAnalyticsWrapper /> 
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden">
        <MobileVersion />
        <GoogleAnalyticsWrapper /> 
      </div>
   
    </main>
    
  );
}

function DesktopVersion() {
  return (
    <div>
        
      <Nav/>
      <Hero />
     
      
      <Signchat/>
    
      <Security/>
      
      <Review/>
      <Support/>
      <FrequentlyAsk/>
      <Footer />
    </div>
  );
}

function MobileVersion() {
  return (
    <div>
      {/* Render mobile-specific components */}
      {/* You can customize this for mobile layout */}
      <Nav/>
      <Hero />



      <Signchat/>
  
      
      <Security/>
  
      <Support/>
      <FrequentlyAsk/>
      <Footer />
    </div>
  );
}



