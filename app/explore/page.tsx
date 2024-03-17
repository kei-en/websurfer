import Link from "next/link";
import { MdKitesurfing } from "react-icons/md";
import { categories } from "@/data";
import Categories from "@/components/ui/categories";

export default function Explore() {
  return (
    <div className="w-full md:w-[95%] lg:w-5/6 h-5/6 mx-auto my-8 bg-cyan-950 text-white rounded-lg p-4">
      <section>
        <h2 className="text-2xl font-semibold py-4">
          Welcome to Surf<del>Bored</del>!
        </h2>
        <p>
          Click the Next Site button and get a random website. It's that easy.
          If you want, you can select categories to explore below. If you don't
          select any categories, all will be used to find websites for you.
          Categories can be changed later on from the menu.
        </p>
        <div className="flex w-3/4 md:w-1/3 lg:w-1/4 justify-center items-center text-white mx-auto mt-20 p-4 rounded-lg bg-[#0E96C1] hover:bg-[#097191] cursor-pointer">
          <MdKitesurfing className="text-2xl mr-2" />
          <Link href="/explore">
            <span className="text-xl font-medium">Start Surfing</span>
          </Link>
        </div>
        <Categories categories={categories} />
      </section>
    </div>
  );
}
