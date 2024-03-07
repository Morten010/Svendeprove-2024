import * as React from "react";
import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-50  disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/80",
        secondary: "bg-[#D8EADB] text-primary hover:bg-[#D8EADB]/50",
        outline:
          "border-[3px] box-border border-[#48A84D] text-[#48A84D] hover:bg-[#48A84D]/10 font-bold",
        destructive: "",
      },
      size: {
        default: "h-10 py-2 px-4 rounded-md",
        sm: "h-9 px-2 rounded-md",
        lg: "p-3 sm:p-5 text-lg sm:text-xl rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
