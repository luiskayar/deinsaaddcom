import React from "react";

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <label
      className={`flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer transition-colors duration-200 ${className || ""}`}
    >
      <div className="relative">
        <input
          type="radio"
          className="sr-only"
          {...props}
        />
        <div className={`w-4 h-4 border-2 border-gray-600 rounded-full flex items-center justify-center transition-all duration-200 ${
          props.checked ? 'border-orange-500 bg-orange-500' : 'hover:border-orange-500/50'
        }`}>
          {props.checked && (
            <div className="w-2 h-2 bg-white rounded-full"></div>
          )}
        </div>
      </div>
      <span className="text-sm">{label}</span>
    </label>
  );
};

export default RadioButton;
