import React from "react";
import RadioButton from "../atoms/radioButton";
import Label from "../atoms/label";

interface RadioGroupProps {
  name: string;
  options: string[];
  label: string;
  selectedValue: string;
  onChange: (value: string) => void;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  label,
  selectedValue,
  onChange,
  className,
}) => {
  return (
    <div className={className}>
      <Label htmlFor={name}>{label}</Label>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <RadioButton
            key={option}
            name={name}
            value={option}
            label={option}
            checked={selectedValue === option}
            onChange={(e) => onChange(e.target.value)}
            required
          />
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
