"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const CallToActionSection = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
      <Image
        src="/landing-call-to-action.jpg"
        alt="landing call to action"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative flex flex-col items-center justify-center h-full text-center px-6 sm:px-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Find Your Dream Rental Property
        </h2>
        <p className="text-lg md:text-xl text-white mt-4 max-w-2xl">
          Discover a wide range of rental properties in your desired location.
        </p>
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-primary-700 bg-white rounded-lg px-6 py-3 font-semibold hover:bg-primary-500 hover:text-primary-50"
          >
            Search
          </button>
          <Link
            href="/signup"
            className="text-white bg-secondary-500 rounded-lg px-6 py-3 font-semibold hover:bg-secondary-600"
            scroll={false}
          >
            Sign up
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToActionSection;
