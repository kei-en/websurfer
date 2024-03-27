import { categories } from "@/data";
import { CategoriesForm } from "./CategoriesForm";
import { ShowSites } from "./ShowSites";
import { cookies } from "next/headers";

export default function Surf() {
  const cookieStore = cookies();
  const cats = cookieStore.get("categories");
  const ids = categories.map((id) => {
    return id;
  });

  return (
    <div className="w-full min-h-screen">
      {cats ? <ShowSites cats={cats} ids={ids} /> : <CategoriesForm />}
    </div>
  );
}
