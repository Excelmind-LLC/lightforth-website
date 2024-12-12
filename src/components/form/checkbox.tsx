import { cn } from "../../utils/cn";

type CheckboxProps = {
   options: string[];
   selectedOptions: string[];
   onChange: (selected: string[]) => void;
}

const Checkbox = ({ options, selectedOptions, onChange }: CheckboxProps) => {
   const handleCheckboxChange = (option: string) => {
      if (selectedOptions.includes(option)) {
         onChange(selectedOptions.filter(item => item !== option));
      } else {
         onChange([...selectedOptions, option]);
      }
   };

   return (
      <div className="w-full flex flex-wrap space-x-2 space-y-4" >
         {options.map(option => (
            <label
               key={option}
               className={`flex-none flex items-center space-x-1 p-2 rounded-3xl border border-gray-300 ${selectedOptions.includes(option) ? 'bg-[#2CB802]' : 'bg-white'}`}
            >
               <div
                  className={cn(
                     "size-5 rounded-full border bg-white flex items-center justify-center",
                     {
                        "border-button-active": selectedOptions.includes(option),
                        "border-gray-300": !selectedOptions.includes(option),
                     }
                  )}
               >{selectedOptions.includes(option) ? (
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
               <p className={`text-[16px] leading-[20px] font-medium ${selectedOptions.includes(option) ? 'text-white' : 'text-primary-100'}`}>{option}</p>
            </label>
         ))}
      </div>
   );
};

export default Checkbox;