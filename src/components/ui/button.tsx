import { ComponentProps } from "react";

export const Button = ({ children, ...props }: ComponentProps<"button">) => {
  return (
    <button
      className="w-full py-6 h-16 flex items-center justify-center rounded-md disabled:cursor-not-allowed disabled:bg-button-disabled bg-button-active text-white text-xl font-medium"
      {...props}
    >
      {children}
    </button>
  );
};
