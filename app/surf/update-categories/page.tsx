import { MdKitesurfing } from "react-icons/md";
import { InputOption } from "@/components/ui/inputoption";
import { categories } from "@/data";
import { cookies } from "next/headers";
import { ToggleAllButton } from "../../../components/ToggleAll";
import { redirect } from "next/navigation";
import { Footer } from "@/components/footer";

export default function UpdateCategories() {
  const getCategories = async (formData: FormData) => {
    "use server";

    let body = formData.getAll("category");

    if (body.length < 1) {
      for (const entry of categories) {
        body.push(entry.id);
      }
    }

    cookies().set({
      name: "categories",
      value: JSON.stringify(body),
      httpOnly: true,
      path: "/surf",
      maxAge: 3600,
      secure: true,
    });
    redirect("/surf");
  };

  return (
    <div className="w-full">
      <div className="w-[95%] lg:w-5/6 h-full mx-auto mt-8 mb-0 md:my-8 bg-cyan-950 text-white rounded-md rounded-b-none md:rounded-lg p-4">
        <div className="my-8 lg:m-8 w-fit">
          <h2 className="text-2xl font-semibold py-4">
            Select your categories
          </h2>
          <p className="mb-6">
            Choose categories you want to be shown while exploring the web. If
            no categories are selected, all will be used to find Sites for you.
          </p>
          <form action={getCategories}>
            <div className="grid md:grid-cols-2 auto-cols-auto gap-12">
              {categories.map((category) => (
                <InputOption
                  key={category.id}
                  id={category.id}
                  type="checkbox"
                  color={category.color}
                  title={category.title}
                  name="category"
                  description={category.description}
                  required={false}
                />
              ))}
            </div>
            <ToggleAllButton title="Toggle all categories" />
            <button className="flex w-3/4 md:w-1/3 lg:w-1/4 justify-center items-center text-white mx-auto mt-16 md:mt-20 p-4 rounded-lg bg-sky-500 md:bg-sky-800 hover:bg-sky-600 cursor-pointer">
              <MdKitesurfing className="text-2xl mr-2" />
              <span className="text-xl font-medium">Continue Surfing</span>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
