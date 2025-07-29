import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <div className="relative">
      <input
        className={`w-full px-0 py-1 bg-transparent text-white placeholder-gray-400 focus:outline-none border-b-2 border-gray-600 focus:border-orange-500/50 transition-all duration-300 ${
          className || ""
        }`}
        {...props}
      />
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent transform scale-x-0 focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default Input;
