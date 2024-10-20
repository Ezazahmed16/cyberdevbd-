import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import OurWork from "@/components/OurWork";
import TalkTeam from "@/components/TalkTeam";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import WorkHlight from "@/components/WorkHlight";
import WorkingArea from "@/components/WorkingArea";

export default function Home() {
  return (
    <div  style={{ backgroundColor: '#0A0A0A' }} className="">
      <Hero />
      <AboutUs />
      <WorkingArea />
      <WhyUs />
      <OurWork />
      <TalkTeam />
      <WorkHlight />
      <Testimonials />
    </div>
  );
}
