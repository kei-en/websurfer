"use client";

import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Footer() {
  const date = new Date();

  return (
    <AuroraBackground>
      <svg
        width="100%"
        preserveAspectRatio="none"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-20 lg:-top-32 h-28 text-gray-50 dark:text-slate-900 lg:h-40 xl:h-48">
        <path
          className="fill-current opacity-40"
          d="M0 400V133c103.732-25.043 207.464-50.086 297-32s164.876 79.301 263 79c98.124-.301 219.033-62.12 323-78 103.967-15.88 190.99 14.177 281 27 90.01 12.823 183.005 8.411 276 4v267Z"></path>
        <path
          className="fill-current"
          d="M0 400V266c71.187 17.866 142.373 35.732 242 31 99.627-4.732 227.694-32.062 341-52 113.306-19.938 211.852-32.483 293-22 81.148 10.483 144.9 43.995 236 55 91.1 11.005 209.55-.498 328-12v134Z"></path>
      </svg>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex sm:flex-row flex-col gap-4 md:items-center justify-between px-10 lg:px-20 w-full">
        <div className="text-3xl md:text-3xl font-bold dark:text-white text-center inline-flex gap-2">
          <Image
            src={"/ws-logo.png"}
            alt="websurfer logo"
            width={61}
            height={85}
            className="w-10 h-auto"
          />
          <span className="mt-2">Websurfer</span>
        </div>
        <div className="font-extralight text-base dark:text-neutral-200 py-4">
          <span className="font-semibold text-lg md:text-xl">About</span>
          <ul>
            <li className="py-2 hover:text-cyan-500 underline">
              <Link href={"/about"}>What is Websurfer?</Link>
            </li>
          </ul>
        </div>
        <div className="font-extralight text-base dark:text-neutral-200 py-4">
          <span className="font-semibold text-lg md:text-xl">Contribute</span>
          <ul>
            <li className="py-2 hover:text-cyan-500 underline">
              <Link href={"/submit"}>Submission rules</Link>
            </li>
            <li className="py-2 hover:text-cyan-500 underline">
              <Link href={"/submit#submit-site"}>Submit a site</Link>
            </li>
          </ul>
        </div>
        <div className="font-extralight text-base dark:text-neutral-200 py-4">
          <span className="font-semibold text-lg md:text-xl">More</span>
          <ul>
            <li className="py-2 hover:text-cyan-500 underline">
              <Link href={"/contact"}>FAQ & Contact</Link>
            </li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-slate-400 text-xs absolute bottom-10">
        <span>
          &#169; {date.getFullYear()} Websurfer and{" "}
          <a
            href="https://www.k7n.tech"
            target="_blank"
            className="text-cyan-50 hover:text-cyan-500">
            Kei eN
          </a>
        </span>
      </motion.div>
    </AuroraBackground>
  );
}
