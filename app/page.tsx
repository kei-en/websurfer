import { Footer } from "@/components/footer";
import { IntroHeader } from "@/components/ui/intro";
import { categories } from "@/data";
import { cookies } from "next/headers";

export default function Home() {
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
    <section className="bg-slate-950">
      <IntroHeader />
      <Footer />
    </section>
  );
}
