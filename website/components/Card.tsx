'use client'

import React, { forwardRef } from 'react'
import Link from 'next/link'

export type CardVariant = 'default' | 'elevated' | 'bordered' | 'dark'
export type AccentColor = 'amber' | 'cyan' | 'emerald' | 'none'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: CardVariant
  /** Accent color for left border highlight */
  accent?: AccentColor
  /** Make card interactive (hover effects) */
  interactive?: boolean
  /** Link destination (makes card clickable) */
  href?: string
  /** External link */
  external?: boolean
  /** Remove padding from card body */
  disablePadding?: boolean
}

const variantClasses: Record<CardVariant, string> = {
  default: 'card',
  elevated: 'card card-elevated',
  bordered: 'card card-bordered',
  dark: 'card card-dark',
}

const accentClasses: Record<AccentColor, string> = {
  none: '',
  amber: 'card-accent-amber',
  cyan: 'card-accent-cyan',
  emerald: 'card-accent-emerald',
}

/**
 * Unified Card Component
 *
 * Features:
 * - 4 variants: default, elevated, bordered, dark
 * - 3 accent colors: amber, cyan, emerald
 * - Interactive hover states
 * - Consistent padding and shadow language
 * - Can render as link with href prop
 *
 * @example
 * <Card variant="elevated">Content</Card>
 * <Card variant="bordered" accent="amber">Highlighted</Card>
 * <Card href="/page" interactive>Clickable Card</Card>
 */
export const Card = forwardRef<HTMLDivElement | HTMLAnchorElement, CardProps>(
  function Card(
    {
      children,
      variant = 'default',
      accent = 'none',
      interactive = false,
      href,
      external = false,
      disablePadding = false,
      className = '',
      ...props
    },
    ref
  ) {
    const baseClasses = `
      ${variantClasses[variant]}
      ${accentClasses[accent]}
      ${interactive ? 'card-interactive' : ''}
      ${disablePadding ? 'p-0' : ''}
      ${className}
    `.trim()

    // Render as link if href provided
    if (href) {
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={baseClasses}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </Link>
      )
    }

    // Render as div
    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={baseClasses}
        {...props}
      >
        {children}
      </div>
    )
  }
)

/**
 * Card Header Component
 */
export function CardHeader({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="card-header" {...props}>
      {children}
    </div>
  )
}

/**
 * Card Body Component
 */
export function CardBody({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="card-body" {...props}>
      {children}
    </div>
  )
}

/**
 * Card Footer Component
 */
export function CardFooter({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="card-footer" {...props}>
      {children}
    </div>
  )
}

export default Card
