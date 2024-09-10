import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import { cn } from "@/lib/utils"


// Normal Text Input ================================================================================================================
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'black' | 'white';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = 'white', ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex w-full rounded-[8px] border px-3 py-2.5 text-base ring-offset-white',
          {
            'bg-white text-black border-border placeholder:text-hint ring-offset-white hover:border-grey/40 focus-visible:outline-none focus-visible:border focus-visible:border-grey disabled:cursor-not-allowed disabled:opacity-50'
              : variant === 'black',
            'bg-transparent text-white border-white/15 placeholder:text-white/70 ring-offset-transparent hover:border-white/30 focus-visible:outline-none focus-visible:border focus-visible:border-white/50 disabled:cursor-not-allowed disabled:opacity-50'
              : variant === 'white',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };




// Expand Text Input ================================================================================================================
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'black' | 'white';
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-[8px] border px-3 py-2.5 text-lg ring-offset-white",
          {
            'bg-white text-black border-border placeholder:text-hint ring-offset-white hover:border-grey/40 focus-visible:outline-none focus-visible:border focus-visible:border-grey disabled:cursor-not-allowed disabled:opacity-50'
              : variant === 'black',
            'bg-transparent text-white border-white/15 placeholder:text-white/70 ring-offset-transparent hover:border-white/30 focus-visible:outline-none focus-visible:border focus-visible:border-white/50 disabled:cursor-not-allowed disabled:opacity-50'
              : variant === 'white',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };



// Underline Text Input ================================================================================================================
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'black' | 'white';
}

const UnderlineInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = 'black', ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full bg-transparent border-b py-1 text-base focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          {
            'border-transparent hover:border-grey focus-visible:border-primary text-black placeholder:text-hint'
              : variant === 'black',
            'border-transparent hover:border-grey focus-visible:border-grey text-white placeholder:text-white/50'
              : variant === 'white',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
UnderlineInput.displayName = "UnderlineInput";

export { UnderlineInput };