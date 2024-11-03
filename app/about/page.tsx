import { Footer } from "@/components/footer";
import { Timeline } from "@/components/ui/timeline";

export default function About() {
  const data = [
    {
      title: "Who we are",
      content: (
        <div>
          <p className="font-normal mb-8">
            Websurfer was created to bring back the joy of classic internet
            browsing, letting you stumble upon unique websites as people used to
            do in the early days of online exploration. With every visit, you’ll
            be presented with truly random websites, each inviting you to
            explore. When possible, the website will load directly for you,
            giving you immediate access to its content. Here, you won’t find
            clickbait lists or mediocre content—Websurfer offers a curated
            selection of engaging, quirky, thought-provoking, or educational
            sites. Some might make you laugh, others will get you thinking, and
            others could even be the ideal tools you’ve been looking for.
          </p>
        </div>
      ),
    },
    {
      title: "Submit a site",
      content: (
        <div>
          <p className="font-normal mb-8">
            Each site on Websurfer is carefully screened and approved based on
            specific criteria, which you can review on our Submission Rules
            page. To submit a site, fill out the submission form, and we’ll
            review your submission shortly.
          </p>
        </div>
      ),
    },
    {
      title: "Websurfer in Numbers",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            {/* <div className="mx-auto mt-4 mb-8 bg-slate-300 dark:bg-slate-900 border border-slate-800 rounded-md md:rounded-lg p-4 px-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <h4 className="font-bold text-xl">100</h4>
              <p className="text-sm text-slate-900 dark:text-slate-400">
                Website Views
              </p>
            </div> */}
            <div className="mx-auto mt-4 mb-8 bg-slate-300 dark:bg-slate-900 border border-slate-800 rounded-md md:rounded-lg p-4 px-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <h4 className="font-bold text-xl">5</h4>
              <p className="text-sm text-slate-900 dark:text-slate-400">
                Categories
              </p>
            </div>
            <div className="mx-auto mt-4 mb-8 bg-slate-300 dark:bg-slate-900 border border-slate-800 rounded-md md:rounded-lg p-4 px-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <h4 className="font-bold text-xl">40</h4>
              <p className="text-sm text-slate-900 dark:text-slate-400">
                Approved Websites
              </p>
            </div>
            <div className="mx-auto mt-20 mb-8 bg-slate-300 dark:bg-slate-900 border border-slate-800 rounded-md md:rounded-lg p-4 px-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <h4 className="font-bold text-xl">10</h4>
              <p className="text-sm text-slate-900 dark:text-slate-400">
                Websites in Review
              </p>
            </div>
            <div className="mx-auto mt-20 mb-8 bg-slate-300 dark:bg-slate-900 border border-slate-800 rounded-md md:rounded-lg p-4 px-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <h4 className="font-bold text-xl">7</h4>
              <p className="text-sm text-slate-900 dark:text-slate-400">
                Rejected Websites
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="text-lg w-full">
      <Timeline data={data} />
      <Footer />
    </div>
  );
}
