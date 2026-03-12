'use client'

import React, { forwardRef } from 'react'
import Link from 'next/link'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant
  /** Size preset */
  size?: ButtonSize
  /** Full width button */
  fullWidth?: boolean
  /** Loading state */
  isLoading?: boolean
  /** Left icon element */
  leftIcon?: React.ReactNode
  /** Right icon element */
  rightIcon?: React.ReactNode
  /** Link destination (makes button render as link) */
  href?: string
  /** External link */
  external?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  outline: 'btn btn-outline',
  ghost: 'btn btn-ghost',
  dark: 'btn btn-dark',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'btn-sm',
  md: '', // default, no extra class
  lg: 'btn-lg',
}

/**
 * Unified Button Component
 *
 * Features:
 * - 5 variants: primary, secondary, outline, ghost, dark
 * - 3 sizes: sm, md, lg
 * - Amber focus ring for accessibility
 * - Minimum 44px tap target
 * - Loading state with spinner
 * - Icon support (left/right)
 * - Can render as link with href prop
 *
 * @example
 * <Button variant="primary">Click me</Button>
 * <Button variant="secondary" leftIcon={<Icon name="rocket" />}>Launch</Button>
 * <Button href="/page" external>External Link</Button>
 */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      href,
      external = false,
      disabled,
      className = '',
      ...props
    },
    ref
  ) {
    const baseClasses = `
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${fullWidth ? 'w-full' : ''}
      ${isLoading ? 'pointer-events-none' : ''}
      ${className}
    `.trim()

    const commonProps = {
      className: baseClasses,
      disabled: disabled || isLoading,
      'aria-disabled': disabled || isLoading,
    }

    // Render as link if href provided
    if (href) {
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          className={baseClasses}
        >
          {isLoading && (
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          )}
          {leftIcon && !isLoading && <span className="flex-shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </Link>
      )
    }

    // Render as button
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        {...commonProps}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {isLoading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {leftIcon && !isLoading && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </button>
    )
  }
)

export default Button
