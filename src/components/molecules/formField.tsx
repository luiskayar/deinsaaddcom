import React from "react";
import Label from "../atoms/label";

interface FormFieldProps {
  htmlFor: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  htmlFor,
  label,
  children,
  className,
}) => {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
};

export default FormField;
