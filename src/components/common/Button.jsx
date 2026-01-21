import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../../styles/common.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon = false,
  onClick,
  href,
  className = ''
}) => {
  const baseClass = `btn btn-${variant} btn-${size} ${className}`;
  
  const content = (
    <>
      {children}
      {icon && <ArrowRight size={18} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {content}
    </button>
  );
};

export default Button;