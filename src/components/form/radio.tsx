import { ComponentProps, useState } from "react";
import { cn } from "../../utils/cn";

type RadioInputProps = {
  options: Array<{
    label: string;
    value: string;
  }>;
  onSendValue: (value: string) => void;
} & ComponentProps<"input">;
export const RadioInput = ({
  name,
  options,
  onSendValue,
  ...props
}: RadioInputProps) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  return (
    <div className="w-full flex flex-col items-start gap-6">
      {options.map(({ label, value }, index) => (
        <label
          htmlFor={value}
          key={index}
          className="w-full flex py-[19px] px-[30px] items-center gap-4.5 border border-[#EAEAEA] rounded-md"
        >
          <div
            className={cn(
              "size-5 rounded-full border bg-white flex items-center justify-center",
              {
                "border-button-active": selectedValue === value,
                "border-gray-300": selectedValue !== value,
              },
            )}
          >
            {selectedValue === value ? (
              <span className="size-2 bg-button-active rounded-full" />
            ) : null}
          </div>
          <p className="text-primary-100 text-lg font-medium">{label}</p>
          <input
            type="radio"
            name={name}
            id={value}
            value={value}
            onChange={(e) => {
              setSelectedValue(e.target.value);
              onSendValue(e.target.value);
            }}
            {...props}
            className="hidden"
          />
        </label>
      ))}
    </div>
  );
};
