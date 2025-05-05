import Image from "next/image";
import Services from "./components/Services";
import TestimonialSection from "./components/TestimonialSection";
import VideoSection from "./components/VideoSection";
import OurPrograms from "./components/OurPrograms";
import OurTeacher from "./components/OurTeacher";
import BannerCarousel from "./components/BannerCarousel";
import AboutSec from "./components/AboutSec";

export default function Home() {
  return (
    <>
    <BannerCarousel/>
    <Services/>
    <AboutSec/>
    <TestimonialSection/>
    <VideoSection/>
    <OurPrograms/>
    <OurTeacher/>
    </>
  );
}
