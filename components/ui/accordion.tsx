"use client";

import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

type AccordionpProps = {
  title: string;
  description: string;
  id: number;
  active?: boolean;
  className?: string;
};

export default function Accordion({
  title,
  description,
  id,
  active = false,
  className,
}: AccordionpProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, [active]);

  return (
    <div className={cn(`py-2`, className)}>
      <h2>
        <button
          className="flex items-center justify-between w-full text-left font-semibold py-2 pl-2"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}>
          <span className="text-base">{title}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 transform origin-center transition duration-200 ease-out ${
              !accordionOpen && "!rotate-180"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-sm text-gray-200 overflow-hidden transition-all duration-300 ease-in-out mx-2 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}>
        <div className="overflow-hidden">
          <p className="pb-3">{description}</p>
        </div>
      </div>
    </div>
  );
}
