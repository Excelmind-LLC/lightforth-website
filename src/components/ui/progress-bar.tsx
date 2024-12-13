import { ComponentProps } from "react";
import { ArrowLeftIcon } from "../../assets/icon";

export const ProgressBar = ({
  width,
  ...props
}: { width?: number } & ComponentProps<"button">) => {
  return (
    <div className="flex gap-2 items-center w-full">
      {width ? (
        <button {...props}>
          <ArrowLeftIcon />
        </button>
      ) : null}

      <div className="w-full h-2 rounded-full bg-[#D9D9D9] relative">
        {width ? (
          <span
            className="absolute top-0 h-2 left-0 bg-[#0094FC] rounded-full"
            style={{
              width: `${width}%`,
            }}
          />
        ) : null}
      </div>
    </div>
  );
};
