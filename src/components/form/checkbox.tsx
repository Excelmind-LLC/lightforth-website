import { cn } from "../../utils/cn";

type CheckboxProps = {
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
};

export const Checkbox = ({
  options,
  selectedOptions,
  onChange,
}: CheckboxProps) => {
  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((item) => item !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  return (
    <div className="w-full flex flex-wrap items-start gap-x-2 gap-y-5">
      {options.map((option) => (
        <label
          key={option}
          className={cn(
            "flex flex-none items-center rounded-full px-4 h-12 py-3.5 justify-center gap-2 border border-[#8C8C8C]",
            {
              "border-[#2CB802] bg-[#2CB802]": selectedOptions.includes(option),
            },
          )}
        >
          <div
            className={cn(
              "size-5 rounded-full border bg-white flex items-center justify-center border-[#8C8C8C]",
              {
                "border-none": selectedOptions.includes(option),
              },
            )}
          >
            {selectedOptions.includes(option) ? (
              <span className="size-2 bg-[#2CB802] rounded-full" />
            ) : null}
          </div>
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
            className="hidden"
          />
          <p
            className={cn("text-base leading-5 font-medium text-black", {
              "text-white": selectedOptions.includes(option),
            })}
          >
            {option}
          </p>
        </label>
      ))}
    </div>
  );
};
