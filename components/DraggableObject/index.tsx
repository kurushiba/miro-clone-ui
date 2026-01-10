import React from 'react';
import './DraggableObject.css';

interface DraggableObjectProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const DraggableObject: React.FC<DraggableObjectProps> = ({
  children,
  style,
  className,
}) => {
  return (
    <div
      style={style}
      className={`draggable-object-container ${className || ''}`}
    >
      {children}
    </div>
  );
};
