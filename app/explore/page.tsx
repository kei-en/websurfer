import { categories } from "@/data";
import Categories from "@/components/categories";

export default function Explore() {
  return (
    <>
      <div className="w-full">
        <Categories categories={categories} />
      </div>
    </>
  );
}
