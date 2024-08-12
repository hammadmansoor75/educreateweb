/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      colors : {
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
        loginEnd : '#AAE9FD'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
