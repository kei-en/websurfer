import Rules from "@/components/rules";
import { SubmitForm } from "@/components/submitForm";
import { categories } from "@/data";

export default function Submit() {
  return (
    <div className="w-full h-full">
      <Rules />
      <SubmitForm categories={categories} />
    </div>
  );
}
