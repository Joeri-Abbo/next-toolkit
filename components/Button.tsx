// components/Button.tsx
import { ReactNode } from 'react';

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

const Button = ({ onClick, children }: ButtonProps) => (
  <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 mb-4">
    {children}
  </button>
);

export default Button;
