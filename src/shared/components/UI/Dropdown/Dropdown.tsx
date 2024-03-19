import { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  onSelect: (option: Option) => void;
  defaultSelection?: Option | null;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, defaultSelection = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(defaultSelection);

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);

    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? selectedOption.label : "Select an option"}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 12a1 1 0 01-0.723-1.688l-4.11-4.11a1 1 0 111.414-1.414L10 9.586l3.418-3.418a1 1 0 111.414 1.414l-4.11 4.11A1 1 0 0110 12z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionSelect(option)}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${
                  option === selectedOption ? "bg-gray-100" : ""
                }`}
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
