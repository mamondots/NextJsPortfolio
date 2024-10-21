import sportLandingPage from "@/assets/images/sports.jpg";
import petLandingPage from "@/assets/images/pet.jpg";
import learnLandingPage from "@/assets/images/learn.jpg";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import shopLandingPage from "@/assets/images/shop.jpg";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Mamon_Dots",
    year: "2024",
    title: "Dream Sprots Full Stack Website",
    results: [
      { title: "Front-End: Reactjs,Tailwindcss,TypeScript" },
      {
        title: "Back-End: Expressjs,MongoDB,TypeScript",
      },
      { title: "A full stack sports booking website" },
    ],
    link: "https://sports-facility-nu.vercel.app/",
    link2: "https://github.com/mamondots/sportBooking_client_site",
    image: sportLandingPage,
  },
  {
    company: "Mamon_Dots",
    year: "2024",
    title: "Pet Finder Full Stack Website",
    results: [
      { title: "Front-End: Nextjs,Tailwindcss,TypeScript" },
      {
        title: "Back-End: Expressjs,MongoDB,TypeScript",
      },
      { title: "A full stack pet finder website" },
    ],
    link: "https://pet-adoption-frontend-henna.vercel.app/",
    link2: "https://github.com/mamondots/petFinder_clinet_side",
    image: petLandingPage,
  },
  {
    company: "Mamon_dots",
    year: "2024",
    title: "Online Courses Full Stack Website",
    results: [
      { title: "Front-End: reactjs,Tailwindcss" },
      {
        title: "Back-End: Expressjs,Nodejs,MongoDB",
      },
      { title: "A full stack Online Courses website" },
    ],
    link: "https://vermillion-hotteok-d0c334.netlify.app/",
    link2: "https://github.com/mamondots/CourseWeb_client",
    image: learnLandingPage,
  },
  {
    company: "Mamon_dots",
    year: "2024",
    title: "AI SEO Animated Landing Page",
    results: [
      { title: "Front-End: Nextjs,Tailwindcss,Frame motion" },
      { title: "SEO Optimize,create scrole animation" },
      { title: "A animated nextjs landing page" },
    ],
    link: "https://aiseos.netlify.app/",
    link2: "https://github.com/mamondots/SEOPage",
    image: aiStartupLandingPage,
  },
  {
    company: "Mamon_dots",
    year: "2024",
    title: "Capers Simple Ecommerce Website",
    results: [
      { title: "Front-End: reactjs,Tailwindcss" },
      {
        title: "Back-End: Expressjs,Nodejs,MongoDB",
      },
      { title: "A full stack simple ecommerce website" },
    ],
    link: "https://campers-shop-webiste-clients-code.vercel.app/",
    link2: "https://github.com/mamondots/redux_ecommerce_client",
    image: shopLandingPage,
  },
];

const AllProjectSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Projects"
          description="See how I tramsformed concepts into engaging digital experience"
        ></SectionHeader>

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 pb-0 lg:mt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              {/* <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${GraningImage.src})`,
                }}
              ></div> */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6"></CheckCircleIcon>
                        <span className="">{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex lg:flex-row flex-col lg:gap-2">
                    <a href={project.link} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4"></ArrowUpRightIcon>
                      </button>
                    </a>
                    <a href={project.link2} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>GitHub</span>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 rounded-tl-[20px] -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  ></Image>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjectSection;
