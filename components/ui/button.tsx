import Link from 'next/link';
import clsx from 'clsx';
import { ReactElement, useEffect, useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const baseStyles = {
  solid: 'gap-x-1 inline-flex items-center justify-center font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  outline: 'gap-x-1 inline-flex ring-1 items-center justify-center font-semibold focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
  ghost: 'gap-x-1 inline-flex items-center justify-center font-semibold focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
  icon: 'rounded-full inline-flex items-center justify-center focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
};

const variantStyles = {
  solid: {
    primary: 'bg-primary text-white hover:bg-indigo-600 active:bg-indigo-700',
    black: 'bg-black text-white hover:bg-gray-700 active:bg-gray-900',
    white: 'bg-white text-black hover:bg-gray-100 active:bg-gray-200',
  },
  outline: {
    primary: 'ring-primary text-primary hover:ring-black hover:text-black active:bg-black active:text-white',
    black: 'ring-black text-black hover:ring-gray-700 active:bg-gray-900 active:text-white',
    white: 'ring-gray-300 text-white hover:ring-white active:bg-gray-200 active:text-black',
  },
  ghost: {
    primary: 'bg-transparent text-primary hover:bg-gray-100 active:bg-gray-200',
    black: 'bg-transparent text-black hover:bg-gray-100 active:bg-gray-200',
    white: 'bg-transparent text-white hover:bg-gray-100 active:bg-gray-200',
  },
  icon: {
    primary: 'text-primary hover:bg-gray-100 active:bg-gray-200',
    black: 'text-black hover:bg-gray-100 active:bg-gray-200',
    white: 'text-white hover:bg-gray-100 active:bg-gray-200',
  },
  sizes: {
    small: 'h-8 px-3 text-sm rounded-md',
    medium: 'h-10 px-4 text-base rounded-md',
    large: 'h-12 px-6 text-lg rounded-lg',
    xlarge: 'h-14 px-8 text-xl rounded-lg',
    icon: 'w-10 h-10', // Only applies for 'icon' variant
  },
};

type ButtonProps = {
  variant?: 'solid' | 'outline' | 'ghost' | 'icon';
  color?: keyof typeof variantStyles.solid | keyof typeof variantStyles.outline | keyof typeof variantStyles.ghost;
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'icon';
  icon?: ReactElement;
  disabled?: boolean;
  href?: string;
} & (
  | Omit<React.ComponentPropsWithoutRef<'button'>, 'size' | 'color'>
  | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'size' | 'color'>
);

export function Button({
  className,
  icon,
  children,
  variant = 'solid',
  color = 'primary',
  size = 'medium',
  disabled,
  href,
  ...props
}: ButtonProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensures the component is only rendered after the client has mounted
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Skip rendering on the server side
  }

  const computedClassName = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    variantStyles.sizes[size],
    className,
    disabled && 'pointer-events-none opacity-50'
  );

  if (href) {
    return (
      <Link href={href} className={computedClassName} {...(props as any)}>
        {icon && <span>{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={computedClassName} disabled={disabled} {...(props as React.ComponentPropsWithoutRef<'button'>)}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}

// Example usage
export function ExampleUsage() {
  return (
    <Button 
      variant="solid" 
      color="primary" 
      size="medium" 
      icon={<ArrowRightIcon className="w-5 h-5" />}
      disabled
    >
      Click me
    </Button>
  );
}
