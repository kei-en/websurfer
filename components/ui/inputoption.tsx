"use client";
import * as React from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { Label } from "./label";

export interface InputOptionProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  description?: string;
}

const InputOption = React.forwardRef<HTMLInputElement, InputOptionProps>(
  ({ className, type, title, name, description, ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <div className="inline-flex items-center">
        <Label
          htmlFor={props.id}
          className="relative flex items-center p-3 rounded-full cursor-pointer">
          <input
            type={type}
            className={`before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none ${
              type === "checkbox"
                ? "rounded-sm before:rounded-md"
                : "rounded-full"
            } border border-gray-900 dark:border-gray-50 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:bg-cyan-950 checked:bg-gray-50 dark:checked:bg-gray-900 checked:border-gray-900 dark:checked:border-gray-50 checked:before:bg-gray-900 dark:checked:before:bg-gray-50 before:opacity-0 before:transition-opacity hover:before:opacity-10`}
            id={props.id}
            name={name}
            value={props.id}
            ref={ref}
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1">
              {type === "checkbox" && (
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"></path>
              )}
              {type === "radio" && <circle cx="10" cy="10" r="6" />}
            </svg>
          </span>
        </Label>
        <Label
          className={`mt-px font-light text-white cursor-pointer select-none`}
          htmlFor={props.id}>
          <motion.div
            style={{
              background: useMotionTemplate`
              radial-gradient(
                ${
                  visible ? radius + "px" : "0px"
                } circle at ${mouseX}px ${mouseY}px,
                var(--blue-500),
                transparent 50%
              )
            `,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="p-[2px] rounded-lg transition duration-300 group/input">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed">
              {title}
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-100 opacity-90">
              {description}
            </p>
          </motion.div>
        </Label>
      </div>
    );
  }
);
InputOption.displayName = "Input Option";

export { InputOption };
