"use client";
import { Footer } from "@/components/footer";
import { categories } from "@/data";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { PiCopyDuotone } from "react-icons/pi";
import { IoArrowRedoOutline } from "react-icons/io5";
import Link from "next/link";

interface Site {
  id: string;
  title: string;
  description: string;
  slug: string;
  submitter: string;
}

interface Category {
  title: string;
  sites: Site[];
}

export default function Share() {
  const [site, setSite] = useState<Site>({
    id: "",
    title: "",
    description: "",
    slug: "",
    submitter: "",
  });
  const [isCopied, setIsCopied] = useState(false);

  const { id } = useParams();
  const { selectedSites } = getSites(categories);

  const pathname = usePathname();
  const shareUrl = process.env.NEXT_PUBLIC_HOST_URL + pathname;

  useEffect(() => {
    selectedSites.forEach((selectedSite: Site) => {
      if (id === selectedSite.id) {
        setSite(selectedSite);
      }
    });
  }, [id, selectedSites]);

  const handleCopy = async () => {
    try {
      //Copy text to clipboard
      await navigator.clipboard.writeText(shareUrl);
      setIsCopied(true); // Show "Copied!" effect
      // Remove "Copied!" text after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="w-full">
      <div className="w-[95%] lg:w-5/6 h-full mx-auto mt-20 mb-0 md:my-24 border border-slate-700 bg-slate-300 dark:bg-slate-950 rounded-md rounded-b-none md:rounded-lg p-4">
        <div className="flex flex-col m-4 p-4 border border-gray-50 rounded-md">
          <h3 className="font-semibold text-xl">{site?.title}</h3>
          <p className="pl-1 italic py-2">- {site?.description}</p>
          <p className="text-sm">
            Submitted by: <span className="underline">{site?.submitter}</span>
          </p>
          <Link
            href={site?.slug}
            className="flex justify-center items-center text-white mx-auto mt-16 p-4 rounded-lg bg-sky-700 hover:bg-sky-600 cursor-pointer">
            <IoArrowRedoOutline className="text-2xl mr-2" />
            <span className="font-medium">Visit the website</span>
          </Link>
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold">Share via:</h3>
          <button
            className="flex items-center mt-8 ml-2 p-2 rounded-lg border-2 border-sky-700 bg-transparent hover:bg-sky-600 cursor-pointer"
            onClick={handleCopy}>
            <PiCopyDuotone />
            {isCopied ? "Copied!" : "Copy URL"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function getSites(cats: Category[]) {
  let sites: Site[] = [];

  cats.forEach((cat) => {
    cat.sites.forEach((site) => {
      sites.push(site);
    });
  });

  return { selectedSites: sites };
}
