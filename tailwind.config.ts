import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ClashDisplaySemibold: ['ClashDisplaySemibold', 'sans-serif'],
        ClashDisplayBold: ['ClashDisplayBold', 'sans-serif'],
        ClashDisplayRegular: ['ClashDisplayRegular', 'sans-serif'],
        ClashDisplayMedium: ['ClashDisplayMedium', 'sans-serif']
      },
      colors: {
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        card: {
          DEFAULT: 'hsl(var(--color-card))',
          foreground: 'hsl(var(--color-card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--color-popover))',
          foreground: 'hsl(var(--color-popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
          foreground: 'hsl(var(--color-primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--color-secondary))',
          foreground: 'hsl(var(--color-secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--color-muted))',
          foreground: 'hsl(var(--color-muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--color-accent))',
          foreground: 'hsl(var(--color-accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--color-destructive))',
          foreground: 'hsl(var(--color-destructive-foreground))'
        },
        border: 'hsl(var(--color-border))',
        input: 'hsl(var(--color-input))',
        ring: 'hsl(var(--color-ring))',
        chart: {
          '1': 'hsl(var(--color-chart-1))',
          '2': 'hsl(var(--color-chart-2))',
          '3': 'hsl(var(--color-chart-3))',
          '4': 'hsl(var(--color-chart-4))',
          '5': 'hsl(var(--color-chart-5))'
        },
        'color-1': 'hsl(var(--color-color-1))',
        'color-2': 'hsl(var(--color-color-2))',
        'color-3': 'hsl(var(--color-color-3))',
        'color-4': 'hsl(var(--color-color-4))',
        'color-5': 'hsl(var(--color-color-5))'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'aurora-border': {
          '0%, 100%': {
            borderRadius: '37% 29% 27% 27% / 28% 25% 41% 37%'
          },
          '25%': {
            borderRadius: '47% 29% 39% 49% / 61% 19% 66% 26%'
          },
          '50%': {
            borderRadius: '57% 23% 47% 72% / 63% 17% 66% 33%'
          },
          '75%': {
            borderRadius: '28% 49% 29% 100% / 93% 20% 64% 25%'
          }
        },
        'aurora-1': {
          '0%, 100%': {
            top: '0',
            right: '0'
          },
          '50%': {
            top: '50%',
            right: '25%'
          },
          '75%': {
            top: '25%',
            right: '50%'
          }
        },
        'aurora-2': {
          '0%, 100%': {
            top: '0',
            left: '0'
          },
          '60%': {
            top: '75%',
            left: '25%'
          },
          '85%': {
            top: '50%',
            left: '50%'
          }
        },
        'aurora-3': {
          '0%, 100%': {
            bottom: '0',
            left: '0'
          },
          '40%': {
            bottom: '50%',
            left: '25%'
          },
          '65%': {
            bottom: '25%',
            left: '50%'
          }
        },
        'aurora-4': {
          '0%, 100%': {
            bottom: '0',
            right: '0'
          },
          '50%': {
            bottom: '25%',
            right: '40%'
          },
          '90%': {
            bottom: '50%',
            right: '25%'
          }
        },
        orbit: {
          '0%': {
            transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
          },
          '100%': {
            transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))'
          }
        }
      },
      animation: {
        'aurora-border': 'aurora-border 8s ease-in-out infinite',
        'aurora-1': 'aurora-1 8s ease-in-out infinite',
        'aurora-2': 'aurora-2 8s ease-in-out infinite',
        'aurora-3': 'aurora-3 8s ease-in-out infinite',
        'aurora-4': 'aurora-4 8s ease-in-out infinite',
        'orbit': 'orbit calc(var(--duration)*1s) linear infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;