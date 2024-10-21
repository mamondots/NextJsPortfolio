/* eslint-disable react/no-unescaped-entities */
import React from "react";

const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="font-semibold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-center text-3xl md:text-5xl font-serif mt-6">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
