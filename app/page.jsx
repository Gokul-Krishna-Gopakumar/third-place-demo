/*import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StyleGuide from "@/components/StyleGuide";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import About from "@/components/About";
import Map from "@/components/Map";
import Footer from "@/components/Footer";*/
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("@/components/Header"), {
  ssr: false,
});
const DynamicHero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
});
const DynamicMenu = dynamic(() => import("@/components/Menu"), {
  ssr: false,
});
const DynamicReservation = dynamic(() => import("@/components/Reservation"), {
  ssr: false,
});
const DynamicAbout = dynamic(() => import("@/components/About"), {
  ssr: false,
});
const DynamicMap = dynamic(() => import("@/components/Map"), {
  ssr: false,
});
const DynamicFooter = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

export default function Home() {
  return (
    <main
      className=" w-full max-w-[1440px] bg-white mx-auto
            overflow-hidden"
    >
      <DynamicHeader />
      <DynamicHero />
      <DynamicMenu />
      <DynamicReservation />
      <DynamicAbout />
      <DynamicMap />
      <DynamicFooter />
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
