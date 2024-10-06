"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { RiMenu4Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { useNextSiteButtonContext } from "@/lib/store";
import { useRouter } from "next/navigation";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      onClick={() => (!active ? setActive(item) : setActive(""))}
      onMouseEnter={() => setActive(item)}
      className="relative py-4">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white inline-flex items-center">
        <span className="hidden md:block">{item}</span>
        {active ? (
          <FaXmark className="text-white ml-1 text-xl md:text-base font-bold transform ease-in-out" />
        ) : (
          <RiMenu4Fill className="text-white ml-1 text-xl md:text-base transform ease-in-out" />
        )}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div className="absolute top-[calc(100%_+_.9rem)] md:top-[calc(100%_+_.2rem)] left-0 md:left-1/2 transform -translate-x-3/4 md:-translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl">
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full boder border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-between pr-8 mx-4">
      {children}
    </nav>
  );
};

export const LogoItem = ({
  title,
  href,
  src,
}: {
  title: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2 items-center">
      <Image
        src={src}
        width={61}
        height={85}
        alt={title}
        className="w-12 h-12 rounded-full p-1 object-contain"
      />
      <h4 className="text-2xl font-bold pt-2 text-black dark:text-white hidden md:block text-end">
        {title}
      </h4>
    </Link>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const NextSiteButton = ({ children }: any) => {
  const router = useRouter();

  const switchSite = () => {
    router.refresh();
  };

  return (
    <button
      onClick={switchSite}
      className="w-fit bg-sky-800 hover:bg-sky-600 mt-5 -mb-1 p-2 px-4 shadow-sm shadow-gray-100 text-center rounded-3xl text-neutral-700 dark:text-neutral-200">
      {children}
    </button>
  );
};

export const InfoButton = ({ children }: any) => {
  const { setInfoStatus } = useNextSiteButtonContext();

  return (
    <button
      onClick={() => setInfoStatus(true)}
      className="w-fit mt-4 p-2 text-center text-neutral-700 dark:text-neutral-200 hover:opacity-[0.9]">
      {children}
    </button>
  );
};

export const SubLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:opacity-[0.9]">
      {children}
    </Link>
  );
};
