import { Footer } from "@/components/footer";
import Rules from "@/components/rules";
import { SubmitForm } from "@/components/submitForm";
import { categories } from "@/data";

export default function Submit() {
  return (
    <div className="w-full h-full">
      <Rules />
      <SubmitForm categories={categories} id="submit-site" />
      <Footer />
    </div>
  );
}
