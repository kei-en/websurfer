"use client";

import Checkbox from "./ui/inputOption";
import { MdKitesurfing } from "react-icons/md";
import useCategories from "@/hooks/useCategories";

export default function Categories({ categories }: { categories: Array<any> }) {
  const { allChecked, slug, showCategories, un_checkAll, getRandomSite } =
    useCategories(categories);

  console.log(slug);

  return (
    <>
      {showCategories ? (
        <section className="md:w-[95%] lg:w-5/6 h-5/6 mx-auto my-8 bg-cyan-950 text-white rounded-lg p-4">
          <div className="my-8 lg:m-8 w-fit">
            <h2 className="text-2xl font-semibold py-4">
              Welcome to Surf<del>Bored</del>!
            </h2>
            <p>
              Click the Next Site button and get a random website. It's that
              easy. If you want, you can select categories to explore below. If
              you don't select any categories, all will be used to find websites
              for you. Categories can be changed later on from the menu.
            </p>
            <button
              onClick={() => getRandomSite()}
              className="flex w-3/4 md:w-1/3 lg:w-1/4 justify-center items-center text-white mx-auto mt-20 p-4 rounded-lg bg-[#0E96C1] hover:bg-[#097191] cursor-pointer">
              <MdKitesurfing className="text-2xl mr-2" />
              <span className="text-xl font-medium">Start Surfing</span>
            </button>
            <h3 className="text-xl font-semibold py-4">
              Select your categories
            </h3>
            <div className="grid md:grid-cols-2 auto-cols-auto gap-12">
              {categories.map((category) => (
                <Checkbox
                  key={category.id}
                  id={category.id}
                  type="checkbox"
                  color={category.color}
                  title={category.title}
                  description={category.description}
                />
              ))}
            </div>
            <button
              className="m-4 mt-6 bg-cyan-800 p-2 rounded-sm text-xs font-semibold"
              onClick={() => un_checkAll()}>
              Toggle all categories
            </button>
            <p className="text-sm m-4 text-gray-200">
              Please note: some categories contain only a few websites at the
              moment. It&apos;s recommended to select more categories to start
              with.
            </p>
          </div>
        </section>
      ) : (
        <section>
          <iframe
            className="w-[95%] mx-auto rounded-t-md min-h-[88vh]"
            src={slug}
            tabIndex={0}
            sandbox="allow-scripts allow-same-origin"
            seamless></iframe>
        </section>
      )}
    </>
  );
}
