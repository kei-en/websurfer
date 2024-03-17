"use client";

import Checkbox from "./checkbox";

export default function Categories({ categories }: { categories: Array<any> }) {
  const handleCheckboxSelect = () => {
    const cboxes = document.querySelectorAll('input[name="category"]:checked');
    let values: string[] = [];
    cboxes.forEach((cbox) => {
      values.push((cbox as HTMLInputElement).value);
    });
    console.log(values);
  };

  return (
    <section className="my-8 lg:m-8 w-full">
      <h3 className="text-xl font-semibold py-4">Select your categories</h3>
      <div className="grid md:grid-cols-2 auto-cols-auto gap-12">
        {categories.map((category) => (
          <Checkbox
            key={category.id}
            id={category.id}
            color={category.color}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>
      <button
        className="m-4 mt-6 bg-cyan-800 p-2 rounded-sm text-xs font-semibold"
        onClick={() => handleCheckboxSelect()}>
        Toggle all categories
      </button>
      <p className="text-sm m-4 text-gray-200">
        Please note: some categories contain only a few websites at the moment.
        It&apos;s recommended to select more categories to start with.
      </p>
    </section>
  );
}
