import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import StorySection from '../StorySection';
import TourPath from '../TourPath';
import Landmarks from '../Landmarks';
import RouteMap from '../RouteMap';
import TraditionsSection from '../TraditionsSection';
import FinalCTA from '../FinalCTA';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <TourPath />
      <Landmarks />
      <RouteMap />
      <TraditionsSection />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default Home;
