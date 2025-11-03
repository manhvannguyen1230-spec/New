import React from 'react';
import { colors, spacing, typography } from '../../styles';

export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  startIcon,
  endIcon,
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded transition-colors';
  const sizeStyles = {
    sm: `text-[14px] leading-[20px] px-[${spacing.padding.sm}] py-[${spacing.padding.xs}]`,
    md: `text-[${typography.button.fontSize}] leading-[${typography.button.lineHeight}] px-[${spacing.padding.md}] py-[${spacing.padding.sm}]`,
    lg: `text-[18px] leading-[28px] px-[${spacing.padding.lg}] py-[${spacing.padding.md}]`,
  };

  const variantStyles = {
    primary: `bg-[${colors.background.brand}] text-[${colors.text.inverse}] hover:bg-[${colors.text.brand}] font-[${typography.button.fontWeight}]`,
    secondary: `bg-[${colors.background.secondary}] text-[${colors.text.primary}] 
      hover:bg-[${colors.background.tertiary}] border border-[${colors.border.default}] font-[${typography.button.fontWeight}]`,
    text: `bg-transparent text-[${colors.text.primary}] hover:bg-[${colors.background.secondary}] font-[${typography.button.fontWeight}]`,
  };

  const widthStyles = fullWidth ? 'w-full' : '';
  const iconSpacing = startIcon || endIcon ? `gap-[${spacing.gap.sm}]` : '';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${widthStyles}
        ${iconSpacing}
        ${disabledStyles}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};