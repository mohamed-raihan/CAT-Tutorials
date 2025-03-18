import React from "react";
import Header from "../header/Header";
import Intro from "../introduction/Intro";
import WelcomTocat from "../welcomeToCat/WelcomTocat";
import Benefits from "../benefits/Benefits";
import ExploreCourses from "../exploreCourses/ExploreCourses";
import BenefitsSection from "../helpful/HelpFul";
import Footer from "../footer/Footer";
import Review from "../review/Review";
import Blogs from "../blogs/Blogs";
import { Query } from "../query/Query";
import { ModalProvider } from "@/app/modalContext/ModalContext";
import FAQ from "../faqs/Faqs";
import Faculty from "../faculties/Faculties";
import Toppers from "../toppersStory/ToppersStory";

function LandingPage() {
  return (
    <ModalProvider>
      <div>
        <Header />
        <Intro />
        <WelcomTocat />
        <BenefitsSection />
        <ExploreCourses />
        <Benefits />
        <Blogs />
        <Faculty/>
        <Toppers/>
        <FAQ/>
        <Review />
        <Query />
        <Footer />
      </div>
    </ModalProvider>
  );
}

export default LandingPage;
