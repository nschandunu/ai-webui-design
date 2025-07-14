import React from "react";

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} style={{
      padding: '0.75em 1.5em',
      background: '#0070f3',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
      ...props.style
    }}>
      {children}
    </button>
  );
};

export default CtaButton; 