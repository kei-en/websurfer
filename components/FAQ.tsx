import { faqs } from "@/data";
import Accordion from "./ui/accordion";

export default function FAQ() {
  return (
    <section className="relative w-[95%] lg:w-5/6 h-5/6 mx-auto mt-20 mb-8 border border-slate-800 bg-slate-950 text-white rounded-md md:rounded-lg p-4">
      <div className="my-8 lg:m-8 w-full">
        <h2 className="text-2xl font-semibold py-4 text-center">FAQs</h2>
        <p className="text-center">Quick answers to questions you may have.</p>
      </div>
      {faqs &&
        faqs.map((faq, index) => (
          <Accordion
            title={faq.title}
            description={faq.description}
            key={index}
            id={index}
            className="mx-4 md:mx-16"
          />
        ))}
    </section>
  );
}
