import React from "react";
import Footer from "../../Shared/Footer/Footer";

import Navigation from "../../Shared/Navigation/Navigation";
import Testimonials from "../../Testimonials/Testimonials";
import About from "../About/About";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Features></Features>
      <Services></Services>
      <About></About>
      <AppoinmentBanner></AppoinmentBanner>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
