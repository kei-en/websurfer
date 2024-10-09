import Accordion from "./ui/accordion";
import { rules } from "@/data";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { ImBlocked } from "react-icons/im";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";

export default function Rules() {
  return (
    <section className="relative w-[98%] md:w-[95%] lg:w-5/6 h-5/6 mx-auto mt-20 mb-12 border border-slate-800 bg-slate-950 text-white rounded-md md:rounded-lg p-4">
      <div className="my-8 lg:m-8 w-fit">
        <h2 className="text-2xl font-semibold py-4">
          Submit a website to Websurfer
        </h2>
        <p>
          To submit a website to Websurfer fill in the form at the bottom of
          this page. Please note, that Websurfer prioritizes{" "}
          <b>Quality over Quantity</b> and has <b>strict rules</b> for what
          websites can be submitted. Submissions not following these rules will
          be rejected. We recommend browsing Websurfer for a while to get a
          feeling of what we want on this site.
        </p>
      </div>
      {rules && (
        <div className="w-full grid auto-cols-auto lg:grid-cols-2 gap-8 p-4">
          <div className="bg-green-900 bg-opacity-70 p-4 rounded-md">
            <div className="inline-flex items-center justify-evenly">
              <IoIosCheckmarkCircleOutline className="w-6 h-6 text-white bg-green-900 rounded-full" />
              <h3 className="font-bold py-4 px-2">Allowed</h3>
            </div>
            {rules.allowed.map((rule, index) => (
              <Accordion
                title={rule.title}
                description={rule.description}
                key={index}
                id={index}
              />
            ))}
          </div>
          <div className="bg-red-900 bg-opacity-70 p-4 rounded-md">
            <div className="inline-flex items-center">
              <ImBlocked className="w-6 h-6 text-red-700 bg-gray-800 rounded-full" />
              <h3 className="font-bold py-4 px-2">Not Allowed</h3>
            </div>
            {rules.not_allowed.map((rule, index) => (
              <Accordion
                title={rule.title}
                description={rule.description}
                key={index}
                id={index}
              />
            ))}
          </div>
        </div>
      )}
      <div className="mx-4 my-2 rounded-md border border-gray-50 p-8 bg-sky-400 bg-opacity-50">
        <FaInfoCircle className="w-3 h-3 -ml-3" />
        <p>
          Before submitting sites to Websurfer,&nbsp;
          <Link className="font-semibold underline" href="/surf">
            surf through the existing Websites
          </Link>{" "}
          for a while to get an impression of what is already there.
        </p>
      </div>
    </section>
  );
}
