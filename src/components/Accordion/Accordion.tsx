import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from '../Icon/Icon';

import { colors, spacing, typography } from '../../styles';

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export const AccordionItem: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div 
      className={`border border-solid border-[${colors.border.default}] rounded-[${spacing.radius.md}] overflow-hidden ${className}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-[${spacing.padding.md}] bg-[${colors.background.secondary}] hover:bg-[${colors.background.tertiary}] transition-colors`}
      >
        <span className={`text-[${colors.text.primary}] font-semibold`}>
          {title}
        </span>
        <span className={`text-[${colors.text.tertiary}]`}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      {isOpen && (
        <div className={`p-[${spacing.padding.md}] bg-[${colors.background.primary}]`}>
          {children}
        </div>
      )}
    </div>
  );
};

export interface AccordionGroupProps {
  children: React.ReactElement<AccordionProps> | React.ReactElement<AccordionProps>[];
  className?: string;
}

export const Accordion: React.FC<AccordionGroupProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-[${spacing.gap.md}] ${className}`}>
      {children}
    </div>
  );
};