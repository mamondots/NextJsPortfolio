import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "GitHub",
    href: "https://github.com/mamondots",
    link2: "https://github.com/mamondots",
  },
  {
    title: "Twitter",
    href: "https://x.com/mamon63413",
    link2: "https://x.com/mamon63413",
  },
  {
    title: "Instagram",
    href: "#",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/almamon/?trk=opento_sprofile_topcard",
    link2: "https://www.linkedin.com/in/almamon/?trk=opento_sprofile_topcard",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 22024 All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.link2}
                target="_blank"
                key={link.title}
                className="inline-flex items-center gap-1.5 cursor-pointer text-white/50 hover:text-white duration-300"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="size-4"></ArrowUpRight>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
