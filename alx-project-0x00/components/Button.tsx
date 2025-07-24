import React from 'react';
import { ButtonProps } from '../interfaces';

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`bg-blue-500 text-white font-medium ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
