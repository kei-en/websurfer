"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { InputOption } from "./ui/inputoption";

export function SubmitForm({ categories }: { categories: Array<any> }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="md:max-w-3xl lg:max-w-4xl w-[94%] md:w-full mx-auto mb-2 md:mb-4 rounded-t-none rounded-md p-4 pt-2 px-10 md:p-8 md:pt-4 md:px-16 shadow-input bg-stone-950 opacity-95">
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="projectmayhem" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="url">Enter the URL</Label>
          <Input id="url" placeholder="https://projectmayhem.com" type="url" />
        </LabelInputContainer>
        <LabelInputContainer className="my-4">
          <h3 className="mb-4 font-semibold text-sm text-white">
            Select a category
          </h3>
          <ul className="grid md:grid-cols-2 auto-cols-auto gap-4 md:p-4">
            {categories.map((category) => (
              <li key={category.id}>
                <LabelInputContainer>
                  <InputOption
                    key={category.id}
                    id={category.id}
                    type="radio"
                    color={category.color}
                    title={category.title}
                    description={category.description}
                  />
                </LabelInputContainer>
              </li>
            ))}
          </ul>
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
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
