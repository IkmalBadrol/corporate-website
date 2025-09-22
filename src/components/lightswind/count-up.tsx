"use client";

import React from "react";
import CountUp, { type CountUpProps } from "react-countup";
import { cn } from "../lib/utils"; // Adjust path if needed

// Use Omit to remove the original 'end' prop and redefine it as optional.
interface CustomCountUpProps extends Omit<CountUpProps, "end"> {
  end?: number; // Make 'end' optional
  value?: number; // 'value' is our alias, also optional
  colorScheme?: "gradient" | "default";
}

const CustomCounter: React.FC<CustomCountUpProps> = ({
  colorScheme = "default",
  className,
  value,
  end,
  ...rest
}) => {
  const gradientClasses =
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent";

  // Use 'end' if provided, otherwise fall back to 'value'.
  const finalEnd = end ?? value;

  // Add a check to prevent rendering if neither prop is supplied.
  if (finalEnd === undefined) {
    console.error("CountUp component requires either an 'end' or 'value' prop.");
    return null;
  }

  return (
    <CountUp
      end={finalEnd}
      className={cn(
        className,
        colorScheme === "gradient" && gradientClasses
      )}
      {...rest}
    />
  );
};

export { CustomCounter as CountUp };