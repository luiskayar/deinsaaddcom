import React from "react";
import { Label } from "../";

interface FormFieldProps {
  htmlFor: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
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
