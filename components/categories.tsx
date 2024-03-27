"use client";
import { useCallback, useState } from "react";
import { InputOption } from "./ui/inputoption";
import { MdKitesurfing } from "react-icons/md";

export default function Categories({ categories }: { categories: Array<any> }) {
  const [checked, setChecked] = useState<boolean>(true);
  const [options, setOptions] = useState(0);
  const [slug, setSlug] = useState<string>("");
  const [sites, setSites] = useState<string[]>([]);
  const [sitesCpy, setSitesCpy] = useState<string[]>([]);
  const [showCategories, setShowCategories] = useState<boolean>(true);

  const handleCheckboxSelect = (checked?: boolean) => {
    let values: string[] = [];

    if (checked !== undefined) {
      const allCboxes = document.querySelectorAll('input[name="category"]');
      allCboxes.forEach((cbox) => {
        (cbox as HTMLInputElement).checked = checked;
        values.push((cbox as HTMLInputElement).value);
      });
      setOptions(0);
    } else {
      const cboxes = document.querySelectorAll(
        'input[name="category"]:checked'
      );
      cboxes.forEach((cbox) => {
        values.push((cbox as HTMLInputElement).value);
      });
      console.log(cboxes);
      setOptions(cboxes.length);
    }

    return values;
  };

  // Check and uncheck all checkboxes
  const un_checkAll = () => {
    handleCheckboxSelect(checked);
    setChecked(!checked);
  };

  const getRandomSite = useCallback(() => {
    let values =
      options !== undefined
        ? handleCheckboxSelect()
        : handleCheckboxSelect(true);

    let newSites: string[] = [];
    values.forEach((value) => {
      const category = categories.find((item) => item.id === value);
      category?.sites.forEach((site: { slug: string }) => {
        newSites.push(site.slug);
      });
    });

    setSites(newSites);
    setSitesCpy([...newSites]);

    if (newSites.length > 0) {
      const randomIndex = Math.floor(Math.random() * newSites.length);
      const selectedItem = newSites[randomIndex];

      newSites.splice(randomIndex, 1);
      setSitesCpy(newSites);

      setSlug(selectedItem);
      setShowCategories(false);
    }
  }, [categories, options]);

  return (
    <>
      {showCategories ? (
        <section className="md:w-[95%] lg:w-5/6 h-5/6 mx-auto my-8 bg-cyan-950 text-white rounded-lg p-4">
          <div className="my-8 lg:m-8 w-fit">
            <h2 className="text-2xl font-semibold py-4">
              Welcome to Surf<del>Bored</del>!
            </h2>
            <p>
              Click the Next Site button and get a random website. It&apos;s
              that easy. If you want, you can select categories to surf through
              below. If you don&apos;t select any categories, all will be used
              to find websites for you. Categories can be changed later on from
              the menu.
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
                <InputOption
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
