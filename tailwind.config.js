/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        signupBtn : '#A3B8FD',
        signinBtn : '#564FFD',
        gradientBlueStart : '#04205F',
        gradientBlueMid : '#031131',
        gradientBlueEnd : '#020308',
        textGray : '#4E5566',
        pinkBtn : '#ba6ec3',
        pinkBtnText : '#21005D',
        blueBtn : '#99c7fb',
        featureRed : '#FFEEE8',
        featureBrown : "#973C1F",
        featureGrey : '#6E7485',
        blueBox : '#99C7FB',
        instructorBlueBox : '#cce3fd',
        instructorBlueBtn : '#66aaf9',
        darkGreyBg : '#1d2026',
        darkGreyBgBlueBtn : '#006fee',
        pinkBtnGradient : '#842ce1',
        blueBtnGradient : '#003da0',
        blueTick : '#7c67fe',
        blueIcon : '#85b6ff',
        bgGreyABout : '#878787',
        examplePurpleBtn : '#564ffd',
        loginStart : '#B2CFFA',
        loginVia : '#DEE9FB',
        loginEnd : '#AAE9FD',
        contentcreationtext : '#4E5566',
        newBlue : '#3549cb',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}