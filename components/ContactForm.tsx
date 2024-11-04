"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { createContactMessage } from "@/app/contact/actions";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
  return (
    <div className="w-[95%] lg:w-5/6 mx-auto border border-slate-800 mb-2 md:mb-4 rounded-md md:rounded-lg p-4 pt-2 px-10 md:p-8 md:pt-4 md:px-16 shadow-input bg-slate-300 dark:bg-slate-950 opacity-95">
      <div className="my-8 lg:m-8 w-full">
        <h2 className="text-2xl font-semibold py-4">Contact</h2>
        <p className="">
          If you have any questions, ideas or other feedback, feel free to write
          us.
        </p>
      </div>
      <form className="my-8 mx-0 md:mx-16" action={createContactMessage}>
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
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            placeholder="I love this"
            type="text"
            name="subject"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="my-4">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Add your message here."
            name="message"
            className="h-20"
            required
          />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-slate-400 via-slate-300 dark:from-slate-600 dark:via-slate-800 dark:to-slate-600 to-slate-400 block dark:bg-slate-800 w-full rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit">
          Submit &rarr;
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
