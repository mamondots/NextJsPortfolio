"use client";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScript from "@/assets/icons/square-js.svg";
import Nextjs from "@/assets/icons/nextjs-icon-svgrepo-com.svg";
import HTML5 from "@/assets/icons/html5.svg";
import CSS3 from "@/assets/icons/css3.svg";
import React from "@/assets/icons/react.svg";
import Redux from "@/assets/icons/redux.svg";
import Github from "@/assets/icons/github.svg";
import MapImage from "@/assets/images/map.png";
import SmileImage from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: JavaScript,
  },
  {
    title: "HTML5",
    iconType: HTML5,
  },
  {
    title: "CSS3",
    iconType: CSS3,
  },
  {
    title: "React",
    iconType: React,
  },
  {
    title: "Nextjs",
    iconType: Nextjs,
  },
  {
    title: "Redux",
    iconType: Redux,
  },
  {
    title: "Github",
    iconType: Github,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Fitness",
    emoji: "🏋",
    left: "70%",
    top: "45%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "5%",
    top: "65%",
  },
  {
    title: "Music",
    emoji: "♫",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="about me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        ></SectionHeader>
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shapings my perspectives."
              ></CardHeader>

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="book cover"></Image>
              </div>
            </Card>

            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
                className="px-6 pt-6"
              ></CardHeader>
              <ToolBoxItems
                items={toolBoxItems}
                className=""
                itemsWraperClassName="animate-move-left [animation-duration:30s]"
              ></ToolBoxItems>
              <ToolBoxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWraperClassName="animate-move-right [animation-duration:15s]"
              ></ToolBoxItems>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the code"
                description="Explore my interests and hobbies beyond the digital realm"
                className="px-6 py-6"
              ></CardHeader>
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobbie) => (
                  <motion.div
                    key={hobbie.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-pointer"
                    style={{
                      left: hobbie.left,
                      top: hobbie.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobbie.title}
                    </span>
                    <span>{hobbie.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                className="w-full h-full object-cover object-left-top"
                src={MapImage}
                alt="map"
              ></Image>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image className="size-20" src={SmileImage} alt="smile"></Image>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
