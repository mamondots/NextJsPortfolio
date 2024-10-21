/* eslint-disable react/no-unescaped-entities */
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StartIcon from "@/assets/icons/star.svg";
import SpackelIcon from "@/assets/icons/sparkle.svg";
import Image from "next/image";
import HeroOrbit from "@/components/HeroOrbit";
import Link from "next/link";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-0"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="border border-red-500 size-[800px]">
          <div className="border border-red-500 inline-flex">
          <StartIcon className="size-28 text-emerald-300"></StartIcon>
          </div>
        </div>
      </div> */}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="6s"
        >
          <SpackelIcon className="size-8 text-emerald-300/20"></SpackelIcon>
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SpackelIcon className="size-5 text-emerald-300/20"></SpackelIcon>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SpackelIcon className="size-10 text-emerald-300/20"></SpackelIcon>
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-12 text-emerald-300"></StartIcon>
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-8 text-emerald-300"></StartIcon>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SpackelIcon className="size-14 text-emerald-300/20"></SpackelIcon>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StartIcon className="size-28 text-emerald-300"></StartIcon>
        </HeroOrbit>
      </div>
      <div className="relative">
        <div className="container z-10">
          <div className="flex flex-col items-center">
            <Image
              className="size-[100px]"
              src={memojiImage}
              alt="person pecking behind laptop"
            ></Image>

            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
              </div>
              <div className="text-sm font-medium">
                Available for new projects
              </div>
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Building Exceptional User Experiences
            </h2>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              I specializa in transforming designs info functional,
              high-performing web applications, Let's discuss your next project
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
            >
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4"></ArrowDown>
            </Link>
            <a
              href="https://www.linkedin.com/in/almamon/?trk=opento_sprofile_topcard"
              target="_blank"
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
            >
              <span>👋</span>
              <span className="font-semibold">Let's Connect</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};