import React from "react";

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <label
      className={`flex items-center gap-2 text-gray-700 ${className || ""}`}
    >
      <input
        type="radio"
        className="accent-orange-500 cursor-pointer"
        {...props}
      />
      {label}
    </label>
  );
};
