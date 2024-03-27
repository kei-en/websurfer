"use client";
import { BottomGradient } from "@/components/submitForm";
import { useNextSiteButtonContext } from "@/lib/store";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useEffect, useState } from "react";
import { FaXmark, FaShare } from "react-icons/fa6";
import { TiWarning } from "react-icons/ti";

export function ShowSites({
  cats,
  ids,
}: {
  cats: RequestCookie;
  ids: object[];
}) {
  const [currentCategory, setCurrentCategory] = useState<any>([]);
  const [currentSite, setCurrentSite] = useState<any>([]);

  const { infoStatus, setInfoStatus } = useNextSiteButtonContext();

  useEffect(() => {
    // @ts-ignore
    const { selectedCategory, selectedItem } = loadSite(cats, ids);
    setCurrentCategory(selectedCategory);
    setCurrentSite(selectedItem);
  }, [cats, ids]);

  return (
    currentSite && (
      <section className="relative w-full h-full">
        <div
          className={`${
            !infoStatus ? "hidden" : ""
          } w-full h-screen fixed right-0 top-0 bg-black/20 z-50 flex`}
          onClick={() => setInfoStatus(false)}>
          <div
            className={`${
              !infoStatus
                ? "transform translate-x-100 opacity-0"
                : "transform translate-x-0 transition-all duration-500 ease-in-out opacity-100 w-5/6 md:w-1/3 h-screen bg-cyan-950 text-white fixed right-0"
            }`}
            onClick={(e) => e.stopPropagation()}>
            <div className="w-full p-4 inline-flex justify-between">
              <h3 className="font-semibold">Info</h3>
              <button onClick={() => setInfoStatus(false)}>
                <FaXmark className="text-white ml-1 text-xl md:text-base font-bold transform ease-in-out" />
              </button>
            </div>
            <div className="flex flex-col m-4 p-4 border border-gray-50 rounded-md">
              <h3 className="font-semibold">{currentSite.title}</h3>
              <p className="pl-1 italic py-2">- {currentCategory.title}</p>
              <p className="text-gray-300 text-sm">
                Submitted by:{" "}
                <span className="underline">{currentSite.submitter}</span>
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-sm">Share via</h3>
              <div className="flex space-x-2 my-4">
                <button className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
                  <FaShare className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Permalink
                  </span>
                  <BottomGradient />
                </button>
                <button className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
                  <TiWarning className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Report
                  </span>
                  <BottomGradient />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <iframe
            className="absolute w-[95%] mx-auto left-0 right-0 bottom-0 top-20 rounded-t-md min-h-[90vh]"
            src={currentSite.slug}
            allowFullScreen></iframe>
        </div>
      </section>
    )
  );
}

export function loadSite(
  cats: RequestCookie,
  ids: { category: { site: object[] } }
) {
  let newSites: object[] = [];
  let selectedCategory: object = [];

  const cids = JSON.parse(cats.value);
  cids.forEach((id: string) => {
    // @ts-ignore
    for (let category of ids) {
      if (category.id === id) {
        category.sites.forEach((site: { slug: string }) => {
          newSites.push(site);
        });
        selectedCategory = category;
      }
    }
  });
  const loadedSites = [...newSites];

  if (loadedSites.length > 0) {
    const randomIndex = Math.floor(Math.random() * loadedSites.length);
    const selectedItem = loadedSites[randomIndex];

    loadedSites.splice(randomIndex, 1);

    return { selectedCategory, selectedItem };
  }
}
