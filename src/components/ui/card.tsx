import { ComponentProps } from "react";

export const Card = ({ children }: ComponentProps<"div">) => {
  return (
    <div className="w-[716px] h-auto px-11 py-14 max-h-[90vh] overflow-y-scroll rounded-xl border border-[#ccc]/50 bg-white flex flex-col items-start gap-10">
      {children}
    </div>
  );
};
