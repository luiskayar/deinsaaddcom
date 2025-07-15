'use client'
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button type="button"className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded" {...props}>
      {children}
    </button>
  );
}
