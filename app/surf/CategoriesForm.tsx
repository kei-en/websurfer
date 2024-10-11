import { MdKitesurfing } from "react-icons/md";
import { InputOption } from "@/components/ui/inputoption";
import { categories } from "@/data";
import { cookies } from "next/headers";
import { ToggleAllButton } from "../../components/ToggleAll";

export async function CategoriesForm() {
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
  };

  return (
    <section className="md:w-[95%] lg:w-5/6 h-5/6 mx-auto mt-8 mb-0 md:my-8 bg-cyan-950 text-white rounded-md rounded-b-none md:rounded-lg p-4">
      <div className="my-8 lg:m-8 w-fit">
        <h2 className="text-2xl font-semibold py-4">Welcome to Websurfer!</h2>
        <p>
          Click the Next Site button and get a random website. It&apos;s that
          easy. If you want, you can select categories to surf below. If you
          don&apos;t select any categories, all will be used to find websites
          for you. Categories can be changed later on from the menu.
        </p>
        <form action={getCategories}>
          <button className="flex w-3/4 md:w-1/3 lg:w-1/4 justify-center items-center text-white mx-auto mt-16 md:mt-20 p-4 rounded-lg bg-[#0E96C1] hover:bg-[#097191] cursor-pointer">
            <MdKitesurfing className="text-2xl mr-2" />
            <span className="text-xl font-medium">Start Surfing</span>
          </button>
          <h3 className="text-xl font-semibold py-4">Select your categories</h3>
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
        </form>
        <p className="text-sm m-4 text-gray-200">
          Please note: some categories contain only a few websites at the
          moment. It&apos;s recommended to select more categories to start with.
        </p>
      </div>
    </section>
  );
}
