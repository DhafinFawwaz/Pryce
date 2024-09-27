import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        low: '8px',
        medium: '16px',
        high: '32px',
      },
      fontFamily: {
          RubikBold: ['Rubik-Bold', 'sans-serif'],
          RubikSemiBold: ['Rubik-SemiBold', 'sans-serif'],
          RubikRegular: ['Rubik-Regular', 'sans-serif'],
          Inter: ['Inter-Regular', 'sans-serif'],
      },
      fontSize: {
        h1: ['30px', '120%'],
        h2: ['20px', '120%'],
        h3: ['20px', '120%'],
        sh1: ['20px', '120%'],
        sh2: ['20px', '120%'],
        b1: ['20px', '120%'],
        b2: ['13px', '120%'],
        st: ['12px','120%'],
      },
      colors: {
          black: '#000000',
          muted: {
            200: '#B3AFCA', //mute bg button
            400: '#828181', //mute color button
            700: '#5A5959', //mute bg button
          },
          bone: '#e8edfd', //background dashboard
          purple: {
            200: '#EAEAFB', //hover
            600: '#988bee', //purple
          },
          orange: {
            100: 'F8F1E4', // bg tag type (transaction)
            400: '#FFB50A', //cashflow expense
            800: '#FF5F00', //pie chart
          },
          white: {
            100: '#FFFFFF', //white
            200: '#FEFEFE', //filter dashboard bg
            300: '#EDEDEE', //border filter dashboard bg
          },
          green: {
            200: '#6EA47E', //BG tag type (transaction)
            400: '#9AE66E', //pie chart
            600: '#8DCE97', //cashflow income
          },
          pink: 'F10086', //pie chart
          sky: {
            400: '#3A86FF',
            600: '#34B3F1',
          }, //pie chart
          gray: {
            300: '#68717D', //light text
            400: '#6B6B77', //icon settings
            800: '#959292', // login icon
            900: '#4A5260', //title card
          },
          navy: '#07071B', //primary
      },
    }
  },
  plugins: [],
};
export default config;
