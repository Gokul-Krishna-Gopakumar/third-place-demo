"use client";

import Image from "next/image";

import { useMediaQuery } from "react-responsive";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

//leaflet css
import "leaflet/dist/leaflet.css";

import { motion } from "framer-motion";
import { fadeIn } from "@/public/variants";

const markers = [
  {
    position: [34.052235, -118.243683],
    title: "location 1",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ullam dolorem ducimus, fugiat doloremque officia sunt veniam ex reprehenderit, sequi sed delectus quas optio, alias obcaecati blanditiis nemo culpa dolorum!",
    image: "/map/1.png",
  },
  {
    position: [33.9748, -118.3356],
    title: "location 2",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ullam dolorem ducimus, fugiat doloremque officia sunt veniam ex reprehenderit, sequi sed delectus quas optio, alias obcaecati blanditiis nemo culpa dolorum!",
    image: "/map/2.png",
  },
  {
    position: [34.0211, -118.3965],
    title: "location 3",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ullam dolorem ducimus, fugiat doloremque officia sunt veniam ex reprehenderit, sequi sed delectus quas optio, alias obcaecati blanditiis nemo culpa dolorum!",
    image: "/map/3.png",
  },
];

const customIcon = new Icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
});

const Map = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  //start here!!!!!

  return (
    <motion.section
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="relative xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80 xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20"
      id="contact"
    >
      <MapContainer
        center={[34.052235, -118.243683]}
        zoom={isMobile ? 10 : 12}
        className={`${isMobile ? "h-[300px]" : "h-[900px]"} z-10`}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {markers.map((marker, index) => {
          return (
            <Marker keys={index} position={marker.position} icon={customIcon}>
              <Popup>
                <div className="flex gap-x-[30px]">
                  <div className="flex-1">
                    <h3>{marker.title}</h3>
                    <p className="">{marker.subtitle}</p>
                  </div>
                  <div className="flex-1">
                    <Image src={marker.image} width={130} height={160} alt="" />
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </motion.section>
  );
};

export default Map;
