import { cva, VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'rounded-md font-semibold text-center transition-all duration-200 focus:outline-none',
  {
    variants: {
      variant: {
        primary: 'bg-primary-red text-white hover:bg-red-500',
        primaryGradient: 'btn-primary-gradient text-black',
        secondary: 'bg-secondary-peach text-black hover:bg-secondary-peach-500',
        danger: 'bg-primary-red text-white hover:bg-primary-red-700',
        success: 'bg-green-500 text-white hover:bg-green-600',
        outline: 'bg-transparent border-2 border-white',
      },
      size: {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-1 h-9.5 text-base',
        lg: 'px-5 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
