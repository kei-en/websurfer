"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { InputOption } from "./ui/inputoption";
import { createSubmission } from "@/app/submit/actions";

type CategoriesField = {
  id: string;
  color: string;
  title: string;
  description: string;
};

export function SubmitForm({
  categories,
  id,
}: {
  categories: CategoriesField[];
  id: string;
}) {
  return (
    <div
      id={id}
      className="w-[95%] lg:w-5/6 mx-auto mb-2 md:mb-4 rounded-md md:rounded-lg p-4 pt-2 px-10 md:p-8 md:pt-4 md:px-16 shadow-input border border-slate-800 bg-slate-300 dark:bg-slate-950 opacity-95">
      <div className="my-8 mx-0  w-fit">
        <h2 className="text-2xl font-semibold py-4">
          Submit your own Website!
        </h2>
        <p>
          Websurfer encourages self-promotion! Of course, as long as your site
          is within the given rules. So, go for it.
        </p>
      </div>
      <form className="my-8" action={createSubmission}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="projectmayhem"
            type="text"
            name="name"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            name="email"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="url">Enter the URL</Label>
          <Input
            id="url"
            placeholder="https://projectmayhem.com"
            type="url"
            name="url"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="my-4">
          <h3 className="mb-4 font-semibold text-sm">Select a category</h3>
          <ul className="grid md:grid-cols-2 auto-cols-auto gap-4 md:p-4">
            {categories.map((category) => (
              <li key={category.id}>
                <LabelInputContainer>
                  <InputOption
                    key={category.id}
                    id={category.id}
                    type="radio"
                    name="category"
                    color={category.color}
                    title={category.title}
                    description={category.description}
                    required
                  />
                </LabelInputContainer>
              </li>
            ))}
          </ul>
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-slate-400 via-slate-300 dark:from-slate-600 dark:via-slate-800 dark:to-slate-600 to-slate-400 block dark:bg-slate-800 w-full rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit">
          Submit site &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

export const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
