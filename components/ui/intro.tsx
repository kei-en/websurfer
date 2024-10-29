"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { MdKitesurfing } from "react-icons/md";
import { Button } from "./movingBorder";
import { useRouter } from "next/navigation";

export function IntroHeader() {
  const router = useRouter();

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 200 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-32 bg-gradient-to-br from-slate-800 dark:from-slate-200 to-slate-950 dark:to-slate-400 md:pt-4 pb-4 bg-clip-text text-end text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Discover the most <br /> interesting, fun and <br /> weird websites on
        the <br /> internet
      </motion.h1>
      <motion.h4
        initial={{ opacity: 0.5, y: 200 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{
          delay: 0.4,
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="text-slate-950 dark:text-slate-300 text-center text-sm pb-12 md:py-20 mx-4 md:mx-12 lg:mx-40 bg-clip-text font-medium tracking-tight">
        Websurfer is a curated collection of interesting, quirky, and
        astonishing websites. It features exceptional sites that are perfect for
        killing time or learning something new. Explore the internet, one random
        website at a time, all carefully reviewed and categorized.
      </motion.h4>
      <Button
        borderRadius="1.75rem"
        className="bg-sky-800 text-white border-slate-900"
        onClick={() => router.push("/surf")}>
        <MdKitesurfing className="text-2xl mr-2" />
        <span className="text-xl font-medium">Start Surfing</span>
      </Button>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-full pb-16 md:pb-20 lg:pb-36 flex-col items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 w-full z-0",
        className
      )}>
      <div className="relative flex w-full flex-1 scale-y-125 translate-y-[calc(100vh_-_43rem)] md:translate-y-48 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "15rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[15rem] md:w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-black dark:text-white [--conic-position:from_70deg_at_center_top]">
          <div className="absolute  w-[100%] left-0 bg-slate-50 dark:bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-slate-50 dark:bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "15rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[15rem] md:w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]">
          <div className="absolute  w-40 h-[100%] right-0 bg-slate-50 dark:bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-slate-50 dark:bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-50 dark:bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></motion.div>
        <motion.div
          initial={{ width: "0rem" }}
          whileInView={{ width: "15rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[15rem] md:w-[30rem] -translate-y-[7rem] bg-cyan-400 "></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-50 dark:bg-slate-950 "></div>
      </div>

      <div className="relative z-50 flex flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
